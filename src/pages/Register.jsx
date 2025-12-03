
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate, Link } from "react-router";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

    useEffect(() => {
            document.title = "Register | JobTrack";
        }, []);

  const validatePassword = (pwd) => {
    if (!/[A-Z]/.test(pwd)) return "Password must include an uppercase letter.";
    if (!/[a-z]/.test(pwd)) return "Password must include a lowercase letter.";
    if (pwd.length < 6) return "Password must be at least 6 characters.";
    return null;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const validationError = validatePassword(password);
    if (validationError) return setError(validationError);

    createUser(email, password)
      .then((res) => {
        return updateUserProfile(name, photo);
      })
      .then(() => navigate("/"))
      .catch((err) => setError(err.message));
  };

  return (
    <div className="flex justify-center min-h-screen items-center mt-5">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">Register your account</h2>
        <form className="card-body" onSubmit={handleRegister}>
          {error && <p className="text-red-500 mb-2">{error}</p>}

          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Full name" required />

          <label className="label">Photo URL</label>
          <input type="text" name="photo" className="input" placeholder="Photo URL" required />

          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" required />

          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" required />

          <button type="submit" className="btn btn-neutral mt-4">Register</button>

          <p className="font-semibold text-center pt-5">
            Already Have An Account? <Link className="text-blue-600" to="/auth/login"> Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;


