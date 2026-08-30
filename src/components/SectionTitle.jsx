export function SectionTitle({ eyebrow, title, align = 'left' }) {
  return (
    <div className={`section-heading ${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}
