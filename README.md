# 📰 Citizen Journalism SaaS Platform

A comprehensive multi-tenant platform that empowers independent journalists to create their own digital news channels without technical skills. Perfect for the Indian market where thousands of reporters currently depend only on YouTube or Facebook.

## 🌟 Features

### 🎯 Core Platform Features
- **Multi-Tenant Architecture**: Support for unlimited journalists with independent channels
- **Instant Channel Creation**: Sign up and launch your news channel in 60 seconds
- **Professional News Website**: Mobile-responsive design with custom branding
- **Mobile App Ready**: Native app support for iOS and Android
- **Admin Dashboard**: Complete content management and analytics

### 📝 Content Management
- **Article Publishing**: Rich text editor with SEO optimization
- **Video Hosting**: Upload, manage, and stream video content
- **Live Streaming**: RTMP-based live broadcasting from mobile
- **Content Categories**: Organize news by topics and tags
- **View Analytics**: Track engagement and performance

### 📢 Public Engagement
- **Complaint System**: Citizens can submit issues and tips
- **Evidence Upload**: Support for photos, videos, and documents
- **Anonymous Reporting**: Protect whistleblower identity
- **Investigation Tracking**: Monitor complaint resolution

### 👥 Citizen Reporter Network
- **Reporter Applications**: Onboard local contributors
- **Verification System**: ID verification and background checks
- **Report Submission**: Citizen journalists can submit stories
- **Compensation System**: Pay for quality content

### 💰 Monetization
- **SaaS Subscriptions**: ₹999-₹9999/month per journalist
- **Donations**: One-time and recurring supporter contributions
- **Memberships**: Tiered benefits (Supporter ₹49, Premium ₹99, Patron ₹199)
- **Advertisement**: Local business advertising platform

## 🏗️ Technical Architecture

### Frontend
- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for responsive design
- **Shadcn/ui** component library
- **Lucide React** icons

### Backend
- **Prisma ORM** with SQLite database
- **API-first architecture** with REST endpoints
- **Multi-tenant data isolation**
- **Real-time features** ready for WebSocket

### Database Schema
- **Journalists**: Channel owners with subscription plans
- **Articles**: News content with SEO metadata
- **Videos**: Media hosting and streaming
- **Complaints**: Public issue reporting
- **Live Streams**: Real-time broadcasting
- **Citizen Reporters**: Local contributor network
- **Donations & Memberships**: Monetization system

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- Bun package manager
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/jitenkr2030/Citizen-Journalism-SaaS-Platform-.git
cd Citizen-Journalism-SaaS-Platform-
```

2. **Install dependencies**
```bash
bun install
```

3. **Set up database**
```bash
bun run db:push
```

4. **Start development server**
```bash
bun run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages & Features

### Public Pages
- **Homepage** (`/`): Professional landing with signup
- **Channel Demo** (`/channel/demo`): Example journalist website
- **Complaints** (`/complaints`): Public issue reporting
- **Support** (`/support`): Donations and memberships
- **Become Reporter** (`/become-reporter`): Citizen reporter application

### Admin Pages
- **Dashboard** (`/dashboard`): Complete journalist admin interface
- **Content Management**: Articles, videos, live streams
- **Complaint Management**: Review and investigate public issues
- **Analytics**: Views, engagement, revenue tracking

### API Endpoints
- **Authentication**: `/api/auth/signup`
- **Articles**: `/api/articles` (CRUD operations)
- **Videos**: `/api/videos` (Upload & manage)
- **Complaints**: `/api/complaints` (Submit & review)
- **Live Streams**: `/api/livestream` (Create & manage)
- **Citizen Reporters**: `/api/citizen-reporters`
- **Donations**: `/api/donations`
- **Memberships**: `/api/memberships`

## 💼 Business Model

### Subscription Tiers
- **Basic Plan**: ₹999/month
  - News website
  - 10 GB video storage
  - Basic analytics
  - Email support

- **Pro Plan**: ₹2,999/month ⭐ Popular
  - Everything in Basic
  - 100 GB video storage
  - Live streaming
  - Mobile app
  - Advanced analytics
  - Priority support

- **Enterprise Plan**: ₹9,999/month
  - Everything in Pro
  - Unlimited storage
  - Custom domain
  - API access
  - Dedicated support

### Revenue Potential
- **100 journalists**: ₹99,900/month
- **1,000 journalists**: ₹9,99,000/month
- **10,000 journalists**: ₹9,99,90,000/month

### Additional Revenue Streams
- **Platform fees**: 10% commission on donations
- **Advertisement revenue**: 30% of ad spend
- **Premium features**: Add-on services
- **Custom development**: Enterprise solutions

## 🎯 Target Market

### Primary Market: India
- **Thousands of independent journalists** currently on YouTube/Facebook
- **District-level reporters** needing their own platform
- **Local news channels** in tier-2/3 cities
- **Citizen journalists** and activists
- **Community media organizations**

### Why India?
- 📱 **Mobile-first population**: 700+ million smartphone users
- 🗣️ **Regional languages**: Demand for local language content
- 🏛️ **Democratic society**: Need for independent journalism
- 💰 **Growing economy**: Increasing advertising spend
- 🌐 **Digital transformation**: Government push for digital media

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
DATABASE_URL="file:./db/custom.db"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Database Configuration
The platform uses SQLite for development. For production:
- PostgreSQL for better performance
- Read replicas for scaling
- Regular backups

### Deployment Options
- **Vercel**: Recommended for Next.js apps
- **AWS**: Full control with EC2/RDS
- **DigitalOcean**: Affordable cloud hosting
- **Railway**: Simple deployment

## 🔒 Security Features

- **Data isolation**: Multi-tenant database separation
- **Input validation**: Comprehensive form validation
- **CSRF protection**: Built-in Next.js security
- **Rate limiting**: API abuse prevention
- **Content filtering**: Prevent spam and abuse

## 🌍 Localization

The platform is designed for easy localization:
- **Hindi support**: Ready for regional languages
- **Currency formatting**: Indian Rupee (₹)
- **Date/time formats**: Indian standards
- **Phone validation**: Indian mobile numbers
- **Address formats**: Indian postal system

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- 📧 Email: support@newssaasbharat.com
- 💬 Discord: [Join our community](https://discord.gg/newssaas)
- 📱 WhatsApp: +91 98765 43210

## 🌟 Acknowledgments

- **Next.js team** for the amazing framework
- **Prisma** for the excellent ORM
- **Tailwind CSS** for the utility-first CSS framework
- **Shadcn/ui** for the beautiful component library
- **Indian journalism community** for inspiration and feedback

---

**🚀 Empowering independent journalists across India, one channel at a time!**

Made with ❤️ for the Indian journalism community