import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { format } from 'date-fns';
import { getMedia } from '@/lib/media';

export default async function MediaSection() {
  const media = await getMedia();

  if (media.length === 0) return null;

  return (
    <section
      id="media"
      className="py-16 md:py-24"
      style={{ background: 'oklch(0.985 0.003 240)' }}
    >
      <div className="container max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0337A0] mb-4">
            Media
          </p>
          <h2
            className="font-bold text-[#021F59] mb-4"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
          >
            Critical Path in the News
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: 'oklch(0.4 0.01 240)' }}
          >
            Press coverage, articles, and stories about our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {media.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div
                className="relative overflow-hidden mb-4"
                style={{ aspectRatio: '16/10' }}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full" style={{ background: 'oklch(0.93 0.01 240)' }} />
                )}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(2,31,89,0.6) 0%, transparent 50%)',
                  }}
                />
              </div>

              <div className="space-y-2">
                <p
                  className="text-xs tracking-wide uppercase flex items-center gap-2"
                  style={{ color: 'oklch(0.6 0.01 240)' }}
                >
                  <span>{item.publication}</span>
                  {item.publishedAt && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>
                        {format(new Date(item.publishedAt), 'MMMM d, yyyy')}
                      </span>
                    </>
                  )}
                </p>
                <h3
                  className="font-bold text-[#021F59] group-hover:text-[#0337A0] transition-colors flex items-start gap-1"
                  style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)' }}
                >
                  {item.title}
                  <ArrowUpRight className="h-4 w-4 mt-1 shrink-0" />
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'oklch(0.45 0.01 240)' }}
                >
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
