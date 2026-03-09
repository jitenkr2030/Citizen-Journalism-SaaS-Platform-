'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Play, Eye, Calendar, Share2, Heart, MessageCircle } from 'lucide-react'

export default function ChannelPage() {
  const [channelData, setChannelData] = useState({
    name: 'Azamgarh News Live',
    description: 'Bringing you the latest news and updates from Azamgarh and surrounding areas.',
    location: 'Azamgarh, Uttar Pradesh',
    totalViews: 15420,
    followers: 2847
  })

  const [articles, setArticles] = useState([
    {
      id: 1,
      title: 'Local Market Renovation Project Announced by Municipal Corporation',
      excerpt: 'The municipal corporation has announced a major renovation project for the main market area...',
      coverImage: '/api/placeholder/400/250',
      publishedAt: '2024-01-15',
      views: 342,
      readTime: '3 min'
    },
    {
      id: 2,
      title: 'Traffic Jam Issue on Main Road - Citizens Demand Solution',
      excerpt: 'Daily commuters are facing severe traffic congestion on the main highway...',
      coverImage: '/api/placeholder/400/250',
      publishedAt: '2024-01-14',
      views: 128,
      readTime: '2 min'
    },
    {
      id: 3,
      title: 'New School Opening in Village Area Brings Hope to Residents',
      excerpt: 'A new primary school is set to open in the village area, benefiting over 200 children...',
      coverImage: '/api/placeholder/400/250',
      publishedAt: '2024-01-13',
      views: 567,
      readTime: '4 min'
    }
  ])

  const [videos, setVideos] = useState([
    {
      id: 1,
      title: 'Live Coverage: City Council Meeting - Important Decisions Made',
      thumbnail: '/api/placeholder/320/180',
      duration: '45:23',
      views: 1203,
      publishedAt: '2024-01-15'
    },
    {
      id: 2,
      title: 'Interview with Local Business Owner - Success Story',
      thumbnail: '/api/placeholder/320/180',
      duration: '12:45',
      views: 892,
      publishedAt: '2024-01-14'
    },
    {
      id: 3,
      title: 'Street Food Festival Highlights - Azamgarh Food Culture',
      thumbnail: '/api/placeholder/320/180',
      duration: '8:30',
      views: 2341,
      publishedAt: '2024-01-13'
    }
  ])

  const [activeSection, setActiveSection] = useState('articles')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Channel Header */}
      <header className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-orange-500">AN</span>
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl font-bold mb-2">{channelData.name}</h1>
              <p className="text-xl mb-4 opacity-90">{channelData.description}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Since 2023
                </span>
                <span className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  {channelData.totalViews.toLocaleString()} views
                </span>
                <span className="flex items-center">
                  <Heart className="h-4 w-4 mr-1" />
                  {channelData.followers.toLocaleString()} followers
                </span>
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                  {channelData.location}
                </span>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                <Button className="bg-white text-orange-500 hover:bg-gray-100">
                  Follow
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveSection('articles')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeSection === 'articles'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Articles
            </button>
            <button
              onClick={() => setActiveSection('videos')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeSection === 'videos'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Videos
            </button>
            <button
              onClick={() => setActiveSection('complaints')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeSection === 'complaints'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Submit Complaint
            </button>
            <button
              onClick={() => setActiveSection('about')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeSection === 'about'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              About
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Live Stream Banner */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div>
                <h3 className="font-semibold text-red-900">Live Stream Scheduled</h3>
                <p className="text-red-700">City Council Meeting - Tomorrow at 6:00 PM</p>
              </div>
            </div>
            <Button className="bg-red-500 hover:bg-red-600">
              <Play className="h-4 w-4 mr-2" />
              Set Reminder
            </Button>
          </div>
        </div>

        {/* Content Sections */}
        {activeSection === 'articles' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
            <div className="grid gap-6">
              {articles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                        <span>{article.publishedAt}</span>
                        <span>•</span>
                        <span>{article.readTime} read</span>
                        <span>•</span>
                        <span>{article.views} views</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <Button variant="outline">Read More</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'videos' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Video Library</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-40">
                      <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2">{video.title}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Eye className="h-4 w-4 mr-1" />
                      {video.views.toLocaleString()} views
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'complaints' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Submit a Complaint or Tip</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6">
                  Help us investigate issues in our community. Your identity will be protected.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Submit Complaint
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'about' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">About {channelData.name}</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  {channelData.name} is dedicated to bringing you accurate, timely, and comprehensive news coverage 
                  from Azamgarh and surrounding regions. Our team of experienced journalists works around the clock 
                  to keep you informed about the issues that matter most to our community.
                </p>
                <p className="text-gray-600 mb-4">
                  We believe in the power of independent journalism to hold power accountable, give voice to the 
                  voiceless, and foster an informed citizenry. Our commitment is to truth, integrity, and public service.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
                    <div className="text-gray-600">Articles Published</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                    <div className="text-gray-600">Investigative Reports</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">1000+</div>
                    <div className="text-gray-600">Issues Resolved</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">{channelData.name}</h3>
              <p className="text-gray-400">Your trusted source for local news and information.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Latest News</a></li>
                <li><a href="#" className="hover:text-white">Videos</a></li>
                <li><a href="#" className="hover:text-white">Submit Tip</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{channelData.location}</li>
                <li>contact@azamgarhnewslive.com</li>
                <li>+91 98765 43210</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-white">
                  Facebook
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-white">
                  Twitter
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-white">
                  YouTube
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 {channelData.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}