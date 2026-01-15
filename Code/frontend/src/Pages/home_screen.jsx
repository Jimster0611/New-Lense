import React, { useMemo, useRef, useState } from "react";
import styles from "./home_screen.module.css";
import { Link, useNavigate } from "react-router-dom";

import shockedbaby from '../assets/Images/shockedbaby.png';
import monopoly_money from '../assets/Images/monopoly.png';
import {
  PlayRenaiBrooklyn,
  PlayMontagemMiau,
  PlayFahh,
} from '../Componets/Songs';
import backgroundVid from '../assets/Videos/sakura_garden_background.mp4';


export function HomeScreen() {
  {/* Background video */}
      {/* Uncomment if you want it visible */}
      {/* 
      <video
        className={styles.backgroundVideo}
        src={backgroundVid}
        type="video/mp4"
        autoPlay
        loop
        muted
      />
      */}
  
  const navigate = useNavigate();
  const [mode, setMode] = useState("text"); // "text" | "url" | "file"
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [file, setFile] = useState(null);

  const fileInputRef = useRef(null);

  const maxChars = 10000;
  const charCount = text.length;

  const canScan = useMemo(() => {
    if (mode === "text") return text.trim().length > 0;
    if (mode === "url") return url.trim().length > 0;
    if (mode === "file") return !!file;
    return false;
  }, [mode, text, url, file]);

  const onPickFile = () => fileInputRef.current?.click();

  const onFileChange = (e) => {
    const f = e.target.files?.[0] || null;
    setFile(f);
    if (f) setMode("file");
  };

  const onScan = () => {
    // V1: just pass input to output page as state (backend later)
    const payload =
      mode === "text"
        ? { type: "text", value: text.trim() }
        : mode === "url"
        ? { type: "url", value: url.trim() }
        : { type: "file", value: file?.name || "file", file };

    navigate("/output", { state: { input: payload } });
  };

  return (
    <div className={styles.appWrapper}>
      {/* Header */}
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            <li className={styles.navItem}><a href="#page1">Home</a></li>
            <li className={styles.navItem}><a href="#page2">About</a></li>
            <li className={styles.navItem}><a href="#page3">Contact</a></li>
            <li className={styles.navItem}><a href="#page4">Pricing</a></li>
          </ul>

          <div className={styles.authButtons}>
            <Link to="/login"><button type="button" className={styles.loginBtn}>Log in</button></Link>
            <Link to="/signup"><button type="button" className={styles.signupBtn}>Sign up</button></Link>
          </div>
        </nav>
      </header>

      {/* Main */}
      <main className={styles.main}>
        <section id="page1" className={styles.page}>
          <h1 className={`${styles.title} ${styles.typewriter}`}>Lenses!</h1>

          {/* Extra media / components, optional */}
          {/* 
          <PlayRenaiBrooklyn />
          <PlayMontagemMiau />
          <PlayFahh />

          <img src={monopoly_money} alt="Monopoly money" />
          <img
            src={shockedbaby}
            alt="Shocked baby"
            style={{ width: '400px', height: 'auto' }}
          />
          */}

          {/* V1 Input Panel */}
          <div className={styles.inputCard}>
            <div className={styles.inputTopRow}>
              <div className={styles.modeTabs}>
                <button
                  type="button"
                  className={`${styles.modeTab} ${mode === "text" ? styles.modeTabActive : ""}`}
                  onClick={() => setMode("text")}
                >
                  Paste text
                </button>
                <button
                  type="button"
                  className={`${styles.modeTab} ${mode === "url" ? styles.modeTabActive : ""}`}
                  onClick={() => setMode("url")}
                >
                  Paste URL
                </button>
                <button
                  type="button"
                  className={`${styles.modeTab} ${mode === "file" ? styles.modeTabActive : ""}`}
                  onClick={() => setMode("file")}
                >
                  Upload
                </button>
              </div>

              <div className={styles.uploadButtons}>
                <button type="button" className={styles.secondaryBtn} onClick={onPickFile}>
                  Upload file (PDF)
                </button>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.txt"
                  onChange={onFileChange}
                  className={styles.hiddenFileInput}
                />
              </div>
            </div>

            {/* Body */}
            <div className={styles.inputBody}>
              {mode === "text" ? (
                <>
                  <textarea
                    className={styles.textarea}
                    placeholder="Paste your text here..."
                    value={text}
                    onChange={(e) => setText(e.target.value.slice(0, maxChars))}
                  />
                  <div className={styles.helperRow}>
                    <span className={styles.charCount}>
                      {charCount}/{maxChars} characters
                    </span>
                  </div>
                </>
              ) : null}

              {mode === "url" ? (
                <>
                  <input
                    className={styles.urlInput}
                    placeholder="Paste article URL (https://...)"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                  <div className={styles.urlHint}>
                    Tip: Use the direct article page URL (not search results).
                  </div>
                </>
              ) : null}

              {mode === "file" ? (
                <>
                  <div className={styles.fileBox}>
                    <div className={styles.fileTitle}>Selected file</div>
                    <div className={styles.fileName}>{file ? file.name : "No file selected yet."}</div>
                    <div className={styles.fileHint}>V1 supports PDF/text file upload (backend parsing later).</div>
                  </div>
                </>
              ) : null}
            </div>

            {/* Bottom */}
            <div className={styles.inputBottomRow}>
              <button
                type="button"
                className={styles.scanBtn}
                onClick={onScan}
                disabled={!canScan}
                title={!canScan ? "Add text / URL / file first" : "Scan"}>
                Scan →
              </button>
            </div>
          </div>
        </section>

        <section id="page2" className={styles.page}></section>
        <section id="page3" className={styles.page}></section>
        <section id="page4" className={styles.page}></section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Lenses. All rights reserved.</p>
      </footer>
    </div>
  );
}
