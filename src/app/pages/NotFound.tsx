import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

// Shown by the catch-all "*" route in routes.tsx when a URL matches no real page
// (e.g. someone mistypes /collektions). Keeps visitors on the site instead of a
// blank screen. Styled with the same tokens as the rest of the site.
export default function NotFound() {
  return (
    <div className="pt-16 md:pt-20 min-h-[70vh] flex items-center justify-center px-6 text-center">
      <div className="max-w-[560px]">
        <div className="font-sans text-[13px] font-semibold tracking-[0.15em] uppercase text-warm mb-4">
          Error 404
        </div>
        <h1 className="font-serif text-[40px] md:text-[64px] font-semibold text-darker leading-[1.1] mb-4">
          Page Not Found
        </h1>
        <p className="font-sans text-[15px] md:text-[17px] text-muted leading-[1.7] mb-8">
          The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 md:px-10 md:py-4 bg-darker text-cream font-sans text-[14px] font-semibold tracking-[0.05em] uppercase transition-all duration-300 ease-smooth hover:bg-dark hover:-translate-y-0.5"
        >
          Back to Home
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
