import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const megaMenus = {
    platform: {
      sections: [
        {
          title: 'Infrastructure',
          links: [
            { name: 'Network Architecture', href: '#' },
            { name: 'Data Pipeline Systems', href: '#' },
            { name: 'Security Framework', href: '#' },
            { name: 'Velocity Engine', href: '#' },
          ],
        },
        {
          title: 'Integration',
          links: [
            { name: 'API Gateway', href: '#' },
            { name: 'Real-time Sync', href: '#' },
            { name: 'Legacy Bridge', href: '#' },
            { name: 'Cloud Connectors', href: '#' },
          ],
        },
        {
          title: 'Analytics',
          links: [
            { name: 'Performance Metrics', href: '#' },
            { name: 'Predictive Models', href: '#' },
            { name: 'System Diagnostics', href: '#' },
            { name: 'Optimization Tools', href: '#' },
          ],
        },
      ],
    },
    expertise: {
      sections: [
        {
          title: 'Industries',
          links: [
            { name: 'Financial Services', href: '#' },
            { name: 'Healthcare Systems', href: '#' },
            { name: 'Manufacturing', href: '#' },
            { name: 'Energy Infrastructure', href: '#' },
          ],
        },
        {
          title: 'Services',
          links: [
            { name: 'System Architecture', href: '#' },
            { name: 'Infrastructure Audit', href: '#' },
            { name: 'Migration Planning', href: '#' },
            { name: 'Performance Tuning', href: '#' },
          ],
        },
        {
          title: 'Resources',
          links: [
            { name: 'Case Studies', href: '#' },
            { name: 'Technical Papers', href: '#' },
            { name: 'Documentation', href: '#' },
            { name: 'Best Practices', href: '#' },
          ],
        },
      ],
    },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-obsidian/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-headline text-stark-white tracking-wider">
              NABDX
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              className="text-foreground hover:text-velocity-blue transition-colors duration-fast font-medium text-sm tracking-wide"
              onMouseEnter={() => setMegaMenuOpen('platform')}
              onMouseLeave={() => setMegaMenuOpen(null)}
            >
              PLATFORM
            </button>
            <button
              className="text-foreground hover:text-velocity-blue transition-colors duration-fast font-medium text-sm tracking-wide"
              onMouseEnter={() => setMegaMenuOpen('expertise')}
              onMouseLeave={() => setMegaMenuOpen(null)}
            >
              EXPERTISE
            </button>
            <a
              href="#insights"
              className="text-foreground hover:text-velocity-blue transition-colors duration-fast font-medium text-sm tracking-wide"
            >
              INSIGHTS
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-velocity-blue transition-colors duration-fast font-medium text-sm tracking-wide"
            >
              CONTACT
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="cta-elite px-6 py-2 text-sm font-semibold tracking-wide">
              <span>ACCESS PLATFORM</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mega Menu */}
      {megaMenuOpen && (
        <div
          className="absolute top-16 left-0 right-0 bg-obsidian-light border-b border-border shadow-2xl"
          onMouseEnter={() => setMegaMenuOpen(megaMenuOpen)}
          onMouseLeave={() => setMegaMenuOpen(null)}
        >
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-3 gap-8">
              {megaMenus[megaMenuOpen as keyof typeof megaMenus].sections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-velocity-blue font-headline text-sm mb-4 tracking-wider">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-foreground hover:text-velocity-blue transition-colors duration-fast text-sm block py-1 relative group"
                        >
                          {link.name}
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-velocity-blue group-hover:w-full transition-all duration-standard"></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-obsidian-light border-b border-border">
          <div className="px-6 py-4 space-y-4">
            <a href="#platform" className="block text-foreground hover:text-velocity-blue transition-colors text-sm font-medium tracking-wide">
              PLATFORM
            </a>
            <a href="#expertise" className="block text-foreground hover:text-velocity-blue transition-colors text-sm font-medium tracking-wide">
              EXPERTISE
            </a>
            <a href="#insights" className="block text-foreground hover:text-velocity-blue transition-colors text-sm font-medium tracking-wide">
              INSIGHTS
            </a>
            <a href="#contact" className="block text-foreground hover:text-velocity-blue transition-colors text-sm font-medium tracking-wide">
              CONTACT
            </a>
            <Button className="cta-elite w-full mt-4">
              <span>ACCESS PLATFORM</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
