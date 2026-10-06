"use client"

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "I've started over every single January for four years. Bought journals, downloaded apps, followed YouTube workouts for 6 days. This was the first thing I actually stuck with past week two. Day 47 now.",
    by: "Sarah M. — Austin, TX",
    imgSrc: "https://cdn.21st.dev/assets/mirror/f0/f02fed36023656a5b5df6f247c83c96c53bfa9db5b98085cdee93ffc938a5f37.jpg"
  },
  {
    tempId: 1,
    testimonial: "Two kids, full-time job, husband who travels. I don't have 45 minutes for a workout routine. But I have 2 minutes before bed to fill in three boxes. That's all this asks. That's why it works.",
    by: "Jess T. — Toronto, Canada",
    imgSrc: "https://cdn.21st.dev/assets/mirror/5b/5b5b2f3487692d40f629010ea6448d150907f780d8c262c4ca194b7386115c2d.jpg"
  },
  {
    tempId: 2,
    testimonial: "I printed mine, stuck page 1 on my fridge with a magnet, and filled it in while my coffee brewed. Six weeks later that page is still there. Every box checked.",
    by: "Priya K. — London, UK",
    imgSrc: "https://cdn.21st.dev/assets/mirror/10/10e2bfa5446e5c116e269b649b5f5e0106d96643f0a903048f3a056e40c35cd8.jpg"
  },
  {
    tempId: 3,
    testimonial: "I was sceptical about a printed PDF in 2026. But the apps never worked — too many notifications, too easy to ignore. A pen and paper on my nightstand? Way harder to scroll past.",
    by: "Claire R. — Melbourne, Australia",
    imgSrc: "https://cdn.21st.dev/assets/mirror/fa/fae47bb0faba45d1e0696b6557ca36c551a738c7d6e3950e82bb69dd2f963a72.jpg"
  },
  {
    tempId: 4,
    testimonial: "The mood tracker changed everything for me. I started seeing the pattern — bad sleep always followed stress eating. Once you see it written down in pink, you can't unsee it.",
    by: "Aisha B. — Chicago, IL",
    imgSrc: "https://cdn.21st.dev/assets/mirror/4f/4fb45af36b546e069b72527fdf4d904855a2b11b301fa738c8bc4d235595c4df.jpg"
  },
  {
    tempId: 5,
    testimonial: "I'm 38. Every fitness product out there is designed for 22 year olds who want to look good in a bikini. This one actually asks about energy levels and sleep quality. Felt made for me.",
    by: "Dana W. — Edinburgh, Scotland",
    imgSrc: "https://cdn.21st.dev/assets/mirror/a4/a4dd47498f54944edb9cd8095fb751847193faac01d922bae494e68d0cf90f4f.jpg"
  },
  {
    tempId: 6,
    testimonial: "Printed the whole 63 pages at Staples, got it spiral-bound for $4. Best $31 I've spent this year. My friend saw it on my desk and ordered one the same day.",
    by: "Megan S. — Portland, OR",
    imgSrc: "https://cdn.21st.dev/assets/mirror/b2/b2cd3e4ad761fd9954c265df5f86090c4f17c388c07f78332e75edfd7420f66a.jpg"
  },
  {
    tempId: 7,
    testimonial: "I stopped tracking my weight and started tracking my walks, water, and sleep. Down 11 pounds in 90 days. Didn't count a single calorie.",
    by: "Rachel F. — Phoenix, AZ",
    imgSrc: "https://cdn.21st.dev/assets/mirror/9a/9a3f3f88dac2ceb807e98d4cbe99acc9813da6d0ce2859b1cf026747727e1667.jpg"
  },
  {
    tempId: 8,
    testimonial: "The weekly reflection page is the one I didn't expect to care about. Sitting with that page on Sunday changed how I think about the whole week ahead.",
    by: "Nina L. — Vancouver, Canada",
    imgSrc: "https://cdn.21st.dev/assets/mirror/b7/b78f8c42f62ae61f6ebe5c4e79f3af27f49dc05c4f366d2be599d1e14318be86.jpg"
  },
  {
    tempId: 9,
    testimonial: "I'm a nurse. I work 12-hour shifts. I thought any kind of routine was impossible for me. Three months in and I'm sleeping better than I have in years.",
    by: "Tanya O. — Manchester, UK",
    imgSrc: "https://cdn.21st.dev/assets/mirror/45/45482403ecbfd4f326c4388ca63773a1fbe79376213456ae0f422eea1a94d589.jpg"
  },
  {
    tempId: 10,
    testimonial: "My husband asked what was different about me. I told him I started writing things down. He looked at the pink sheet on the fridge and said 'that thing?' Yes. That thing.",
    by: "Emma H. — Dublin, Ireland",
    imgSrc: "https://cdn.21st.dev/assets/mirror/42/420c64d5e90b2ff05fc182e3d8c3df40076440cb684d927efed247855775ea9b.jpg"
  },
  {
    tempId: 11,
    testimonial: "I've spent probably $300 on fitness apps over the past 3 years. This was $27. It's the only one I actually opened every single day.",
    by: "Zoe A. — Seattle, WA",
    imgSrc: "https://cdn.21st.dev/assets/mirror/be/be1b67757a13dfec4386e8627236a7194c6bcfb07502dbd82f727f6ccac46bcd.jpg"
  },
  {
    tempId: 12,
    testimonial: "Day 1 I felt ridiculous filling in a pink chart. Day 21 I started putting it on my to-do list. By day 60 it was the first thing I did every morning.",
    by: "Lucy P. — Sydney, Australia",
    imgSrc: "https://cdn.21st.dev/assets/mirror/b4/b48ca5758f41e9f512fa264f7fde87a13a6149e94230111e949268b4780279cc.jpg"
  },
  {
    tempId: 13,
    testimonial: "I'm not athletic. I don't like gyms. I just wanted to drink more water and stop skipping sleep. This tracker made that feel achievable without making me feel like a failure.",
    by: "Kezia M. — Atlanta, GA",
    imgSrc: "https://cdn.21st.dev/assets/mirror/84/84811a44ccc64660055b77ed641ae6617edb60314efcdbc945cb91fc27aed815.jpg"
  },
  {
    tempId: 14,
    testimonial: "The hydration tracker alone was worth it. I had no idea I was drinking under a litre a day. After 30 days of tracking it, I naturally hit 2.5L without even thinking.",
    by: "Sophie G. — Bristol, UK",
    imgSrc: "https://cdn.21st.dev/assets/mirror/f9/f99a76bee7ebb41a84ba63d00499ed81588a17e0f1bba07aa22d2c4e4d187a82.jpg"
  },
  {
    tempId: 15,
    testimonial: "45 years old, two knee surgeries, and I finally have a movement routine I can actually sustain. No one is more surprised than me.",
    by: "Karen D. — Denver, CO",
    imgSrc: "https://cdn.21st.dev/assets/mirror/67/6734807085015478f70dc12be3669b8127939ec42f17aa6d995fe317d19971cc.jpg"
  },
  {
    tempId: 16,
    testimonial: "I used it through a brutal work month — 60-hour weeks, zero gym time. Still tracked my sleep, still did my walks. Ended the month feeling in control. That was new.",
    by: "Olivia C. — New York, NY",
    imgSrc: "https://cdn.21st.dev/assets/mirror/fc/fc2eed941aa10f3a40167ab44dd42877152ec653470854dda5ffb04c048e05e6.jpg"
  },
  {
    tempId: 17,
    testimonial: "The first week I only filled in 4 out of 7 days. By week three I was annoyed if I missed even one. Something about the empty box bothers you in a good way.",
    by: "Amber J. — Brisbane, Australia",
    imgSrc: "https://cdn.21st.dev/assets/mirror/5e/5ee78465c1b6b6f94dcbf8dccba352fd9f4a3238557b93875887c55c72901927.jpg"
  },
  {
    tempId: 18,
    testimonial: "The pink annoyed me at first. I'm not a pink person. Now I think that's part of why it works — it doesn't look like punishment. It looks like something I chose.",
    by: "Maya T. — Minneapolis, MN",
    imgSrc: "https://cdn.21st.dev/assets/mirror/7e/7ee949310d79d96acce5be2c19f2e5b5b6f75e1c26e45a4cc3c38da71f83899c.jpg"
  },
  {
    tempId: 19,
    testimonial: "90 days done. Already reprinted and starting round two. Haven't done that with anything, ever.",
    by: "Fatima A. — Calgary, Canada",
    imgSrc: "https://cdn.21st.dev/assets/mirror/90/90489abb7c7d9823bf203548ba1ed0ea5060abedcac65390a393c171f241eac7.jpg"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize
}) => {
  const isCenter = position === 0;
  // Kartu yang jauh di luar viewport disembunyikan: hemat paint + lompatan
  // wrap-around ujung-ke-ujung jadi tidak terlihat (tidak ikut animasi).
  const isFar = Math.abs(position) > 4;

  return (
    <div
      onClick={() => handleMove(position)}
      aria-hidden={isFar}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-5 sm:p-8 transition-all duration-500 ease-out will-change-transform",
        isCenter
          ? "z-10 bg-primary text-primary-foreground border-primary"
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `translate(-50%, -50%) translate3d(${(cardSize / 1.5) * position}px, ${isCenter ? -65 : position % 2 ? 15 : -15}px, 0) rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)`,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent",
        // Kartu jauh: langsung sembunyi tanpa transisi (tidak kelihatan karena di luar overflow-hidden)
        ...(isFar
          ? {
              opacity: 0,
              visibility: "hidden" as const,
              pointerEvents: "none" as const,
              transition: "none",
            }
          : { opacity: 1 }),
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="mb-4 h-14 w-12 bg-muted object-cover object-top"
        style={{
          width: 48,
          maxWidth: 48,
          minWidth: 48,
          height: 56,
          minHeight: 56,
          display: "block",
          flexShrink: 0,
          objectFit: "cover",
          objectPosition: "top",
          boxShadow: "3px 3px 0px hsl(var(--background))"
        }}
      />
      <h3 className={cn(
        "text-[15px] leading-snug sm:text-xl font-medium break-words line-clamp-6 sm:line-clamp-none",
        isCenter ? "text-primary-foreground" : "text-foreground"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8 text-xs sm:text-sm italic truncate",
        isCenter ? "text-primary-foreground/80" : "text-muted-foreground"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);
  // Kunci selama animasi 450ms biar klik cepat tidak menumpuk & patah-patah
  const animLock = useRef(false);

  const handleMove = useCallback((steps: number) => {
    if (!steps || animLock.current) return;
    animLock.current = true;
    window.setTimeout(() => {
      animLock.current = false;
    }, 450);
    // Key stabil (tempId asli 0..19 tidak diubah) supaya React me-reuse DOM
    // dan transisi transform bisa jalan mulus, bukan remount.
    setTestimonialsList((prev) => {
      const newList = [...prev];
      if (steps > 0) {
        for (let i = steps; i > 0; i--) {
          const item = newList.shift();
          if (!item) break;
          newList.push(item);
        }
      } else {
        for (let i = steps; i < 0; i++) {
          const item = newList.pop();
          if (!item) break;
          newList.unshift(item);
        }
      }
      return newList;
    });
  }, []);

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-white h-[470px] sm:h-[520px]"
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          type="button"
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center text-2xl transition-colors cursor-pointer",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center text-2xl transition-colors cursor-pointer",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default StaggerTestimonials;
