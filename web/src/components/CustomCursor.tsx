"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type CursorMode = "default" | "link" | "image";

const LERP = 0.14;

export default function CustomCursor() {
  const target = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const [mode, setMode] = useState<CursorMode>("default");
  const [visible, setVisible] = useState(false);
  const [finePointer, setFinePointer] = useState(false);
  const raf = useRef<number>(0);
  const dotEl = useRef<HTMLDivElement>(null);
  const ringEl = useRef<HTMLDivElement>(null);

  const detectMode = useCallback((clientX: number, clientY: number): CursorMode => {
    const el = document.elementFromPoint(clientX, clientY);
    if (!el) return "default";
    if (el.closest("a, button, [role='button'], input, textarea, select, label")) return "link";
    if (el.tagName === "IMG" || el.closest("picture")) return "image";
    return "default";
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const setMq = () => setFinePointer(mq.matches);
    setMq();
    mq.addEventListener("change", setMq);
    return () => mq.removeEventListener("change", setMq);
  }, []);

  useEffect(() => {
    if (!finePointer) return;

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      setMode(detectMode(e.clientX, e.clientY));
      setVisible(true);
      if (dotEl.current) {
        dotEl.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onLeave = () => setVisible(false);

    const tick = () => {
      ring.current.x += (target.current.x - ring.current.x) * LERP;
      ring.current.y += (target.current.y - ring.current.y) * LERP;
      if (ringEl.current) {
        ringEl.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, [finePointer, detectMode]);

  if (!finePointer) return null;

  const ringSize = mode === "image" ? 80 : mode === "link" ? 60 : 40;
  const ringBorder = mode === "link" ? "rgba(196, 151, 60, 0.35)" : "rgba(196, 151, 60, 0.4)";
  const ringBg =
    mode === "link" ? "rgba(201, 79, 44, 0.1)" : mode === "image" ? "rgba(201, 79, 44, 0.08)" : "transparent";

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[10000]"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden
    >
      <div
        ref={dotEl}
        className="pointer-events-none fixed left-0 top-0 z-[10001] h-1.5 w-1.5 rounded-full bg-ember"
        style={{ transform: "translate3d(0,0,0)" }}
      />
      <div
        ref={ringEl}
        className="pointer-events-none fixed left-0 top-0 z-[10000] flex items-center justify-center rounded-full border transition-[width,height,background-color,border-color] duration-200 ease-out"
        style={{
          width: ringSize,
          height: ringSize,
          borderWidth: 1,
          borderColor: ringBorder,
          backgroundColor: ringBg,
          transform: "translate3d(0,0,0) translate(-50%, -50%)",
        }}
      >
        {mode === "image" ? (
          <span className="font-sans text-[8px] font-medium uppercase tracking-[0.2em] text-parchment/90">
            VIEW
          </span>
        ) : null}
      </div>
    </div>
  );
}
