import { ArrowUpRight, Calendar } from 'lucide-react';
import infrastructureDiagram from '@/assets/infrastructure-diagram.jpg';
import dataArchitecture from '@/assets/data-architecture.jpg';

const articles = [
  {
    id: 1,
    title: 'The Future of Network Infrastructure',
    category: 'TECHNICAL ANALYSIS',
    date: '2025.10.20',
    summary: 'How next-generation protocols are reshaping enterprise architecture at velocities previously thought impossible.',
    image: infrastructureDiagram,
  },
  {
    id: 2,
    title: 'Precision Engineering at Scale',
    category: 'CASE STUDY',
    date: '2025.10.15',
    summary: 'A detailed examination of our deployment architecture supporting 10M+ concurrent operations with zero degradation.',
    image: dataArchitecture,
  },
  {
    id: 3,
    title: 'Security in the Velocity Era',
    category: 'WHITEPAPER',
    date: '2025.10.10',
    summary: 'Implementing military-grade security frameworks without compromising operational speed or system responsiveness.',
    image: infrastructureDiagram,
  },
  {
    id: 4,
    title: 'Real-Time Data Synchronization',
    category: 'TECHNICAL DEEP DIVE',
    date: '2025.10.05',
    summary: 'Achieving sub-millisecond data consistency across globally distributed infrastructure networks.',
    image: dataArchitecture,
  },
  {
    id: 5,
    title: 'Infrastructure as Competitive Advantage',
    category: 'STRATEGY',
    date: '2025.09.28',
    summary: 'Why organizations treating infrastructure as a strategic asset outperform competitors by 10x margins.',
    image: infrastructureDiagram,
  },
  {
    id: 6,
    title: 'The Cost of Legacy Systems',
    category: 'INDUSTRY REPORT',
    date: '2025.09.20',
    summary: 'Quantifying the hidden operational debt accumulating in organizations resisting infrastructural evolution.',
    image: dataArchitecture,
  },
];

const InsightsGrid = () => {
  return (
    <section id="insights" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-5xl font-headline text-stark-white mb-4">
            SYSTEM INSIGHTS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Technical analysis, strategic frameworks, and infrastructural intelligence from the field.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-card border border-border hover-lift glow-border cursor-pointer overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-obsidian-light relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-standard group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category & Date */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-velocity-blue font-headline tracking-wider">
                    {article.category}
                  </span>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar size={12} className="mr-1" />
                    {article.date}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-headline text-stark-white mb-3 group-hover:text-velocity-blue transition-colors duration-fast">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {article.summary}
                </p>

                {/* Read More Link */}
                <div className="flex items-center text-velocity-blue text-sm font-medium group-hover:gap-2 transition-all duration-fast">
                  <span>READ ANALYSIS</span>
                  <ArrowUpRight size={16} className="transition-transform duration-fast group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 border border-velocity-blue text-velocity-blue hover:bg-velocity-blue/10 transition-colors duration-fast font-headline text-sm tracking-wider">
            ACCESS FULL ARCHIVE
          </button>
        </div>
      </div>
    </section>
  );
};

export default InsightsGrid;
