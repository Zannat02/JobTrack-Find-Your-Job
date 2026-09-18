# JobTrack – A Smart Job Hunting Platform

JobTrack is a modern and user-friendly job portal where users can explore job opportunities across multiple companies, filter them by category, search jobs directly, and view detailed job descriptions. The project includes a complete authentication system using Firebase with protected routes, user profile updates, and password reset features.

---

## 🔗 Live Preview

👉 Live Demo: https://job-track-c15bf.web.app

👉 GitHub Repository: https://github.com/Zannat02/JobTrack-Find-Your-Job

---

## User Authentication (Firebase)

* Email/Password Authentication
* Google Social Login
* Login, Register & Forgot Password pages
* Password validation (uppercase, lowercase, minimum 6 characters)
* Logged-in user info shown on the navbar
* User Logout functionality
* Update profile feature (Name & Photo URL)

---

## Private Routes

Some pages are only accessible when the user is logged in:

* Company Details
* Job Details
* Filtered Job Page
* Any job category route
* Job Search Results

If the user is not logged in, they are redirected to the Login page.

---

## Job Categories

* Dynamic Category Dropdown
* Category list auto-generated from JSON data
* Each category shows filtered jobs on a private route
* Active category shows underline (fixed)

---

## Job Search

* Search bar on the home page banner
* Search jobs by title in real time
* Matching jobs shown on a dedicated results page with company info
* Empty state shown when no jobs match the search term

---

## Company & Job Details

* View company information
* Check available job positions
* View job-specific details such as:
  * Salary
  * Requirements
  * Responsibilities
  * Job type
  * Location

---

## Blog

* Dedicated blog listing page with article cards
* Individual blog details page for each article
* Covers career tips, interview advice, resume guidance, and industry trends
* Publicly accessible (no login required)

---

## About Page

* Full-width image slider/carousel with autoplay, navigation arrows, and dots
* Animated decorative background with floating blob shapes
* Scroll-triggered entrance animations for text and image
* Animated statistics counter section (companies, jobs posted, hires, categories)

---

## Pages Included

* Home
* About (public)
* Blog (public)
* Blog Details (public)
* Login
* Register
* Forget Password
* Company Details
* Job Details
* Filtered Job List
* Search Results

---

## UI & UX

* Built with React + Tailwind CSS
* Responsive on all devices
* Clean and organized component structure
* Popup menu for mobile
* Automatic Navbar & Footer via layout system
* Dynamic page titles with `react-helmet-async`
* Smooth animations using Framer Motion / Motion
* Decorative, full-bleed background sections

---

## 🛠️ Technologies Used

* React (Vite)
* React Router
* Firebase Authentication
* React Context API
* Tailwind CSS
* Framer Motion
* React Helmet Async
* JSON File Data
* DaisyUI Components

---

## Special Features Added

* Auto-close category dropdown on click
* Active NavLink underline only for visited pages
* Forgot password → auto-fill email if typed earlier
* Error toast messages
* Global loading states
* Profile update with Firebase updateProfile()
* Job search from home banner with dedicated results page
* Full-width animated image slider on About page
* Animated count-up statistics section
* Blog section for career-related articles