# Eclipse Phase LaTeX Book Website

This is a React + Vite + Tailwind CSS website generated from the Eclipse Phase LaTeX files.

## Setup
```bash
cd react-output
npm install
npm run dev
```

The site will be available at http://localhost:5173

## Build for Production
```bash
npm run build
```

Your site will be live at https://yourusername.github.io/your-repo-name/

## Tech Stack
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

## Structure
- Each .tex file becomes a separate tab
- Each tab is a separate component in the components/ directory
- Supports \chapter, \section, \subsection, and \labelsec commands
- Tabs can be easily imported and reused
