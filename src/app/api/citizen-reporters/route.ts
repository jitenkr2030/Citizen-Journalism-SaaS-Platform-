import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET all citizen reporters for a journalist
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

    const citizenReporters = await db.citizenReporter.findMany({
      where: { journalistId },
      include: {
        reports: {
          orderBy: { createdAt: 'desc' },
          take: 5
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json({ citizenReporters })
  } catch (error) {
    console.error('Error fetching citizen reporters:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST add new citizen reporter
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Basic validation
    if (!body.name || !body.email || !body.journalistId) {
      return NextResponse.json(
        { error: 'Name, email, and journalist ID are required' },
        { status: 400 }
      )
    }

    const citizenReporter = await db.citizenReporter.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone || null,
        location: body.location || null,
        idProof: body.idProof || null,
        journalistId: body.journalistId,
        status: 'PENDING',
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Citizen reporter application submitted successfully',
      citizenReporter
    })

  } catch (error) {
    console.error('Error adding citizen reporter:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PUT update citizen reporter status
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { reporterId, status } = body
    
    if (!reporterId || !status) {
      return NextResponse.json(
        { error: 'Reporter ID and status are required' },
        { status: 400 }
      )
    }

    const citizenReporter = await db.citizenReporter.update({
      where: { id: reporterId },
      data: { status }
    })

    return NextResponse.json({
      success: true,
      message: `Citizen reporter ${status.toLowerCase()} successfully`,
      citizenReporter
    })

  } catch (error) {
    console.error('Error updating citizen reporter:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}