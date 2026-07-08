"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

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

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error ?? "Unable to send your inquiry right now.");
      }

      setStatus("success");
      setFeedback("Inquiry sent. Our team will get back to you shortly.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Unable to send your inquiry right now.");
    }
  }

  return (
    <form className="contact-form" aria-label="Contact form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
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
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          required
        />
      </label>
      <button type="submit" className="button button--gold" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send Inquiry"}
      </button>
      {feedback ? (
        <p className={`contact-form__feedback contact-form__feedback--${status}`}>{feedback}</p>
      ) : null}
    </form>
  );
}
