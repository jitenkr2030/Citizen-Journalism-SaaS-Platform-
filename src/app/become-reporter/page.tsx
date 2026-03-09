'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, Users, Upload, Camera, FileText } from 'lucide-react'

export default function CitizenReporterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    whyJoin: '',
    experience: '',
    journalistId: 'demo-journalist-id' // This would come from URL params
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    setSuccess('')

    try {
      const response = await fetch('/api/citizen-reporters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSuccess('Your application has been submitted successfully! We will review it and contact you soon.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          whyJoin: '',
          experience: '',
          journalistId: 'demo-journalist-id'
        })
      } else {
        setError(data.error || 'Something went wrong')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Become a Citizen Reporter</h1>
          <p className="text-gray-600">Help us tell the stories that matter in our community. Your voice can make a difference.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="h-5 w-5 mr-2 text-blue-500" />
              Citizen Reporter Application
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Location</label>
                  <Input
                    placeholder="Azamgarh, Uttar Pradesh"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Why do you want to be a citizen reporter? *</label>
                <Textarea
                  placeholder="Tell us why you're interested in being a citizen reporter. What motivates you to share news and stories from your community?"
                  rows={4}
                  value={formData.whyJoin}
                  onChange={(e) => setFormData({...formData, whyJoin: e.target.value})}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Relevant Experience</label>
                <Textarea
                  placeholder="Do you have any experience in writing, photography, video recording, or community work? Tell us about it."
                  rows={3}
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3">What You'll Do as a Citizen Reporter:</h4>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• Report local news and events from your area</li>
                  <li>• Share photos and videos of important happenings</li>
                  <li>• Help us investigate issues that affect the community</li>
                  <li>• Be the eyes and ears on the ground</li>
                  <li>• Get recognition and compensation for quality reports</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-3">Benefits:</h4>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• Official press card for verified reporters</li>
                  <li>• Payment for published stories and media</li>
                  <li>• Training and mentorship from professional journalists</li>
                  <li>• Platform to make your voice heard</li>
                  <li>• Network with other reporters and journalists</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-3">Requirements:</h4>
                <ul className="space-y-2 text-sm text-yellow-700">
                  <li>• Must be 18 years or older</li>
                  <li>• Basic smartphone with camera</li>
                  <li>• Good communication skills</li>
                  <li>• Honest and ethical reporting</li>
                  <li>• Regular availability to report on local events</li>
                </ul>
              </div>

              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg">
                  {error}
                </div>
              )}

              {success && (
                <div className="bg-green-50 text-green-600 p-4 rounded-lg">
                  {success}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-600"
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    <Users className="h-4 w-4 mr-2" />
                    Submit Application
                  </>
                )}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this application, you agree to our code of ethics and terms of service. 
                We will verify your information before approving your application.
              </p>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 bg-white p-6 rounded-lg border">
          <h3 className="font-semibold mb-3">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900">Do I need professional experience?</h4>
              <p className="text-sm text-gray-600">No! We welcome people from all backgrounds. Passion for your community is more important than professional experience.</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">How do I get paid?</h4>
              <p className="text-sm text-gray-600">You receive payment for each published story based on quality, impact, and media provided. Payments are made monthly via bank transfer.</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">What kind of stories should I report?</h4>
              <p className="text-sm text-gray-600">Local news, community events, issues affecting residents, human interest stories, corruption, infrastructure problems, and anything that impacts your community.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}