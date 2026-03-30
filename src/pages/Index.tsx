import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { journeys, people, advice, categoryLabels, getPersonById, type AdviceCategory } from "@/data/content";
import { ArrowRight, Sparkles, BookOpen } from "lucide-react";
import CategoryIcon from "@/components/CategoryIcon";
import PersonAvatar from "@/components/PersonAvatar";

const Index = () => {
  const categories = Object.keys(categoryLabels) as AdviceCategory[];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="container mx-auto px-4 pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6 animate-fade-in-up stagger-1">
            <Sparkles className="w-3.5 h-3.5 animate-sparkle-pulse" />
            Honest stories from real builders
          </div>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.1] tracking-tight text-foreground mb-5 animate-fade-in-up stagger-2">
            Learn from indie hackers
            <br />
            <span className="text-primary italic">who've been there.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg animate-fade-in-up stagger-3">
            Case studies, hard-won lessons, and practical advice from our community. Every tip is extracted from a real journey — no generic fluff.
          </p>
        </div>
      </section>

      {/* Journeys */}
      <section className="container mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl text-foreground flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Journeys
          </h2>
          <Link to="/journeys" className="group text-sm text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
            View all <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {journeys.map((journey, i) => {
            const person = getPersonById(journey.personId);
            return (
              <Link
                key={journey.id}
                to={`/journey/${journey.id}`}
                className="group block rounded-xl border border-border/80 bg-card p-6 hover:shadow-[var(--shadow-card-hover)] hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <PersonAvatar name={person?.name || ""} size="md" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{person?.name}</p>
                    <p className="text-xs text-muted-foreground">{journey.date}</p>
                  </div>
                </div>
                <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors mb-2 leading-snug">
                  {journey.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {journey.subtitle}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[11px] text-primary font-medium bg-primary/8 px-2 py-0.5 rounded-full">
                    {journey.adviceIds.length} tips extracted
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-primary opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Advice by Category */}
      <section className="container mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl text-foreground">Advice by Category</h2>
          <Link to="/advice" className="group text-sm text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
            Browse all <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {categories.map((cat) => {
            const count = advice.filter((a) => a.category === cat).length;
            return (
              <Link
                key={cat}
                to={`/advice?category=${cat}`}
                className="group flex items-center gap-3 rounded-xl border border-border/80 bg-card px-5 py-4 hover:border-primary/30 hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <CategoryIcon category={cat} className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{categoryLabels[cat]}</p>
                  <p className="text-xs text-muted-foreground">{count} tips</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured advice */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="font-display text-2xl text-foreground mb-6">Latest Advice</h2>
        <div className="space-y-0 divide-y divide-border/60">
          {advice.slice(0, 5).map((tip) => {
            const person = getPersonById(tip.personId);
            return (
              <Link
                key={tip.id}
                to={`/advice/${tip.id}`}
                className="group block py-5 hover:pl-2 transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                    {categoryLabels[tip.category]}
                  </span>
                  <span className="text-muted-foreground/40">·</span>
                  <span className="text-xs text-muted-foreground">
                    from {person?.name}'s journey
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                    {tip.title}
                  </h3>
                  <ArrowRight className="w-3.5 h-3.5 text-primary opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 shrink-0 ml-4" />
                </div>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{tip.content}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-16">
        <div className="group rounded-2xl bg-card border border-border p-8 md:p-12 text-center hover:border-primary/20 hover:shadow-[var(--shadow-card-hover)] transition-all duration-500">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-3">
            Got a story to share?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            Every tip on this site comes from a real journey. If you've built something, failed at something, or learned something the hard way — your story belongs here.
          </p>
          <span className="inline-flex items-center gap-2 text-primary font-medium cursor-pointer group-hover:gap-3 transition-all duration-300">
            Share your journey <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
