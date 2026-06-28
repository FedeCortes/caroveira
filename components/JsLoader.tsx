"use client";

import { useEffect } from "react";

export default function JsLoader() {
  useEffect(() => {
    document.body.classList.add("js-loaded");
  }, []);
  return null;
}
