import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET all videos for a journalist
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

    const videos = await db.video.findMany({
      where: { journalistId },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json({ videos })
  } catch (error) {
    console.error('Error fetching videos:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST upload new video
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Basic validation
    if (!body.title || !body.videoUrl || !body.journalistId) {
      return NextResponse.json(
        { error: 'Title, video URL, and journalist ID are required' },
        { status: 400 }
      )
    }

    const video = await db.video.create({
      data: {
        title: body.title,
        description: body.description || null,
        videoUrl: body.videoUrl,
        thumbnailUrl: body.thumbnailUrl || null,
        duration: body.duration || null,
        tags: body.tags || null,
        journalistId: body.journalistId,
        status: body.status || 'UPLOADING',
        publishedAt: body.status === 'PUBLISHED' ? new Date() : null,
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Video uploaded successfully',
      video
    })

  } catch (error) {
    console.error('Error uploading video:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}