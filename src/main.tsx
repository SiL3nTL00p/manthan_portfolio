import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MenuBarUse } from "@/components/ui/menu_use";
import { CommitsGridDemo } from "./pages/Welcome";
import { ProjectsGrid } from "@/pages/Projects2.tsx";
import { Creative } from "@/pages/creative";
import { AIBar } from "./components/ui/ai_comp";
import { AI } from "./pages/ai";

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
      <div className="cursor-default">
        <header className="fixed top-0 left-0 right-0 flex items-start justify-between h-10 pr-10 pt-10 pl-10 bg-black z-50 bg-opacity-0">
          <AIBar/>
          <MenuBarUse />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<CommitsGridDemo />} />
            <Route path="/about" element={<App />} />
            <Route path="/projects" element={<ProjectsGrid />} />
            <Route path="/creative" element={<Creative />} />
            <Route path="/ai" element={<AI />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);
