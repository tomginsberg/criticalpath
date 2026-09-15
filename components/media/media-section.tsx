import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { getMedia } from '@/lib/media';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

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
            id="media-heading"
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

        <Carousel
          aria-labelledby="media-heading"
          opts={{
            align: 'start',
            slidesToScroll: 1,
            breakpoints: {
              '(prefers-reduced-motion: reduce)': { duration: 0 },
            },
          }}
        >
          <CarouselContent className="-ml-6 md:-ml-8">
            {media.map((item, index) => (
              <CarouselItem
                key={item.id}
                aria-label={`${index + 1} of ${media.length}`}
                className="basis-[85%] pl-6 md:basis-1/2 md:pl-8 lg:basis-1/3"
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0337A0]"
                >
                  <div
                    className="relative overflow-hidden mb-4"
                    style={{ aspectRatio: '16/10' }}
                  >
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="(min-width: 1152px) 341px, (min-width: 1024px) calc((100vw - 128px) / 3), (min-width: 768px) calc((100vw - 96px) / 2), 85vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
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
                      className="text-xs tracking-wide uppercase flex flex-wrap items-center gap-x-2 gap-y-1"
                      style={{ color: 'oklch(0.6 0.01 240)' }}
                    >
                      <span>{item.publication}</span>
                      {item.publishedAt && (
                        <>
                          <span aria-hidden="true">·</span>
                          <time dateTime={item.publishedAt}>
                            {format(parseISO(item.publishedAt), 'MMMM d, yyyy')}
                          </time>
                        </>
                      )}
                    </p>
                    <h3
                      className="font-bold text-[#021F59] group-hover:text-[#0337A0] transition-colors flex items-start gap-1"
                      style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)' }}
                    >
                      {item.title}
                      <ArrowUpRight aria-hidden="true" className="h-4 w-4 mt-1 shrink-0" />
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'oklch(0.45 0.01 240)' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          {media.length > 1 && (
            <div className="mt-8 flex items-center justify-between gap-4">
              <p className="text-sm text-[#021F59]/70">
                {media.length} stories
              </p>
              <div className="flex gap-2">
                <CarouselPrevious
                  aria-label="Previous stories"
                  className="static h-11 w-11 translate-y-0 border-[#021F59]/30 bg-transparent text-[#021F59] hover:border-[#021F59] hover:bg-[#021F59] hover:text-white focus-visible:ring-[#0337A0]"
                />
                <CarouselNext
                  aria-label="Next stories"
                  className="static h-11 w-11 translate-y-0 border-[#021F59]/30 bg-transparent text-[#021F59] hover:border-[#021F59] hover:bg-[#021F59] hover:text-white focus-visible:ring-[#0337A0]"
                />
              </div>
            </div>
          )}
        </Carousel>
      </div>
    </section>
  );
}
