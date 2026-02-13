"use client"
/**
 * Credits / Colophon — the last main section. Who’s on the team, who reviewed the video,
 * special thanks, and a link to your feedback form. In publishing, "colophon" is the
 * bit at the end of a book that says who made it; same idea here. Replace the placeholder
 * names and the form URL with your own.
 */
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ColophonSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  /**
   * Scroll animations: header slides in, then the grid columns stagger in.
   * Each ref is used by GSAP to know what to animate and when (based on scroll position).
   */
  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      /* Header slide in */
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

      /* Grid columns (Team) fade up with a small stagger. */
      if (gridRef.current) {
        const columns = gridRef.current.querySelectorAll(":scope > div")
        gsap.from(columns, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="colophon"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      {/* Section header — id="colophon" is used by the side nav for "CREDITS". */}
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">05 / Colophon</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">CREDITS</h2>
      </div>

      {/* Multi-column layout — Team only. */}
      <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12">
        {/* Team — replace "joe doe" with your team member names. */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Team</h4>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://www.linkedin.com/in/s-kaushik-rao-33336a289/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-foreground hover:text-accent transition-colors duration-200"
              >
                S Kaushik Rao
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Prominent LinkedIn Button */}
      <div className="mt-24 text-center">
        <a
          href="https://www.linkedin.com/in/s-kaushik-rao-33336a289/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 font-mono text-sm text-foreground bg-accent/20 hover:bg-accent/30 border border-accent hover:border-accent/80 px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <span className="uppercase tracking-widest">Connect on LinkedIn</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
      </div>
    </section>
  )
}
