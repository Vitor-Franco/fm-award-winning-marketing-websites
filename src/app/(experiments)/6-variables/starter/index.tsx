"use client";

import { cn } from "@/lib/utils";
import s from "./styles.module.css";
import { useEffect, useRef, useState } from "react";
import { distance } from "@/lib/math";

export default function Page() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const controller = new AbortController();

    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    console.log({
      screenW,
      screenH,
    })

    window.addEventListener("mousemove", (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      console.log("")
      console.log("")
      console.log("")
      console.log({
        mouseX,
        mouseY,
      })

      const centerX = screenW / 2;
      const centerY = screenH / 2;
      console.log({
        centerX,
        centerY,
      })

      const d = distance(mouseX, mouseY, centerX, centerY);
      const maxDistance = distance(0, 0, centerX, centerY); // the max distance is from corner to center.

      console.log("d", d)
      console.log("maxDistance", maxDistance)
      console.log("final", d / maxDistance)

      if (titleRef.current) {
        titleRef.current.style.setProperty("--distance", `${d / maxDistance}`);
      }
    }, {
      signal: controller.signal,
    })

    return () => {
      controller.abort();
    }
  }, [])

  return (
    <div
      className={cn(
        "w-screen h-screen text-white flex items-center justify-center",
        s.grid
      )}
    >
      <h1
        ref={titleRef}
        className={cn(
          "uppercase text-[10vh] leading-none relative",
          s["title"]
        )}
      >
        Variables
      </h1>
    </div>
  );
}
