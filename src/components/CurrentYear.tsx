"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** Renders the current year in the visitor's browser, so a static build never goes stale. */
export function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => new Date().getFullYear(),
  );
  return <>{year}</>;
}
