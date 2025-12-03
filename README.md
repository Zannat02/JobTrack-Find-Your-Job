#  JobTrack – A Smart Job Hunting Platform

JobTrack is a modern and user-friendly job portal where users can explore job opportunities across multiple companies, filter them by category, and view detailed job descriptions. The project includes a complete authentication system using Firebase with protected routes, user profile updates, and password reset features.

---
🔗 Live Preview

👉 Live Demo: https://job-track-c15bf.web.app
👉 GitHub Repository: https://github.com/Zannat02/JobTrack-Find-Your-Job


###  **User Authentication (Firebase)**
- Email/Password Authentication  
- Google Social Login  
- Login, Register & Forgot Password pages  
- Password validation (uppercase, lowercase, minimum 6 characters)  
- Logged-in user info shown on the navbar  
- User Logout functionality  
- Update profile feature (Name & Photo URL)

---

## **Private Routes**
Some pages are only accessible when the user is logged in:
- Company Details
- Job Details
- Filtered Job Page
- Any job category route

If the user is not logged in, they are redirected to the Login page.

---

##  **Job Categories**
- Dynamic Category Dropdown  
- Category list auto-generated from JSON data  
- Each category shows filtered jobs on a private route  
- Active category shows underline (fixed)

---

## **Company & Job Details**
- View company information  
- Check available job positions  
- View job-specific details such as:
  - Salary  
  - Requirements  
  - Responsibilities  
  - Job type  
  - Location  

---

##  **Pages Included**
- Home  
- About (public)  
- Login  
- Register  
- Forget Password  
- Company Details  
- Job Details  
- Filtered Job List  
 

---

##  **UI & UX**
- Built with React + Tailwind CSS  
- Responsive on all devices  
- Clean and organized component structure  
- Popup menu for mobile  
- Automatic Navbar & Footer via layout system  
- Dynamic page titles with `react-helmet-async`  



---

## 🛠️ **Technologies Used**
- **React** (Vite)
- **React Router**
- **Firebase Authentication**
- **React Context API**
- **Tailwind CSS**
- **React Helmet Async**
- **JSON File Data**
- **DaisyUI Components**

---

## Special Features Added

- Auto-close category dropdown on click

- Active NavLink underline only for visited pages

- Forgot password → auto-fill email if typed earlier

- Error toast messages

- Global loading states

- Profile update with Firebase updateProfile()






