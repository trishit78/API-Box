# API-Box

A modern, feature-rich API testing platform built with Next.js 16, inspired by Postman. Test, organize, and manage your API requests with an intuitive interface and powerful features.

![API-Box](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-6.19-2D3748?style=for-the-badge&logo=prisma)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🚀 Request Management
- **Multiple HTTP Methods**: Support for GET, POST, PUT, PATCH, and DELETE requests
- **Request Editor**: Monaco-powered code editor for request bodies
- **Query Parameters**: Dynamic key-value parameter management
- **Headers Management**: Custom header configuration with enable/disable toggles
- **Request History**: Track and view all executed requests

### 📁 Organization
- **Workspaces**: Organize your APIs into separate workspaces
- **Collections**: Group related requests into collections
- **Tabbed Interface**: Work on multiple requests simultaneously
- **Autosave**: Changes are automatically saved as you work

### 👥 Authentication & Collaboration
- **OAuth Integration**: Sign in with GitHub or Google
- **Workspace Sharing**: Invite team members to collaborate
- **Role-Based Access**: Admin, Editor, and Viewer roles

### 🎨 User Experience
- **Dark Mode**: Beautiful dark theme optimized for extended use
- **Keyboard Shortcuts**: 
  - `Ctrl/Cmd + G` - New request
  - `Ctrl/Cmd + S` - Save request
  - `Ctrl/Cmd + K` - Search
- **Responsive Design**: Works seamlessly across all device sizes
- **Monaco Editor**: VS Code-like editing experience

### 📊 Response Viewing
- **Multiple Views**: JSON, Raw, Headers, and Test Results tabs
- **Syntax Highlighting**: Beautiful code highlighting for responses
- **Response Metrics**: Status code, response time, and size tracking
- **Copy & Export**: Easy copying and downloading of responses

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - Latest React features
- **TypeScript** - Type-safe development
- **TailwindCSS 4** - Utility-first CSS framework
- **Shadcn/ui** - Beautiful component library
- **Monaco Editor** - Code editing experience
- **Zustand** - State management
- **React Hook Form** - Form validation
- **Zod** - Schema validation

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **Better Auth** - Authentication solution
- **Prisma** - Type-safe ORM
- **PostgreSQL** - Primary database (Neon)

### Development Tools
- **ESLint** - Code linting
- **React Query** - Server state management
- **Axios** - HTTP client

## 📦 Installation

### Prerequisites
- Node.js 20+ 
- PostgreSQL database
- GitHub OAuth App credentials
- Google OAuth App credentials

### Environment Variables

Create a `.env` file in the root directory:

```bash
# Database
DATABASE_URL="postgresql://user:password@host/database?sslmode=require"

# Authentication
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/API-Box.git
cd API-Box
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Setup database**
```bash
npx prisma generate
npx prisma migrate deploy
```

4. **Run development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🗂️ Project Structure

```
API-Box/
├── prisma/
│   ├── migrations/          # Database migrations
│   └── schema.prisma        # Database schema
├── public/                  # Static assets
├── src/
│   ├── app/                # Next.js app directory
│   │   ├── (auth)/         # Authentication pages
│   │   ├── (workspace)/    # Main workspace
│   │   └── api/            # API routes
│   ├── components/         # Shared components
│   │   └── ui/            # Shadcn UI components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility libraries
│   │   ├── auth.ts        # Auth configuration
│   │   ├── db.ts          # Database client
│   │   └── utils.ts       # Helper functions
│   └── modules/           # Feature modules
│       ├── authentication/ # Auth logic
│       ├── collections/    # Collection management
│       ├── layout/        # Layout components
│       ├── request/       # Request handling
│       └── workspace/     # Workspace management
└── package.json
```

## 🔑 Key Features Explained

### Workspace Management
Each user gets a default "Personal Workspace" upon first login. Additional workspaces can be created for different projects or teams. Workspaces contain collections which organize related API requests.

### Request Tabs
Work on multiple requests simultaneously with a tabbed interface. Each tab maintains its own state including:
- HTTP method and URL
- Headers and parameters
- Request body
- Unsaved changes indicator

### Collections & Folders
Organize requests into collections for better management. Collections can be:
- Created and renamed
- Deleted (with all contained requests)
- Searched and filtered

### Response Viewer
Comprehensive response viewing with:
- Formatted JSON display
- Raw response view
- Response headers
- Performance metrics (status, time, size)

## 🎯 Usage Examples

### Creating a Request

1. Click the "+" button or press `Ctrl/Cmd + G`
2. Select HTTP method (GET, POST, etc.)
3. Enter the API URL
4. Add parameters, headers, or body as needed
5. Click "Send" or press `Ctrl/Cmd + Enter`

### Organizing Requests

1. Create a collection from the sidebar
2. Click "Add Request" in the collection
3. Fill in request details
4. Save with `Ctrl/Cmd + S`

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + G` | Create new request |
| `Ctrl/Cmd + S` | Save current request |
| `Ctrl/Cmd + K` | Open search |
| `Ctrl/Cmd + R` | Add request to collection |
| `Ctrl/Cmd + E` | Edit collection |
| `Ctrl/Cmd + D` | Delete collection |

## 🔐 Authentication Setup

### GitHub OAuth

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create a new OAuth App
3. Set Authorization callback URL to `http://localhost:3000/api/auth/callback/github`
4. Copy Client ID and Client Secret to `.env`

### Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add `http://localhost:3000/api/auth/callback/google` as redirect URI
6. Copy Client ID and Client Secret to `.env`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

### Other Platforms

The app can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- AWS Amplify
- Digital Ocean App Platform

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Known Issues

- None at the moment

## 📮 Support

For support, email support@apibox.dev or open an issue in the repository.

## 🙏 Acknowledgments

- [Postman](https://postman.com) - Inspiration for the UI/UX
- [Hoppscotch](https://hoppscotch.io) - Open source API testing tool
- [Shadcn/ui](https://ui.shadcn.com) - Beautiful component library
- [Next.js](https://nextjs.org) - Amazing React framework

## 🗺️ Roadmap

- [ ] WebSocket support
- [ ] GraphQL support
- [ ] Environment variables
- [ ] Pre-request scripts
- [ ] Test scripts
- [ ] API documentation generation
- [ ] Team collaboration features
- [ ] Mock server
- [ ] Collection import/export
- [ ] Request chaining

---

Made with ❤️ by the API-Box Team
