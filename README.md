#  Basic Activity Booking App – Backend API

A simple REST API backend for booking activities like cricket , yoga etc. Built as part of the MeetX Backend Developer Internship assignment.

##  Features

-  User Registration & Login (`JWT`-based authentication)
-  List all available activities (public)
-  Book an activity (authorized users)
-  View all bookings by logged-in user
-  Password hashing with `bcrypt`
-  Input validation with `express-validator`
-  Clean MVC structure

##  Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JWT
- **Validation**: express-validator
- **Password Hashing**: bcrypt
- **API Testing**: Postman

##  Folder Structure

```bash
backend/
│
├── app.js
├── activity-booking.postman_collection.json
├── .env
├── config/
│   └── mongoConnection.js
├── routes/
│   ├── authRoutes.js
│   ├── activityRoutes.js
│   └── bookingRoutes.js
├── controllers/
│   ├── authController.js
│   ├── activityController.js
│   └── bookingController.js
├── models/
│   ├── User.js
│   ├── Activity.js
│   └── Booking.js
└── middlewares/
    ├── validate.js
    └── authMiddleware.js
  
```

##  Setup Instructions

1. **Clone the repository**  
   ```bash
   git clone https://github.com/Suvo-Ghosh/backend.git
   cd backend
   ```
2. **Install dependencies**  
   ```bash
   npm install
   ```
3. **Add environment variables**  
   ```bash
   PORT=4000
   MONGOOSE_URL=mongodb://localhost:27017
   JWT_SECRET=your_jwt_secret_key
   ```
4. **Start the server**
   ```bash
   npm run dev
   ```
## API Endpoints

| Method | Endpoint               | Access    | Description                     |
|--------|------------------------|-----------|---------------------------------|
| POST   | `/api/auth/register`   | Public    | Register a new user             |
| POST   | `/api/auth/login`      | Public    | Login and get auth token        |
| GET    | `/api/activities`      | Public    | List all activities             |
| POST   | `/api/bookings/:id`    | Protected | Book an activity by ID          |
| GET    | `/api/bookings/me`     | Protected | Get all bookings by current user|

## Postman Collection
-  You can find the collection JSON file `activity-booking.postman_collection.json`.

 - Import it into Postman to test all endpoints quickly.

## Deployment

The backend API for the Activity Booking App is deployed on `Render` and can be accessed live at the following URL:

### Live URL :
[https://activity-booking-z8lm.onrender.com](https://activity-booking-z8lm.onrender.com)



