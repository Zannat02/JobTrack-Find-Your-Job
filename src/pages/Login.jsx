import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";


   useEffect(() => {
          document.title = "Login | JobTrack";
      }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then(() => navigate(from))
      .catch((err) => setError(err.message));
  };

  const handleGoogle = () => {
    setError("");
    googleLogin()
      .then(() => navigate(from))
      .catch((err) => setError(err.message));
  };

  return (
    <div className="flex justify-center min-h-screen items-center mt-4">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">Login your account</h2>

        <form className="card-body" onSubmit={handleSubmit}>
          <label className="label">Email</label>
          <input type="email" name="email" className="input" required />

          <label className="label">Password</label>
          <input type="password" name="password" className="input" required />

          <Link to="/auth/forgot" className="link link-hover">Forgot password?</Link>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <button type="submit" className="btn btn-neutral mt-4">Login</button>

          <p className="font-semibold text-center pt-5">
            Don't Have An Account? <Link className="text-blue-600" to="/auth/register"> Register</Link>
          </p>

          <button type="button" onClick={handleGoogle} className="btn btn-outline mt-4">
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;



