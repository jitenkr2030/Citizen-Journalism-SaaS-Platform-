import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET all donations for a journalist
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

    const donations = await db.donation.findMany({
      where: { journalistId },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json({ donations })
  } catch (error) {
    console.error('Error fetching donations:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST create new donation
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Basic validation
    if (!body.name || !body.email || !body.amount || !body.journalistId) {
      return NextResponse.json(
        { error: 'Name, email, amount, and journalist ID are required' },
        { status: 400 }
      )
    }

    const donation = await db.donation.create({
      data: {
        name: body.name,
        email: body.email,
        amount: parseFloat(body.amount),
        message: body.message || null,
        type: body.type || 'DONATION',
        journalistId: body.journalistId,
        status: 'PENDING',
        stripePaymentIntentId: body.stripePaymentIntentId || null,
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Donation created successfully',
      donation
    })

  } catch (error) {
    console.error('Error creating donation:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}