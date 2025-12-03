
import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate, useLocation } from "react-router";

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

 
  useState(() => {
    if (location.state?.email) setEmail(location.state.email);
  });

  const handleReset = (e) => {
    e.preventDefault();
    setMsg("");
    if (!email) return setMsg("Please provide your email.");

   
    resetPassword(email)
      .then(() => {
       
        window.open("https://mail.google.com", "_blank");
        setMsg("Password reset email sent. Please check your Gmail.");
       
        setTimeout(() => navigate("/auth/login"), 1500);
      })
      .catch((err) => setMsg(err.message));
  };

  return (
    <div className="flex justify-center min-h-screen items-center mt-4">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-6">
        <h2 className="text-xl font-semibold text-center mb-2">Reset Password</h2>
        {msg && <p className="text-center text-sm text-green-600 mb-2">{msg}</p>}
        <form className="card-body" onSubmit={handleReset}>
          <label className="label">Email</label>
          <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <button className="btn btn-primary mt-4" type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
