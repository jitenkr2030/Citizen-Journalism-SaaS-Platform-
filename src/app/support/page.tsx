'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Heart, Star, Crown, Users, Target, Zap } from 'lucide-react'

export default function SupportPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [donationType, setDonationType] = useState('one-time')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    message: '',
    type: 'DONATION',
    journalistId: 'demo-journalist-id'
  })

  const handleDonation = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    setSuccess('')

    try {
      const response = await fetch('/api/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSuccess('Thank you for your support! Your contribution makes a real difference.')
        setFormData({
          name: '',
          email: '',
          amount: '',
          message: '',
          type: 'DONATION',
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

  const handleMembership = async (type: string, amount: string) => {
    setIsSubmitting(true)
    setError('')
    setSuccess('')

    try {
      const response = await fetch('/api/memberships', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type,
          amount,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSuccess(`Welcome to our ${type.toLowerCase()} membership! Thank you for your ongoing support.`)
        setFormData({
          name: '',
          email: '',
          amount: '',
          message: '',
          type: 'DONATION',
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Independent Journalism</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your support helps us continue bringing you unbiased news and investigative journalism. 
            Every contribution makes a difference in our community.
          </p>
        </div>

        {/* Membership Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="relative overflow-hidden">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Supporter</CardTitle>
              <div className="text-3xl font-bold text-gray-900">₹49<span className="text-lg text-gray-600">/month</span></div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Access to all articles
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Supporter badge on profile
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Monthly newsletter
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Comment on articles
                </li>
              </ul>
              <Button 
                className="w-full bg-blue-500 hover:bg-blue-600"
                onClick={() => handleMembership('SUPPORTER', '49')}
                disabled={isSubmitting}
              >
                Become Supporter
              </Button>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-2 border-purple-500">
            <div className="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 text-sm">
              Most Popular
            </div>
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-xl">Premium</CardTitle>
              <div className="text-3xl font-bold text-gray-900">₹99<span className="text-lg text-gray-600">/month</span></div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Everything in Supporter
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Exclusive video content
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Early access to articles
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Meet the journalist events
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Priority story requests
                </li>
              </ul>
              <Button 
                className="w-full bg-purple-500 hover:bg-purple-600"
                onClick={() => handleMembership('PREMIUM', '99')}
                disabled={isSubmitting}
              >
                Go Premium
              </Button>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="h-6 w-6 text-yellow-600" />
              </div>
              <CardTitle className="text-xl">Patron</CardTitle>
              <div className="text-3xl font-bold text-gray-900">₹199<span className="text-lg text-gray-600">/month</span></div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Everything in Premium
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Personal thank you notes
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Behind-the-scenes access
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Influence story coverage
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Annual patron dinner
                </li>
              </ul>
              <Button 
                className="w-full bg-yellow-500 hover:bg-yellow-600"
                onClick={() => handleMembership('PATRON', '199')}
                disabled={isSubmitting}
              >
                Become Patron
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* One-Time Donation */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Make a One-Time Donation</CardTitle>
            <p className="text-center text-gray-600">
              Every rupee helps us continue our work. Choose an amount that feels right for you.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <Button 
                variant="outline" 
                className="h-16"
                onClick={() => setFormData({...formData, amount: '100'})}
              >
                ₹100
              </Button>
              <Button 
                variant="outline" 
                className="h-16"
                onClick={() => setFormData({...formData, amount: '250'})}
              >
                ₹250
              </Button>
              <Button 
                variant="outline" 
                className="h-16"
                onClick={() => setFormData({...formData, amount: '500'})}
              >
                ₹500
              </Button>
              <Button 
                variant="outline" 
                className="h-16"
                onClick={() => setFormData({...formData, amount: '1000'})}
              >
                ₹1000
              </Button>
            </div>

            <form onSubmit={handleDonation} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Custom Amount (₹)</label>
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  min="1"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input
                    placeholder="Your name"
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

              <div>
                <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                <Textarea
                  placeholder="Share why you're supporting our work..."
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
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
                disabled={isSubmitting || !formData.amount}
                className="w-full bg-purple-500 hover:bg-purple-600"
              >
                {isSubmitting ? 'Processing...' : 'Donate Now'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Impact Section */}
        <div className="mt-16 bg-white p-8 rounded-lg border">
          <h2 className="text-2xl font-bold text-center mb-8">Your Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Investigative Journalism</h3>
              <p className="text-sm text-gray-600">
                Your support helps us conduct in-depth investigations that hold power accountable and bring truth to light.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Community Stories</h3>
              <p className="text-sm text-gray-600">
                We tell the stories that matter to our community, giving voice to the voiceless and celebrating local heroes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Real-Time Coverage</h3>
              <p className="text-sm text-gray-600">
                Breaking news coverage as it happens, keeping you informed about important events in our community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}