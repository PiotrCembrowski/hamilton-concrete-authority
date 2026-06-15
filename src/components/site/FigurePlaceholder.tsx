import { ImageIcon } from "lucide-react";
import type { ImageSlot } from "@/data/content-types";

/**
 * Renders an on-brand placeholder for a planned photo. There are no real project
 * photos yet, so this keeps the layout intentional and carries the production
 * filename + alt text for the developer who swaps in a real <Image>.
 *
 * To go live: replace this block with
 *   <Image src={`/images/${slot.filename}`} alt={slot.alt} width={...} height={...} />
 * (next/image, modern format, explicit dimensions, lazy by default).
 */
export function FigurePlaceholder({ slot }: { slot: ImageSlot }) {
  return (
    <figure
      className="overflow-hidden rounded-sm border border-dashed border-border bg-[color:var(--color-surface)]"
      data-image-slot={slot.position}
      data-filename={slot.filename}
    >
      <div
        role="img"
        aria-label={slot.alt}
        className="flex aspect-[16/9] flex-col items-center justify-center gap-2 px-6 text-center"
      >
        <ImageIcon className="h-7 w-7 text-accent" aria-hidden />
        <span className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {slot.position} photo slot
        </span>
        <span className="max-w-md text-xs text-muted-foreground">{slot.alt}</span>
      </div>
      <figcaption className="border-t border-border bg-card px-4 py-2.5 text-xs text-muted-foreground">
        {slot.caption}
      </figcaption>
    </figure>
  );
}
