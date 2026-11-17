"use client";

import { Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { btnPrimary } from "./ui";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "mt-2 w-full rounded-lg border border-line-strong bg-surface px-3.5 py-3 text-base text-fg placeholder:text-faint transition focus:border-accent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      website: String(data.get("website") ?? ""), // honeypot
      elapsed: Date.now() - startedAt.current,
    };

    const next: Record<string, string> = {};
    if (payload.name.length < 2) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) next.email = "Enter a valid email address.";
    if (payload.message.length < 10) next.message = "Write at least a sentence so I know how to help.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus("error");
        setMessage(json.error ?? "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setMessage("Message sent. I'll reply to the email address you gave.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Couldn't reach the server. Check your connection and try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-label="Contact form">
      <div>
        <label htmlFor="cf-name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={100}
          required
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "cf-name-error" : undefined}
          className={field}
        />
        {errors.name ? (
          <p id="cf-name-error" className="mt-1.5 text-sm text-warn">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="cf-email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={200}
          required
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "cf-email-error" : undefined}
          className={field}
        />
        {errors.email ? (
          <p id="cf-email-error" className="mt-1.5 text-sm text-warn">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="cf-message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          maxLength={4000}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "cf-message-error" : undefined}
          className={`${field} resize-y`}
        />
        {errors.message ? (
          <p id="cf-message-error" className="mt-1.5 text-sm text-warn">
            {errors.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot: hidden from people and assistive tech, bots tend to fill it in. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="cf-website">Leave this field empty</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === "sending"} className={`${btnPrimary} disabled:opacity-60`}>
          {status === "sending" ? "Sending..." : "Send message"}
          <Send size={16} aria-hidden />
        </button>
        <p
          role={status === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`text-sm ${status === "error" ? "text-warn" : "text-ok"}`}
        >
          {message}
        </p>
      </div>
    </form>
  );
}
