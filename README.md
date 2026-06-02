# Pale Apollo

Official website for Pale Apollo — a Nashville-based industrial noise rock band. Rebuilt with React and Vite from the original vanilla JS site. Live at paleapolloband.com.

---

## Features
- Custom vanilla JS audio player with playback controls
- Merch store with Stripe checkout integration
- Live show listings powered by the Bands in Town API
- Dynamic ticket/details button per show — links to ticket purchase if available, falls back to event details
- Direct links to Instagram and email contact
- Fully responsive design

## In Progress
- Admin authentication


## Tech Stack

**Frontend**
- React
- Vite
- Bootstrap
- HTML/CSS/Vanilla JS (music player)

**Backend**
- Node.js
- Express
- Stripe API (merch checkout)
- Bands in Town API (live show data)

## Getting Started

Clone the repo
```bash
git clone https://github.com/ZachDAmico/pale-apollo-vite.git
```

Install frontend dependencies
```bash
npm install
```

Install backend dependencies
```bash
cd server && npm install
```

Add a `.env` file inside the `server` directory with the following keys:
```
STRIPE_SECRET_KEY=your_stripe_key
BANDSINTOWN_API_KEY=your_bandsintown_key
```

Run the backend (port 4000)
```bash
cd server && npm start
```

Run the frontend (port 5173)
```bash
npm run dev
```

Open http://localhost:5173 in your browser.
