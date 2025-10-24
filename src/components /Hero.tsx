import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import heroNetwork from '@/assets/hero-network.jpg';

const Hero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const headline = headlineRef.current;
    if (!headline) return;

    const words = headline.textContent?.split(' ') || [];
    headline.innerHTML = words
      .map((word, i) => `<span class="word-animate" style="animation-delay: ${i * 0.15}s">${word}</span>`)
      .join(' ');
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroNetwork}
          alt="Infrastructure Network"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/50 via-obsidian/70 to-obsidian"></div>
      </div>

      {/* Animated Velocity Lines */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="velocity-line"
            style={{
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 1.6}s`,
              width: '200%',
            }}
          />
        ))}
      </div>

      {/* Data Grid Pattern */}
      <div className="absolute inset-0 z-10 data-grid opacity-20"></div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <h1
          ref={headlineRef}
          className="text-6xl md:text-8xl font-headline text-stark-white mb-6 leading-tight"
        >
          THE INFRASTRUCTURAL STANDARD
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-body font-light">
          Precision-engineered systems operating at velocity.
          <br />
          The inevitable successor to traditional infrastructure.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Button className="cta-elite px-8 py-6 text-base">
            <span>INITIALIZE SYSTEM</span>
          </Button>
          <Button
            variant="outline"
            className="px-8 py-6 text-base border-velocity-blue text-velocity-blue hover:bg-velocity-blue/10"
          >
            SYSTEM OVERVIEW
          </Button>
        </div>

        {/* System Metrics */}
        <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
          <div className="glow-border p-6 bg-obsidian-light/50 backdrop-blur-sm">
            <div className="text-4xl font-headline text-velocity-blue mb-2">99.99%</div>
            <div className="text-sm text-muted-foreground tracking-wide">UPTIME SLA</div>
          </div>
          <div className="glow-border p-6 bg-obsidian-light/50 backdrop-blur-sm">
            <div className="text-4xl font-headline text-velocity-blue mb-2">&lt;10ms</div>
            <div className="text-sm text-muted-foreground tracking-wide">LATENCY</div>
          </div>
          <div className="glow-border p-6 bg-obsidian-light/50 backdrop-blur-sm">
            <div className="text-4xl font-headline text-velocity-blue mb-2">∞</div>
            <div className="text-sm text-muted-foreground tracking-wide">SCALABILITY</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
