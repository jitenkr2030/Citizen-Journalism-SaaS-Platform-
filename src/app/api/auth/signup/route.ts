import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

const signupSchema = {
  name: (value: string) => typeof value === 'string' && value.length >= 2,
  email: (value: string) => typeof value === 'string' && value.includes('@'),
  channelName: (value: string) => typeof value === 'string' && value.length >= 3,
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Basic validation
    if (!signupSchema.name(body.name)) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters' },
        { status: 400 }
      )
    }

    if (!signupSchema.email(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    if (!signupSchema.channelName(body.channelName)) {
      return NextResponse.json(
        { error: 'Channel name must be at least 3 characters' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const existingJournalist = await db.journalist.findUnique({
      where: { email: body.email }
    })

    if (existingJournalist) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      )
    }

    // Check if channel name already exists
    const existingChannel = await db.journalist.findUnique({
      where: { channelName: body.channelName }
    })

    if (existingChannel) {
      return NextResponse.json(
        { error: 'Channel name already taken' },
        { status: 400 }
      )
    }

    // Generate channel slug
    const channelSlug = body.channelName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')

    // Create journalist account
    const journalist = await db.journalist.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone || null,
        channelName: body.channelName,
        channelSlug,
        location: body.location || null,
        plan: body.plan || 'BASIC',
        planStatus: 'ACTIVE',
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Account created successfully',
      journalist: {
        id: journalist.id,
        name: journalist.name,
        email: journalist.email,
        channelName: journalist.channelName,
        channelSlug: journalist.channelSlug,
        plan: journalist.plan,
      }
    })

  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}