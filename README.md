# Davi Campos Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Material-UI.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Dark/Light Mode** - Toggle between themes
- **SEO Optimized** - Enhanced search engine visibility
- **Contact Form** - Functional contact form with API integration
- **Smooth Animations** - Engaging user experience
- **Modern Tech Stack** - Next.js 14, TypeScript, Material-UI

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **UI Library:** Material-UI (MUI)
- **Styling:** MUI System + Custom CSS
- **Deployment:** Vercel/Netlify ready
- **MyDeployment:** Self hosted linux server with coolify

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DaviBaechtold/My-Portifolio.git
   cd My-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   # Copy the .env file and update with your values
   cp .env .env.local
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

This project uses a serverless API route to send emails from the contact form: `POST /api/contact`.

Set the following variables in your deployment platform (e.g., Vercel → Project → Settings → Environment Variables):

```env
# SMTP settings (example for Gmail)
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=465
EMAIL_SERVER_USER=youraddress@gmail.com
EMAIL_SERVER_PASSWORD=your_app_password

# From/To envelopes (defaults shown)
EMAIL_FROM=youraddress@gmail.com    # optional; defaults to EMAIL_SERVER_USER
EMAIL_TO=davicampos2002@gmail.com   # optional; defaults to this value
```

Notes for Gmail:
- You must enable 2‑Step Verification on the account and create an "App password" for SMTP. Regular account passwords will not work.
- Use port 465 with `secure: true` (the API selects this automatically when port is 465). Port 587 also works if you set `EMAIL_SERVER_PORT=587`.
- `EMAIL_FROM` should generally match `EMAIL_SERVER_USER` to avoid SPF/DMARC issues.

After changing variables on Vercel, redeploy or click "Redeploy with existing build" and ensure the function logs show a success for `/api/contact`.

## 📁 Project Structure

```
├── app/
│   ├── components/          # React components
│   ├── hooks/              # Custom React hooks
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── lib/                    # Utility functions
├── public/                 # Static assets
├── .env                    # Environment variables template
└── README.md
```

## 🎨 Components

- **Header** - Navigation and branding
- **Home** - Hero section with introduction
- **Projects** - Portfolio showcase
- **Skills** - Technical skills display
- **Experience** - Work experience timeline
- **Education** - Educational background
- **Contact** - Contact form and information
- **Footer** - Site footer with links

## 🔧 Development

### Available Scripts:
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style:
- TypeScript for type safety
- ESLint for code quality
- Consistent component structure
- Material-UI design system

## 📱 Features

### SEO Optimization:
- Meta tags and Open Graph
- Structured data (JSON-LD)
- Sitemap generation
- Social media integration

### Performance:
- Next.js optimization
- Image optimization
- Code splitting
- Lazy loading

### Accessibility:
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email:** davicampos2002@gmail.com
- **LinkedIn:** [linkedin.com/in/davi-baechtold-campos](https://www.linkedin.com/in/davi-baechtold-campos-393037145/)
- **GitHub:** [github.com/DaviBaechtold](https://github.com/DaviBaechtold)
- **Website:** [davicampos.dev](https://davicampos.dev)

---

