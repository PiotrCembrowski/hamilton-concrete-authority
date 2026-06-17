import type { ImageSlot } from "@/data/content-types";

/**
 * Image insertion point. There are no real project photos yet, so this renders
 * NOTHING — no placeholder box, no "photo slot" label, no caption. When a real
 * asset exists, replace the `return null` with a next/image, e.g.:
 *
 *   import Image from "next/image";
 *   return (
 *     <figure className="overflow-hidden rounded-sm border border-border bg-card">
 *       <Image src={`/images/${slot.filename}`} alt={slot.alt} width={1280} height={720}
 *         className="aspect-[16/9] w-full object-cover" />
 *       <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
 *         {slot.caption}
 *       </figcaption>
 *     </figure>
 *   );
 *
 * The ImageSlot (filename, alt, caption) keeps the asset guidance in code only.
 */
export function FigurePlaceholder({ slot }: { slot: ImageSlot }) {
  void slot; // retained for the eventual <Image>; nothing is rendered until a real asset exists
  return null;
}
