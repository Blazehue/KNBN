# 📋 Minimalist Kanban Board

<div align="center">

![Kanban Board Banner](https://img.shields.io/badge/Kanban-Board-6366f1?style=for-the-badge&logo=trello&logoColor=white)

A modern, feature-rich Kanban board application built with Next.js 15, TypeScript, and React. Perfect for managing tasks, projects, and workflows with a clean, intuitive interface.

[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[Demo](#) · [Features](#-features) · [Quick Start](#-quick-start) · [Documentation](#-usage-guide)

</div>

---

## 📸 Preview

```
[Add screenshots/GIFs of your Kanban board here]
- Main board view
- Card editing modal
- Dark mode toggle
- Mobile responsive view
```

## 🎯 Why Use This Kanban Board?

- **🚀 Zero Configuration** - Works out of the box with localStorage
- **🎨 Beautiful UI** - Modern design with smooth animations
- **⚡ Lightning Fast** - Built on Next.js 15 with optimal performance
- **📱 Fully Responsive** - Seamless experience across all devices
- **🌙 Dark Mode** - Easy on the eyes during late-night sessions
- **🔒 Private & Secure** - All data stays in your browser
- **🆓 Completely Free** - Open source and MIT licensed

## ✨ Features

### 🎯 Core Functionality
- **Drag & Drop Interface** - Smooth card movement between columns and reordering within columns
- **Multiple Boards** - Create and switch between different boards for various projects
- **Real-time Search** - Instantly find cards by title or description across all columns
- **Advanced Filtering** - Filter cards by priority (low/medium/high) and custom tags
- **Auto-save** - All changes automatically persist to localStorage with zero delays

### 📝 Card Management
- **Rich Card Data** - Title, description, priority, tags, and due dates all in one place
- **Priority Levels** - Visual badges (🔴 High, 🟡 Medium, 🟢 Low) for quick identification
- **Tag System** - Organize cards with unlimited custom tags for flexible categorization
- **Due Dates** - Track deadlines with integrated calendar picker
- **Edit & Delete** - Full CRUD operations with confirmation dialogs to prevent accidents
- **Card Count** - Real-time counter showing tasks per column

### 🎨 UI/UX Excellence
- **Dark Mode** - Beautiful dark theme with seamless toggle (persists across sessions)
- **Smooth Animations** - Polished transitions using Framer Motion for professional feel
- **Responsive Design** - Optimized layouts for desktop (1920px+), tablet, and mobile
- **Keyboard Shortcuts** - Quick actions with Enter/Escape for power users
- **Custom Scrollbar** - Styled scrollbars that match the theme
- **Background Effects** - Subtle particle animations for visual depth
- **Loading States** - Skeleton screens and spinners for better UX
- **Empty States** - Helpful messages when boards or columns are empty

### 🔒 Quality & Performance
- **TypeScript** - Full type safety preventing runtime errors
- **Error Boundaries** - Graceful error handling with fallback UI
- **Input Validation** - Comprehensive validation preventing invalid data
- **Optimized Build** - Production-ready with Next.js 15 optimizations
- **No Lint Errors** - Clean, maintainable codebase following best practices
- **Accessibility** - WCAG 2.1 compliant with keyboard navigation
- **SEO Optimized** - Meta tags and semantic HTML for better discoverability

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.0 or higher
- **npm** / **yarn** / **pnpm** / **bun**
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Blazehue/KNBN.git
   cd KNBN
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or with your preferred package manager
   yarn install
   pnpm install
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000)

4. **Start organizing!** 🎉

### Environment Variables (Optional)

Create a `.env.local` file for future backend integration:
```env
# Future API configuration
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_APP_NAME=My Kanban Board
```

## 📦 Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start

# Or use a single command
npm run build && npm start
```

The production build includes:
- Code minification and tree-shaking
- Image optimization
- Static HTML generation
- Automatic code splitting

## 🛠️ Tech Stack

<table>
<tr>
<td>

### Frontend Framework
- **[Next.js 15.3.5](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Latest UI library with concurrent features
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - Type-safe JavaScript superset

</td>
<td>

### Styling & UI
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component collection
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives

</td>
</tr>
<tr>
<td>

### Functionality
- **[@dnd-kit 6.1](https://dndkit.com/)** - Modern drag and drop toolkit
- **[Framer Motion 11.15](https://www.framer.com/motion/)** - Animation library
- **[Lucide Icons](https://lucide.dev/)** - Customizable icon library

</td>
<td>

### Development
- **[ESLint](https://eslint.org/)** - Code quality and consistency
- **[PostCSS](https://postcss.org/)** - CSS transformation tool
- **[clsx](https://github.com/lukeed/clsx)** - Utility for class names

</td>
</tr>
</table>

## 📁 Project Structure

```
KNBN/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── page.tsx                 # Main Kanban board page
│   │   ├── layout.tsx               # Root layout with providers
│   │   ├── globals.css              # Global styles & animations
│   │   ├── global-error.tsx         # Global error boundary
│   │   └── favicon.ico              # App icon
│   │
│   ├── components/                   # React components
│   │   ├── KanbanBoard.tsx          # Main board container & logic
│   │   ├── KanbanColumn.tsx         # Droppable column component
│   │   ├── KanbanCard.tsx           # Draggable card component
│   │   ├── KanbanHeader.tsx         # Header with search & actions
│   │   ├── BoardSelector.tsx        # Board switcher dropdown
│   │   ├── FilterMenu.tsx           # Advanced filter options
│   │   ├── BackgroundParticles.tsx  # Animated background effect
│   │   └── ui/                      # shadcn/ui component library
│   │       ├── button.tsx
│   │       ├── dialog.tsx
│   │       ├── input.tsx
│   │       ├── badge.tsx
│   │       └── [20+ more components]
│   │
│   ├── contexts/                     # React Context providers
│   │   └── ThemeContext.tsx         # Dark mode state management
│   │
│   ├── hooks/                        # Custom React hooks
│   │   ├── useBoardManager.ts       # Board CRUD operations
│   │   ├── use-mobile.ts            # Responsive breakpoint hook
│   │   └── use-toast.ts             # Toast notification hook
│   │
│   ├── types/                        # TypeScript definitions
│   │   └── kanban.ts                # Board, Card, Column interfaces
│   │
│   └── lib/                          # Utility functions
│       └── utils.ts                 # Helper functions (cn, etc.)
│
├── public/                           # Static assets
│   └── [images, fonts, icons]
│
├── .eslintrc.json                   # ESLint configuration
├── tailwind.config.ts               # Tailwind customization
├── tsconfig.json                    # TypeScript configuration
├── next.config.ts                   # Next.js configuration
├── package.json                     # Project dependencies
├── COMMIT_SUMMARY.md                # Detailed commit history
├── LICENSE                          # MIT License
└── README.md                        # This file
```

## 🎮 Usage Guide

### Getting Started with Your First Board

1. **Access the Application**
   - Open your browser and navigate to `http://localhost:3000`
   - The default board loads automatically

2. **Create Your First Card**
   - Click the **"+ Add Card"** button in any column (To Do, In Progress, Done)
   - Fill in the card details:
     - **Title** (required) - What needs to be done?
     - **Description** (optional) - Additional details
     - **Priority** - Low, Medium, or High
     - **Tags** - Add comma-separated tags (e.g., "frontend, urgent")
     - **Due Date** - Set a deadline
   - Press **Enter** or click **"Save"**

### Board Management

#### Creating Multiple Boards
1. Click the **board dropdown** in the header (top-left)
2. Select **"Create New Board"**
3. Enter a descriptive name (e.g., "Personal Tasks", "Q4 Projects")
4. The new board is created and activated automatically

#### Switching Between Boards
- Click the board dropdown
- Select any board from the list
- Your current board is highlighted

#### Renaming Boards
- Click the board dropdown
- Click the **pencil icon** next to any board name
- Enter the new name and confirm

#### Deleting Boards
- Click the board dropdown
- Click the **trash icon** next to any board name
- Confirm deletion (⚠️ This action cannot be undone)

### Card Operations

#### Moving Cards (Drag & Drop)
- **Between columns:** Click and drag a card to any other column
- **Within column:** Drag cards up or down to reorder priority
- Visual feedback shows drop zones
- Release to complete the move

#### Editing Cards
1. Click the **pencil icon** (✏️) on any card
2. Modify any field
3. Click **"Save Changes"** or press **Enter**
4. Cancel with **Escape** or the cancel button

#### Deleting Cards
1. Click the **trash icon** (🗑️) on any card
2. Confirm deletion in the dialog
3. Card is permanently removed

### Search & Filter

#### Real-time Search
- Type in the **search box** in the header
- Results update instantly as you type
- Searches across:
  - Card titles
  - Card descriptions
  - Works across all columns simultaneously

#### Advanced Filtering
1. Click the **filter icon** (🔽) in the header
2. Select filter criteria:
   - **All Cards** - Show everything
   - **High Priority** - Show only high priority cards
   - **Medium Priority** - Show only medium priority cards
   - **Low Priority** - Show only low priority cards
   - **By Tag** - Filter by specific tag (if tags exist)
3. Combine with search for precise results

### Customization

#### Toggle Dark Mode
- Click the **sun/moon icon** in the header
- Theme preference persists across sessions
- Smooth transition animation

#### Keyboard Shortcuts
- **Enter** - Save/confirm action
- **Escape** - Cancel/close modal
- **Tab** - Navigate between form fields
- **Click outside** - Close dropdowns/modals

## 💾 Data Persistence

### How Data is Stored

All your board data is stored in your browser's **localStorage**:

```javascript
{
  "kanban-boards": {
    "board-id-123": {
      "id": "board-id-123",
      "name": "My Project",
      "columns": {
        "todo": [...cards],
        "in-progress": [...cards],
        "done": [...cards]
      }
    }
  },
  "kanban-current-board": "board-id-123",
  "theme": "dark"
}
```

### Important Notes

- ✅ **Instant saving** - No manual save button needed
- ✅ **Survives page refresh** - Close and reopen anytime
- ✅ **Multiple boards supported** - Unlimited board creation
- ⚠️ **Browser-specific** - Data doesn't sync across devices/browsers
- ⚠️ **Clearing browser data** - Will delete all boards (export feature coming soon)

### Data Backup (Temporary Solution)

Until export functionality is added:
1. Open browser DevTools (F12)
2. Go to **Application > Local Storage**
3. Copy the values manually
4. Save to a text file for backup

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload at `localhost:3000` |
| `npm run build` | Create optimized production build in `.next/` folder |
| `npm start` | Run production server (requires build first) |
| `npm run lint` | Run ESLint to check code quality and find issues |
| `npm run lint:fix` | Automatically fix linting issues |
| `npm run type-check` | Verify TypeScript types without building |

## 🚢 Deployment

### Deploy to Vercel (Recommended)

Vercel is built by the creators of Next.js and provides the best experience:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Blazehue/KNBN)

**Manual Deployment:**
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy" (zero configuration needed!)
6. Your app is live! 🎉

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```
2. Drag and drop the `.next` folder to [Netlify](https://app.netlify.com/drop)

### Deploy to Other Platforms

**Static Export** (for GitHub Pages, AWS S3, etc.):
```bash
# Add to next.config.ts
output: 'export'

# Build
npm run build

# Deploy the 'out' folder
```

**Docker Deployment:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! We love to see the community improve this project.

### How to Contribute

1. **Fork the repository**
   ```bash
   git fork https://github.com/Blazehue/KNBN.git
   ```

2. **Create your feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

5. **Open a Pull Request**
   - Go to the [Pull Requests](https://github.com/Blazehue/KNBN/pulls) page
   - Click "New Pull Request"
   - Describe your changes in detail

### Development Guidelines

- Write clean, readable code
- Follow existing code style and conventions
- Add comments for complex logic
- Update documentation for new features
- Test your changes thoroughly
- Ensure no lint errors (`npm run lint`)

## 🐛 Bug Reports

Found a bug? Please help us improve!

1. Check [existing issues](https://github.com/Blazehue/KNBN/issues) first
2. Create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Browser and OS information

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

```
MIT License

Copyright (c) 2025 Rajat Panda (Blazehue)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

[Full license text in LICENSE file]
```

## 👨‍💻 Author

<div align="center">

**Rajat Panda (Blazehue)**

[![GitHub](https://img.shields.io/badge/GitHub-Blazehue-181717?style=flat-square&logo=github)](https://github.com/Blazehue)
[![Email](https://img.shields.io/badge/Email-pandrajat123%40gmail.com-EA4335?style=flat-square&logo=gmail)](mailto:pandrajat123@gmail.com)

*Passionate developer building modern web applications*

</div>

## 🙏 Acknowledgments

Special thanks to these amazing projects and communities:

- **[Next.js Team](https://nextjs.org/)** - For the incredible React framework
- **[Vercel](https://vercel.com/)** - For hosting and deployment platform
- **[shadcn](https://twitter.com/shadcn)** - For the beautiful UI component library
- **[dnd-kit](https://dndkit.com/)** - For the smooth drag and drop experience
- **[Radix UI](https://www.radix-ui.com/)** - For accessible component primitives
- **[Tailwind Labs](https://tailwindcss.com/)** - For the utility-first CSS framework
- **Open Source Community** - For continuous inspiration and support

## 📊 Project Stats

<div align="center">

![GitHub Stars](https://img.shields.io/github/stars/Blazehue/KNBN?style=social)
![GitHub Forks](https://img.shields.io/github/forks/Blazehue/KNBN?style=social)
![GitHub Watchers](https://img.shields.io/github/watchers/Blazehue/KNBN?style=social)

</div>

## 🗺️ Roadmap

### Phase 1: Core Enhancements ✅
- [x] Drag and drop functionality
- [x] Multiple board support
- [x] Search and filter
- [x] Dark mode
- [x] Responsive design

### Phase 2: Data & Export (In Progress)
- [ ] Export boards to JSON
- [ ] Import boards from JSON
- [ ] Export to PDF
- [ ] Backup and restore functionality
- [ ] Data migration tool

### Phase 3: Collaboration Features
- [ ] User authentication (OAuth)
- [ ] Backend API integration
- [ ] Real-time collaboration
- [ ] Share boards with team
- [ ] Permission management
- [ ] Activity feed

### Phase 4: Advanced Features
- [ ] Card attachments (files, images)
- [ ] Comments and mentions
- [ ] Activity history and audit log
- [ ] Email notifications
- [ ] Recurring tasks
- [ ] Time tracking
- [ ] Sprint planning

### Phase 5: Analytics & Insights
- [ ] Kanban analytics dashboard
- [ ] Productivity metrics
- [ ] Burndown charts
- [ ] Custom reports
- [ ] Data visualization

### Phase 6: Platform Expansion
- [ ] Mobile app (React Native)
- [ ] Desktop app (Electron)
- [ ] Browser extensions
- [ ] API for third-party integrations

### Phase 7: Customization
- [ ] Custom column creation
- [ ] Card templates
- [ ] Custom fields
- [ ] Themes and color schemes
- [ ] Workflow automation

**Want to see a feature?** [Open an issue](https://github.com/Blazehue/KNBN/issues/new) and let's discuss!

## 💡 FAQ

<details>
<summary><b>Is my data secure?</b></summary>

Yes! All data is stored locally in your browser's localStorage. Nothing is sent to any server. Your data stays on your device.
</details>

<details>
<summary><b>Can I use this for commercial projects?</b></summary>

Absolutely! This project is MIT licensed, which means you can use it for personal or commercial purposes freely.
</details>

<details>
<summary><b>Does it work offline?</b></summary>

Yes! Once loaded, the app works completely offline. However, you need to load it once with internet connection.
</details>

<details>
<summary><b>Can I sync data across devices?</b></summary>

Not yet. Data is currently stored locally. Cloud sync is planned for Phase 3 of the roadmap.
</details>

<details>
<summary><b>How do I back up my data?</b></summary>

Currently, you can manually copy localStorage data from browser DevTools. Export/import functionality is coming in Phase 2.
</details>

<details>
<summary><b>What browsers are supported?</b></summary>

All modern browsers: Chrome, Firefox, Safari, Edge (latest 2 versions). IE is not supported.
</details>

## 📞 Support

Need help? Here's how to get support:

- 📧 **Email:** pandrajat123@gmail.com
- 🐛 **Bug Reports:** [GitHub Issues](https://github.com/Blazehue/KNBN/issues)
- 💬 **Questions:** [GitHub Discussions](https://github.com/Blazehue/KNBN/discussions)
- 📖 **Documentation:** This README + code comments

## ⭐ Show Your Support

If this project helped you or you find it useful, please consider:

- ⭐ **Star this repository** - It helps others discover the project
- 🐛 **Report bugs** - Help improve the application
- 💡 **Suggest features** - Share your ideas
- 🔀 **Fork and contribute** - Add your own improvements
- 📢 **Share with others** - Spread the word!

<div align="center">

### ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Blazehue/KNBN&type=Date)](https://star-history.com/#Blazehue/KNBN&Date)

</div>

---

<div align="center">

**Built with ❤️ by [Rajat Panda](https://github.com/Blazehue) using Next.js and TypeScript**

*Making task management beautiful, one drag at a time* 🎯

[⬆ Back to Top](#-minimalist-kanban-board)

</div>
