import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET all memberships for a journalist
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const journalistId = searchParams.get('journalistId')
    
    if (!journalistId) {
      return NextResponse.json(
        { error: 'Journalist ID required' },
        { status: 400 }
      )
    }

    const memberships = await db.membership.findMany({
      where: { journalistId },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json({ memberships })
  } catch (error) {
    console.error('Error fetching memberships:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST create new membership
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Basic validation
    if (!body.name || !body.email || !body.amount || !body.type || !body.journalistId) {
      return NextResponse.json(
        { error: 'Name, email, amount, type, and journalist ID are required' },
        { status: 400 }
      )
    }

    const membership = await db.membership.create({
      data: {
        name: body.name,
        email: body.email,
        amount: parseFloat(body.amount),
        type: body.type, // SUPPORTER or PREMIUM
        journalistId: body.journalistId,
        status: 'ACTIVE',
        stripeSubscriptionId: body.stripeSubscriptionId || null,
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Membership created successfully',
      membership
    })

  } catch (error) {
    console.error('Error creating membership:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}