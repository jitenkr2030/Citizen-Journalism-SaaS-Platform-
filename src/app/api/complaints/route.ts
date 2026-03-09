import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET all complaints (for journalists)
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

    const complaints = await db.complaint.findMany({
      where: { journalistId },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json({ complaints })
  } catch (error) {
    console.error('Error fetching complaints:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST submit new complaint (for public)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Basic validation
    if (!body.name || !body.email || !body.title || !body.description || !body.category) {
      return NextResponse.json(
        { error: 'Name, email, title, description, and category are required' },
        { status: 400 }
      )
    }

    const complaint = await db.complaint.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone || null,
        title: body.title,
        description: body.description,
        category: body.category,
        location: body.location || null,
        evidence: body.evidence || null,
        journalistId: body.journalistId || null,
        status: 'PENDING',
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Complaint submitted successfully',
      complaint
    })

  } catch (error) {
    console.error('Error submitting complaint:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}