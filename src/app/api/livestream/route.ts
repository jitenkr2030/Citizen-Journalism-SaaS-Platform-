import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { randomBytes } from 'crypto'

// GET all live streams for a journalist
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

    const liveStreams = await db.liveStream.findMany({
      where: { journalistId },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json({ liveStreams })
  } catch (error) {
    console.error('Error fetching live streams:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST create new live stream
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Basic validation
    if (!body.title || !body.journalistId) {
      return NextResponse.json(
        { error: 'Title and journalist ID are required' },
        { status: 400 }
      )
    }

    // Generate unique stream key
    const streamKey = randomBytes(16).toString('hex')
    
    // Generate RTMP URL (in production, this would be your media server URL)
    const streamUrl = `rtmp://your-media-server.com/live/${streamKey}`

    const liveStream = await db.liveStream.create({
      data: {
        title: body.title,
        description: body.description || null,
        streamKey,
        streamUrl,
        status: 'SCHEDULED',
        scheduledAt: body.scheduledAt ? new Date(body.scheduledAt) : null,
        journalistId: body.journalistId,
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Live stream created successfully',
      liveStream: {
        ...liveStream,
        rtmpUrl: streamUrl,
        streamKey
      }
    })

  } catch (error) {
    console.error('Error creating live stream:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PUT update live stream status (start/stop)
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { streamId, status } = body
    
    if (!streamId || !status) {
      return NextResponse.json(
        { error: 'Stream ID and status are required' },
        { status: 400 }
      )
    }

    const updateData: any = { status }
    
    if (status === 'LIVE') {
      updateData.startedAt = new Date()
    } else if (status === 'ENDED') {
      updateData.endedAt = new Date()
    }

    const liveStream = await db.liveStream.update({
      where: { id: streamId },
      data: updateData
    })

    return NextResponse.json({
      success: true,
      message: `Live stream ${status.toLowerCase()} successfully`,
      liveStream
    })

  } catch (error) {
    console.error('Error updating live stream:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}