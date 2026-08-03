# GymFlow marketing site

Public website for gym owners.

## Run

```bash
cd gym-marketing
npm install
npm run dev
```

Opens at **http://localhost:3001**

## Env

`.env.local`:

- `NEXT_PUBLIC_API_URL` — backend (default `http://localhost:5000`)
- `NEXT_PUBLIC_CRM_URL` — CRM app (default `http://localhost:3000`)

## Flow

1. `/` landing → **Create your gym**
2. `/signup` → `POST /companies/signup`
3. Redirect → CRM `/auth/callback` with tokens → dashboard
