import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.css";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter email and password.");
      return;
    }

    // Placeholder: simulate login
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Later: save token/session etc.
      navigate("/"); // go back home after login
    }, 700);
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>Log in</h1>
          <p className={styles.subtitle}>Welcome back to New Lense.</p>
        </div>

        {error ? <div className={styles.error}>{error}</div> : null}

        <form className={styles.form} onSubmit={onSubmit}>
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
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </label>

          <button className={styles.primaryBtn} type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Log in"}
          </button>
        </form>

        <div className={styles.footer}>
          <span>Don’t have an account?</span>
          <Link className={styles.link} to="/signup">
            Sign up
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
