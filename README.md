# 📋 Minimalist Kanban Board

A modern, feature-rich Kanban board application built with Next.js 15, TypeScript, and React. Perfect for managing tasks, projects, and workflows with a clean, intuitive interface.

![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

### 🎯 Core Functionality
- **Drag & Drop Interface** - Smooth card movement between columns and reordering within columns
- **Multiple Boards** - Create and switch between different boards for various projects
- **Real-time Search** - Instantly find cards by title or description
- **Advanced Filtering** - Filter cards by priority (low/medium/high) and custom tags
- **Auto-save** - All changes automatically persist to localStorage

### 📝 Card Management
- **Rich Card Data** - Title, description, priority, tags, and due dates
- **Priority Levels** - Visual badges for low, medium, and high priority tasks
- **Tag System** - Organize cards with custom tags
- **Due Dates** - Track deadlines with calendar integration
- **Edit & Delete** - Full CRUD operations with confirmation dialogs

### 🎨 UI/UX
- **Dark Mode** - Beautiful dark theme with toggle support
- **Smooth Animations** - Polished transitions and hover effects
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Keyboard Shortcuts** - Quick actions with Enter/Escape keys
- **Custom Scrollbar** - Styled scrollbars for better aesthetics
- **Background Effects** - Subtle particle animations

### 🔒 Quality & Performance
- **TypeScript** - Full type safety and IntelliSense support
- **Error Boundaries** - Graceful error handling and recovery
- **Input Validation** - Prevent invalid data entry
- **Optimized Build** - Production-ready with Next.js optimizations
- **No Lint Errors** - Clean, maintainable codebase

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Blazehue/KNBN.git
   cd KNBN
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15.3.5](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### UI Components
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality React components
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide Icons](https://lucide.dev/)** - Beautiful icon library

### Drag & Drop
- **[@dnd-kit](https://dndkit.com/)** - Modern drag and drop toolkit

### Animations
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animations

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Main application page
│   │   ├── layout.tsx         # Root layout with theme provider
│   │   ├── globals.css        # Global styles and animations
│   │   └── global-error.tsx   # Error boundary
│   ├── components/            # React components
│   │   ├── KanbanBoard.tsx    # Main board component
│   │   ├── KanbanColumn.tsx   # Column container
│   │   ├── KanbanCard.tsx     # Card component
│   │   ├── KanbanHeader.tsx   # Header with search
│   │   ├── BoardSelector.tsx  # Board switcher
│   │   ├── FilterMenu.tsx     # Filter dropdown
│   │   ├── BackgroundParticles.tsx  # Animated background
│   │   └── ui/                # shadcn/ui components
│   ├── contexts/              # React contexts
│   │   └── ThemeContext.tsx   # Dark mode context
│   ├── hooks/                 # Custom React hooks
│   │   ├── useBoardManager.ts # Board management logic
│   │   └── use-mobile.ts      # Mobile detection
│   ├── types/                 # TypeScript types
│   │   └── kanban.ts          # Board, Card, Column types
│   └── lib/                   # Utilities
│       └── utils.ts           # Helper functions
├── public/                    # Static assets
├── COMMIT_SUMMARY.md          # Detailed commit history
└── package.json               # Dependencies and scripts
```

## 🎮 Usage Guide

### Creating a New Board
1. Click the board dropdown in the header
2. Select "Create New Board"
3. Enter a board name
4. Start adding cards!

### Adding Cards
1. Click the "+" button in any column
2. Enter card title and description
3. Optionally add priority, tags, and due date
4. Press Enter or click "Save"

### Moving Cards
- **Drag between columns:** Click and drag a card to any column
- **Reorder within column:** Drag cards up or down within the same column

### Searching & Filtering
- **Search:** Type in the search box to filter by title/description
- **Filter:** Click the filter button to filter by priority or tags

### Editing Cards
1. Click the pencil icon on any card
2. Modify the details
3. Click "Save Changes"

### Deleting Cards
1. Click the trash icon on any card
2. Confirm deletion in the dialog

## 🎨 Customization

### Themes
The app supports both light and dark modes. Toggle using the sun/moon icon in the header.

### Colors
Modify colors in `src/app/globals.css` under the `:root` and `.dark` selectors.

### Animations
Adjust animation speeds and effects in component files or `globals.css`.

## 📊 Data Persistence

All data is stored in browser's localStorage:
- **Board data:** Columns, cards, and settings
- **Multiple boards:** Support for unlimited boards
- **Auto-save:** Changes saved instantly

**Note:** Data is stored locally in your browser. Clear browser data will delete all boards.

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Create optimized build
npm start            # Run production server

# Code Quality
npm run lint         # Run ESLint checks
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `.next` folder

### Static Export
```bash
# Add to next.config.ts: output: 'export'
npm run build
# Deploy the 'out' folder
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Blazehue**
- GitHub: [@Blazehue](https://github.com/Blazehue)
- Repository: [KNBN](https://github.com/Blazehue/KNBN)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [shadcn](https://twitter.com/shadcn) for the beautiful UI components
- [dnd-kit](https://dndkit.com/) for the drag and drop library
- [Vercel](https://vercel.com/) for hosting platform

## 🐛 Known Issues

None at the moment! Please report any bugs in the [Issues](https://github.com/Blazehue/KNBN/issues) section.

## 🗺️ Roadmap

- [ ] User authentication
- [ ] Backend API integration
- [ ] Real-time collaboration
- [ ] Card attachments and comments
- [ ] Activity history and audit log
- [ ] Email notifications
- [ ] Export to PDF/JSON
- [ ] Kanban analytics dashboard
- [ ] Custom column creation
- [ ] Card templates
- [ ] Mobile app (React Native)

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

**Built with ❤️ using Next.js and TypeScript**
