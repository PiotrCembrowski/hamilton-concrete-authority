import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().email("Valid email required").max(160),
  phone: z.string().trim().min(7, "Phone required").max(30),
  propertyType: z.string().max(80).optional(),
  message: z.string().trim().max(1000).optional(),
});

export function EstimateForm({ compact = false }: { compact?: boolean }) {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Request received. We'll be in touch within one business day.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className={compact ? "grid gap-3" : "grid gap-3 sm:grid-cols-2"}>
        <Input name="name" placeholder="Full Name *" required />
        <Input name="company" placeholder="Company / Property" />
      </div>
      <div className={compact ? "grid gap-3" : "grid gap-3 sm:grid-cols-2"}>
        <Input name="email" type="email" placeholder="Work Email *" required />
        <Input name="phone" type="tel" placeholder="Phone *" required />
      </div>
      <select
        name="propertyType"
        defaultValue=""
        className="h-12 rounded-sm border border-border bg-background px-3 text-sm text-foreground focus:border-accent focus:outline-none"
      >
        <option value="" disabled>Property Type</option>
        <option>Retail Center</option>
        <option>Warehouse / Industrial</option>
        <option>HOA Community</option>
        <option>Apartment Complex</option>
        <option>Office Park</option>
        <option>Medical Facility</option>
        <option>Municipal Property</option>
        <option>Other</option>
      </select>
      <textarea
        name="message"
        rows={4}
        placeholder="Briefly describe the issue or scope..."
        className="rounded-sm border border-border bg-background p-3 text-sm text-foreground focus:border-accent focus:outline-none"
      />
      <button
        type="submit"
        disabled={submitting}
        className="mt-1 inline-flex items-center justify-center rounded-sm bg-accent px-5 py-3 font-display text-sm font-semibold uppercase tracking-wider text-[color:var(--color-primary)] transition-transform hover:scale-[1.02] disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Request Free Assessment"}
      </button>
      <p className="text-xs text-muted-foreground">
        We respond within one business day. No spam, ever.
      </p>
    </form>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="h-12 rounded-sm border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
    />
  );
}
