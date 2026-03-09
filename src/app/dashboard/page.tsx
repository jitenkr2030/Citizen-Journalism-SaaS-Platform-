'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Plus, Video, FileText, Users, TrendingUp, DollarSign } from 'lucide-react'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('articles')
  const [articles, setArticles] = useState([
    { id: 1, title: 'Local Market Renovation Project Announced', views: 342, status: 'published', date: '2024-01-15' },
    { id: 2, title: 'Traffic Jam Issue on Main Road', views: 128, status: 'draft', date: '2024-01-14' },
    { id: 3, title: 'New School Opening in Village Area', views: 567, status: 'published', date: '2024-01-13' },
  ])
  const [videos, setVideos] = useState([
    { id: 1, title: 'Live Coverage: City Council Meeting', duration: '45:23', views: 1203, status: 'published' },
    { id: 2, title: 'Interview with Local Business Owner', duration: '12:45', views: 892, status: 'processing' },
    { id: 3, title: 'Street Food Festival Highlights', duration: '8:30', views: 2341, status: 'published' },
  ])
  const [stats, setStats] = useState({
    totalViews: 15420,
    totalArticles: 23,
    totalVideos: 18,
    totalDonations: 8750
  })

  // In real app, fetch data from API
  useEffect(() => {
    // This would be replaced with actual API calls
    // fetchArticles()
    // fetchVideos()
    // fetchStats()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Azamgarh News Live</h1>
                <p className="text-sm text-gray-500">Journalist Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">View Channel</Button>
              <Button size="sm">Settings</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalViews.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Articles</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalArticles}</div>
              <p className="text-xs text-muted-foreground">3 published this week</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Videos</CardTitle>
              <Video className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalVideos}</div>
              <p className="text-xs text-muted-foreground">2 uploaded this week</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Donations</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{stats.totalDonations.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>

        {/* Content Management */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="complaints">Complaints</TabsTrigger>
              <TabsTrigger value="livestream">Live Stream</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Content
            </Button>
          </div>

          <TabsContent value="articles" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {articles.map((article: any) => (
                    <div key={article.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{article.title}</h3>
                        <p className="text-sm text-gray-500">{article.date} • {article.views} views</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={article.status === 'published' ? 'default' : 'secondary'}>
                          {article.status}
                        </Badge>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="videos" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Video Library</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {videos.map((video: any) => (
                    <div key={video.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                          <Video className="h-6 w-6 text-gray-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{video.title}</h3>
                          <p className="text-sm text-gray-500">{video.duration} • {video.views} views</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={video.status === 'published' ? 'default' : 'secondary'}>
                          {video.status}
                        </Badge>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="complaints" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Public Complaints & Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">Water Supply Issue in Colony Area</h3>
                      <Badge variant="secondary">Pending</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Submitted by: Ramesh Kumar (ramesh@email.com)</p>
                    <p className="text-sm text-gray-700">No water supply for last 3 days in Block A, Colony Area. Many families are affected.</p>
                    <div className="flex space-x-2 mt-4">
                      <Button size="sm">Investigate</Button>
                      <Button variant="outline" size="sm">Contact</Button>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">Illegal Construction Near Park</h3>
                      <Badge variant="default">Investigating</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Submitted by: Anonymous</p>
                    <p className="text-sm text-gray-700">Someone is constructing illegally near the children's park. Need immediate action.</p>
                    <div className="flex space-x-2 mt-4">
                      <Button size="sm">Update Status</Button>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="livestream" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Start Live Stream</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Stream Title</label>
                  <Input placeholder="Enter stream title" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <Textarea placeholder="What are you covering today?" />
                </div>
                <div className="flex space-x-4">
                  <Button className="bg-red-500 hover:bg-red-600">
                    <div className="w-3 h-3 bg-white rounded-full mr-2" />
                    Go Live Now
                  </Button>
                  <Button variant="outline">Schedule Stream</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Street Food Festival</span>
                      <span className="text-sm font-semibold">2,341 views</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">City Council Meeting</span>
                      <span className="text-sm font-semibold">1,203 views</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">New School Opening</span>
                      <span className="text-sm font-semibold">567 views</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recent Donations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Anonymous Supporter</span>
                      <span className="text-sm font-semibold">₹500</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Prem Sharma</span>
                      <span className="text-sm font-semibold">₹200</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Monthly Member</span>
                      <span className="text-sm font-semibold">₹99</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}