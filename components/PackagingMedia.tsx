const clips = [
  {
    src: "/videos/lids.mp4",
    title: "Lid options",
    caption:
      "Bamboo, light wood, matte black, silver, rose gold, and gold lids. Optional add-ons. Shown on an amber jar for fit.",
  },
  {
    src: "/videos/gift-box.mp4",
    title: "Custom folding gift box",
    caption:
      "Private-label sample only. The LUXXURY print is customer artwork, not the Taihuang brand. Custom boxes available with jar orders.",
  },
] as const;

export function PackagingMedia() {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      {clips.map((clip) => (
        <figure key={clip.src} className="min-w-0">
          <h3 className="font-serif text-2xl">{clip.title}</h3>
          <video
            src={clip.src}
            muted
            playsInline
            controls
            className="mt-4 w-full max-w-[720px] rounded-2xl border border-line bg-ink"
          />
          <figcaption className="mt-3 max-w-[720px] text-sm leading-6 text-muted">
            {clip.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
