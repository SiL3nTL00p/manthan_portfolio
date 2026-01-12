import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";



// Silence non-critical console output in production (hosted) builds
if (import.meta.env.PROD) {
  const noop = () => {};
  // Keep console.error so real errors are still visible
  console.log = noop;
  console.info = noop;
  console.debug = noop;
  console.warn = noop;
}

function Loading() {
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((count) => (count + 1) % 4); // cycles 0...3 dots
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-100 z-50">
      <span
        className="text-white text-xl font-mono select-none"
        style={{
          fontFamily:
            '"SF Mono", "Space Mono", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", monospace',
        }}
        aria-live="polite"
      >
        Loading{'.'.repeat(dotCount)}
      </span>
    </div>
  );
}

function Root() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // reduced to 1 second
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <div className="cursor-default top-5">

        <main>
          <Routes>
            <Route path="/" element={<App />} />
            
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);
