import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./signup.module.css";

export function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    // Placeholder: simulate signup
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/login"); // after signup, go login
    }, 700);
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>Sign up</h1>
          <p className={styles.subtitle}>Create your New Lense account.</p>
        </div>

        {error ? <div className={styles.error}>{error}</div> : null}

        <form className={styles.form} onSubmit={onSubmit}>
          <label className={styles.label}>
            Name
            <input
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              autoComplete="name"
            />
          </label>

          <label className={styles.label}>
            Email
            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </label>

          <label className={styles.label}>
            Password
            <input
              className={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              autoComplete="new-password"
            />
          </label>

          <button className={styles.primaryBtn} type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create account"}
          </button>
        </form>

        <div className={styles.footer}>
          <span>Already have an account?</span>
          <Link className={styles.link} to="/login">
            Log in
          </Link>
        </div>

        <div className={styles.backRow}>
          <Link className={styles.backLink} to="/">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
