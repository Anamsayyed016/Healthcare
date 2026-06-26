import { MAP_EMBED_URL, MAP_LINK_URL, OFFICE_ADDRESS_INLINE } from '@/lib/contact';

export default function OfficeMap({ className = 'h-96' }: { className?: string }) {
  return (
    <div className={`rounded-3xl overflow-hidden border border-slate-200 shadow-lg ${className}`}>
      <iframe
        title={`PharmEFC Healthcare office location - ${OFFICE_ADDRESS_INLINE}`}
        src={MAP_EMBED_URL}
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <a
        href={MAP_LINK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="sr-only"
      >
        Open office location in Google Maps
      </a>
    </div>
  );
}
