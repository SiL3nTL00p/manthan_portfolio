import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import ProjectDetail from "./pages/project_details";
import Shaped from "./pages/shaped";
import Blogs from "./pages/blogs";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";



// Silence non-critical console output in production (hosted) builds
if (import.meta.env.PROD) {
  const noop = () => { };
  // Keep console.error so real errors are still visible
  console.log = noop;
  console.info = noop;
  console.debug = noop;
  console.warn = noop;
}

function Loading({ exiting }: { exiting: boolean }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#111] transition-opacity duration-300 ${exiting ? "opacity-0" : "opacity-100"
        }`}
    >
      <div className="font-mono text-sm text-zinc-400 select-none" aria-live="polite">
        <span className="text-zinc-600">manthan@portfolio:~$</span>{" "}
        ./boot.sh
        <span
          className="ml-1 inline-block h-4 w-2 align-middle bg-zinc-400 animate-pulse"
          style={{ animationDuration: "1.1s" }}
        />
      </div>
    </div>
  );
}

function Root() {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const startExitTimer = setTimeout(() => setExiting(true), 800);
    const doneTimer = setTimeout(() => setLoading(false), 1100);

    return () => {
      clearTimeout(startExitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (loading) {
    return <Loading exiting={exiting} />;
  }

  return (
    <BrowserRouter>
      <div className="cursor-default top-5">

        <main>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/shaped" element={<Shaped />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);
