'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    channelName: '',
    location: '',
    plan: 'BASIC'
  })

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    setSuccess('')

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSuccess('Account created successfully! Your channel is ready.')
        setTimeout(() => {
          setIsSignupModalOpen(false)
          setFormData({
            name: '',
            email: '',
            phone: '',
            channelName: '',
            location: '',
            plan: 'BASIC'
          })
        }, 2000)
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold text-gray-900">NewsSaaSBharat</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it Works</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </nav>
            <button
              onClick={() => setIsSignupModalOpen(true)}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Start Your Channel
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Own News Channel in
            <span className="text-orange-500"> 60 Seconds</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Stop depending on YouTube and Facebook. Get your own independent news website, 
            mobile app, and monetization tools - no technical skills required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsSignupModalOpen(true)}
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Start Free Trial
            </button>
            <a href="#features" className="border border-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Everything You Need to Run Your News Channel
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-500 font-bold text-xl">📰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">News Website</h3>
              <p className="text-gray-600">Professional news website with your branding, custom domain, and mobile-responsive design.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-500 font-bold text-xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile App</h3>
              <p className="text-gray-600">Native mobile apps for iOS and Android where your followers can read news and watch videos.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-500 font-bold text-xl">🎥</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Video Hosting</h3>
              <p className="text-gray-600">Upload and host unlimited videos with built-in player, thumbnails, and analytics.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-500 font-bold text-xl">📢</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Public Complaints</h3>
              <p className="text-gray-600">Citizens can submit complaints and tips directly to you for investigative reporting.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-500 font-bold text-xl">🔴</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Streaming</h3>
              <p className="text-gray-600">Go live from your mobile device to cover breaking news and events in real-time.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-500 font-bold text-xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Multiple Revenue Streams</h3>
              <p className="text-gray-600">Donations, memberships, advertisements, and sponsored content - all integrated.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p className="text-gray-600">Create your account in 2 minutes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customize</h3>
              <p className="text-gray-600">Add your logo, colors, and branding</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Publish</h3>
              <p className="text-gray-600">Start publishing news and videos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Earn</h3>
              <p className="text-gray-600">Monetize through ads and donations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 border rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <p className="text-gray-600 mb-4">Perfect for starting journalists</p>
              <div className="text-3xl font-bold mb-6">₹999<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> News Website</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 10 GB Video Storage</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic Analytics</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Email Support</li>
              </ul>
              <button
                onClick={() => setIsSignupModalOpen(true)}
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Start Basic Plan
              </button>
            </div>
            <div className="p-8 border-2 border-orange-500 rounded-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-gray-600 mb-4">For growing news channels</p>
              <div className="text-3xl font-bold mb-6">₹2,999<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Everything in Basic</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 100 GB Video Storage</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Live Streaming</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Mobile App</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced Analytics</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Priority Support</li>
              </ul>
              <button
                onClick={() => setIsSignupModalOpen(true)}
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Start Pro Plan
              </button>
            </div>
            <div className="p-8 border rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-4">For established media</p>
              <div className="text-3xl font-bold mb-6">₹9,999<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Everything in Pro</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited Storage</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom Domain</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> API Access</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Dedicated Support</li>
              </ul>
              <button
                onClick={() => setIsSignupModalOpen(true)}
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <span className="text-xl font-bold">NewsSaaSBharat</span>
              </div>
              <p className="text-gray-400">Empowering independent journalists across India with their own digital platforms.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Examples</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NewsSaaSBharat. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Signup Modal */}
      {isSignupModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Start Your News Channel</h2>
              <button
                onClick={() => setIsSignupModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <form className="space-y-4" onSubmit={handleSignup}>
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 border rounded-lg" 
                  placeholder="Rajiv Talwar"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 border rounded-lg" 
                  placeholder="rajiv@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full p-3 border rounded-lg" 
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Channel Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 border rounded-lg" 
                  placeholder="Azamgarh News Live"
                  value={formData.channelName}
                  onChange={(e) => setFormData({...formData, channelName: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Location</label>
                <input 
                  type="text" 
                  className="w-full p-3 border rounded-lg" 
                  placeholder="Azamgarh, Uttar Pradesh"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Choose Plan</label>
                <select 
                  className="w-full p-3 border rounded-lg"
                  value={formData.plan}
                  onChange={(e) => setFormData({...formData, plan: e.target.value})}
                >
                  <option value="BASIC">Basic - ₹999/month</option>
                  <option value="PRO">Pro - ₹2,999/month</option>
                  <option value="ENTERPRISE">Enterprise - ₹9,999/month</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Creating...' : 'Create My Channel'}
              </button>
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                  {error}
                </div>
              )}
              {success && (
                <div className="bg-green-50 text-green-600 p-3 rounded-lg text-sm">
                  {success}
                </div>
              )}
            </form>
            <p className="text-sm text-gray-600 mt-4 text-center">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      )}
    </div>
  )
}