# ⚡ Quick Start Guide - Get Running in 5 Minutes

## Step 1: Install Dependencies (1 min)
```bash
npm install
```

## Step 2: Get Gmail App Password (2 min)
1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" and "Windows Computer" (or your device)
3. Generate and copy the password
4. Save somewhere safe

## Step 3: Create `.env.local` (1 min)
```bash
# Copy environment template
cp .env.example .env.local

# Edit the file and add:
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=paste-your-app-password-here
ALERT_EMAIL=chjiimy@gmail.com
```

## Step 4: Start Development Server (30 sec)
```bash
npm run dev
```
Open http://localhost:3000

## Step 5: Test AI Agent (1 min)
1. Click purple/cyan chat bubble (bottom-right)
2. Ask: "What services do you offer?"
3. Check your email inbox for alert
4. Try: "Schedule a call" button

---

## ✅ You're Done! 

Your portfolio now has:
- ✅ AI Chat Agent with RAG
- ✅ Email alerts on client interaction
- ✅ Calendly scheduling
- ✅ Enterprise architecture
- ✅ High-ticket positioning

---

## 📋 Files Changed

**New Files:**
- `src/lib/db.ts` - Database connection (Singleton)
- `src/components/AIAgent.tsx` - Chat widget
- `src/app/api/send-alert/route.ts` - Email alerts
- `.env.example` - Environment template
- `ELITE_ARCHITECTURE.md` - Full docs
- `IMPLEMENTATION_SUMMARY.md` - Implementation details

**Updated Files:**
- `src/app/layout.tsx` - Added AI Agent
- `src/components/ui/HeroContent.tsx` - New headline & pitch
- `src/components/sections/Profilecard.tsx` - Sharjeel's info
- `src/components/sections/AboutMe.tsx` - Professional story
- `src/components/sections/Contact.tsx` - Service positioning
- `src/lib/constants/index.ts` - New skills & projects
- `package.json` - Added dependencies

---

## 🚀 Deployment

```bash
# Build locally first
npm run build

# Push to Git
git add .
git commit -m "feat: Elite portfolio with AI agent"
git push

# Deploy to Vercel
vercel deploy

# Add environment variables in Vercel dashboard
# Settings → Environment Variables
# Add: EMAIL_USER, EMAIL_PASSWORD, ALERT_EMAIL
```

---

## ⚠️ Important Notes

- Use **Gmail App Password**, NOT your regular Gmail password
- Check spam folder if emails don't arrive
- AI Agent is fully automated - no additional setup needed
- Email alerts sent to `chjiimy@gmail.com` (update in `.env` if needed)

---

**That's it! Your elite portfolio is live.** 🎯
