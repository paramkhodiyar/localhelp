# LocalHelp

LocalHelp is a full-stack service marketplace inspired by modern platforms like Urban Company.  
Users can sign up, log in, browse service categories, and connect with verified local service providers.  
Service providers can also register themselves through a dedicated onboarding flow.

---

## Live Links

**Frontend:**  
https://localhelpfrontendv2.vercel.app/

**Backend API:**  
https://localhelpbackendv2.onrender.com

---

## Project Overview

LocalHelp enables a seamless connection between customers and trusted service providers from the local community.  
The platform supports:

- User authentication (signup, login, logout)
- JWT-based security (stored via cookies or localStorage)
- Browsing service categories and mock listings
- Role-based navigation (Customer / Service Provider)
- Clean, responsive UI built with Next.js and TailwindCSS
- Backend powered by Express.js, Prisma ORM, and PostgreSQL

---

## Features

### User Features
- Sign up with name, email, phone, password
- Log in with JWT authentication
- Access protected routes (landing page, services page)
- View service categories
- View all available services (fetched from backend)

### Provider Features
- Become a provider through onboarding flow
- Provider profile stored in PostgreSQL via Prisma
- Role assigned dynamically (`CUSTOMER` → `PROVIDER`)

### Technical Features
- JWT Authentication (Bearer token)
- Prisma ORM with relational schema
- Secure password hashing using bcrypt
- CORS configured for cross-domain communication
- Fully responsive frontend layout

---

## Tech Stack

### Frontend
- Next.js 14+ (App Router)
- Tailwind CSS
- React Icons
- React Hot Toast
- Responsive layout with custom components

### Backend
- Node.js + Express.js
- PostgreSQL database
- Prisma ORM
- JWT Authentication
- Bcrypt password hashing

Deployment:
- Frontend: Vercel  
- Backend: Render  
- Database: PostgreSQL on Render

---

## API Endpoints

### Auth
| Method | Endpoint            | Description                    |
|--------|----------------------|--------------------------------|
| POST   | `/api/auth/signup`   | Create new user               |
| POST   | `/api/auth/login`    | Login and get JWT token       |
| POST   | `/api/auth/logout`   | Logout user                   |
| GET    | `/api/auth/me`       | Get logged-in user details    |

### Services (for future expansion)
| Method | Endpoint                    | Description                     |
|--------|------------------------------|---------------------------------|
| GET    | `/api/services/categories`   | Fetch all categories            |
| GET    | `/api/services/subcategories/:id` | Fetch subcategories        |
| GET    | `/api/services`             | Fetch all services              |

---

## Environment Variables

### Frontend (Next.js)
Create `.env.local`:

```
NEXT_PUBLIC_API_URL=https://localhelpbackendv2.onrender.com
```

### Backend
Create `.env`:

```
DATABASE_URL="your_postgres_url"
JWT_SECRET="your_jwt_secret"
```

---

## Folder Structure

### Frontend
```
/app
  /login
  /signup
  /landingpage
  /services
/components
/styles
```

### Backend
```
/controllers
/middlewares
/routes
/utils
prisma/schema.prisma
server.js
```

---

## Authentication Flow

1. User signs in → Backend returns JWT token  
2. Token is stored in **localStorage**  
3. Protected pages call `/api/auth/me` with `Authorization: Bearer <token>`  
4. If valid → allow access  
5. If invalid → redirect to `/login`

---

## Deployment

### Frontend
- Hosted on Vercel  
- Uses `NEXT_PUBLIC_API_URL` to connect to backend

### Backend
- Hosted on Render  
- CORS properly configured for Vercel domain

---

## Future Enhancements

- Provider dashboard
- Booking system  
- Real-time notifications  
- Payment gateway  
- Reviews and ratings  
- Search and filtering  
- Location-based service sorting

---

## Credits

Developed as a modern service marketplace to empower local communities and service providers.
