"use client";

import { useEffect, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (!feedback || status === "sending" || status === "idle") {
      return;
    }

    const timer = window.setTimeout(() => {
      setStatus("idle");
      setFeedback("");
    }, status === "success" ? 9000 : 12000);

    return () => window.clearTimeout(timer);
  }, [feedback, status]);

  function dismissBanner() {
    setStatus("idle");
    setFeedback("");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const payload = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(payload?.error ?? "Unable to send your inquiry right now.");
      }

      setStatus("success");
      setFeedback("Your inquiry was sent successfully. Our team will get back to you shortly.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Unable to send your inquiry right now.");
    }
  }

  return (
    <>
      {feedback ? (
        <div
          role="alert"
          aria-live="assertive"
          className={`inquiry-banner inquiry-banner--${status === "success" ? "success" : "error"}`}
        >
          <div className="inquiry-banner__inner">
            <p className="inquiry-banner__message">{feedback}</p>
            <button
              type="button"
              className="inquiry-banner__close"
              onClick={dismissBanner}
              aria-label="Dismiss notification"
            >
              ×
            </button>
          </div>
        </div>
      ) : null}

      <form className="contact-form" aria-label="Contact form" onSubmit={handleSubmit}>
        <label className="contact-form__honeypot" aria-hidden="true">
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(event) => setForm((prev) => ({ ...prev, website: event.target.value }))}
          />
        </label>

        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            maxLength={120}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            required
          />
        </label>
        <label>
          Project details
          <textarea
            name="message"
            placeholder="Tell us about your countertop or surface project"
            value={form.message}
            maxLength={4000}
            onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
            required
          />
        </label>
        <button type="submit" className="button button--gold" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Inquiry"}
        </button>
      </form>
    </>
  );
}
