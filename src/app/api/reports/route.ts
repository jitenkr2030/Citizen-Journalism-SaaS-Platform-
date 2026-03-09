import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET all reports for a journalist
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

    const reports = await db.report.findMany({
      where: {
        reporter: {
          journalistId
        }
      },
      include: {
        reporter: {
          select: {
            id: true,
            name: true,
            location: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json({ reports })
  } catch (error) {
    console.error('Error fetching reports:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST submit new report (from citizen reporter)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Basic validation
    if (!body.title || !body.content || !body.reporterId) {
      return NextResponse.json(
        { error: 'Title, content, and reporter ID are required' },
        { status: 400 }
      )
    }

    const report = await db.report.create({
      data: {
        title: body.title,
        content: body.content,
        media: body.media || null,
        location: body.location || null,
        reporterId: body.reporterId,
        status: 'PENDING',
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Report submitted successfully',
      report
    })

  } catch (error) {
    console.error('Error submitting report:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PUT update report status
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { reportId, status } = body
    
    if (!reportId || !status) {
      return NextResponse.json(
        { error: 'Report ID and status are required' },
        { status: 400 }
      )
    }

    const report = await db.report.update({
      where: { id: reportId },
      data: { status }
    })

    return NextResponse.json({
      success: true,
      message: `Report ${status.toLowerCase()} successfully`,
      report
    })

  } catch (error) {
    console.error('Error updating report:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}