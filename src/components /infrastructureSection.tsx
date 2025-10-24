import { Network, Shield, Zap, Database } from 'lucide-react';

const capabilities = [
  {
    icon: Network,
    title: 'Network Architecture',
    description: 'Enterprise-grade topology designed for unlimited scale and zero-downtime operations.',
  },
  {
    icon: Zap,
    title: 'Velocity Engine',
    description: 'Sub-millisecond processing with real-time data synchronization across distributed systems.',
  },
  {
    icon: Shield,
    title: 'Security Framework',
    description: 'Military-grade encryption and access control with continuous threat detection and mitigation.',
  },
  {
    icon: Database,
    title: 'Data Pipeline',
    description: 'Intelligent routing and transformation of data streams at petabyte scale with guaranteed consistency.',
  },
];

const InfrastructureSection = () => {
  return (
    <section className="py-20 bg-obsidian-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 data-grid opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-headline text-stark-white mb-4">
            CORE INFRASTRUCTURE
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Precision-engineered systems operating at the edge of what's technically possible.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="group glow-border bg-card/50 backdrop-blur-sm p-8 hover-lift"
            >
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-velocity-blue/10 border border-velocity-blue/30 flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-standard">
                    <capability.icon className="w-7 h-7 text-velocity-blue" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-headline text-stark-white mb-3 group-hover:text-velocity-blue transition-colors duration-fast">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="cta-elite px-8 py-4 text-sm">
            <span>EXPLORE TECHNICAL SPECIFICATIONS</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
