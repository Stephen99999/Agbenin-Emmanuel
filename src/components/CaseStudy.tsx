const CaseStudy = () => {
  return (
    <section className="px-8 md:px-16 py-24 max-w-[1440px] mx-auto border-t border-border">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-sans font-medium text-2xl md:text-[2.5rem] leading-tight tracking-[-0.01em]">
          Case Study
        </h2>
        <span className="h-px flex-1 bg-border" />
        <span className="font-mono text-xs text-secondary uppercase tracking-widest">Deep Dive</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
        {/* Sticky Sidebar */}
        <aside className="lg:sticky lg:top-8 lg:self-start space-y-6">
          {[
            ["Project", "Conversational RAG"],
            ["Year", "2024"],
            ["Role", "Lead Engineer"],
            ["Duration", "6 months"],
            ["Stack", "Python · LangChain · React"],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-secondary mb-1">{label}</p>
              <p className="text-sm">{value}</p>
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <div className="space-y-12">
          <div>
            <h3 className="font-sans font-medium text-xl mb-4">The Challenge</h3>
            <p className="text-secondary leading-relaxed max-w-[65ch]">
              Enterprise customers needed a way to query thousands of internal documents—PDFs, Slack threads,
              Confluence pages—using natural language. Existing search was keyword-based and returned too many
              irrelevant results. The goal was sub-2-second responses with source citations.
            </p>
          </div>

          <div className="border border-border overflow-hidden" style={{ borderRadius: "var(--radius)" }}>
            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80"
              alt="System architecture diagram"
              className="w-full aspect-[16/9] object-cover"
              style={{ outline: "1px solid rgba(0,0,0,0.05)", outlineOffset: "-1px" }}
            />
          </div>

          <div>
            <h3 className="font-sans font-medium text-xl mb-4">The Process</h3>
            <p className="text-secondary leading-relaxed max-w-[65ch] mb-6">
              I designed a multi-stage retrieval pipeline: semantic chunking → vector embedding → hybrid
              search (dense + sparse) → re-ranking → LLM synthesis. Each stage was independently testable
              and swappable.
            </p>
            <div className="bg-card border border-border p-6 font-mono text-sm leading-relaxed" style={{ borderRadius: "var(--radius)" }}>
              <p className="text-secondary mb-2"># Simplified pipeline</p>
              <p>docs → chunk(512 tokens) → embed(ada-002)</p>
              <p>query → embed → search(pinecone, k=20)</p>
              <p>results → rerank(cohere) → top_5</p>
              <p>context + query → gpt-4 → response + citations</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="border border-border overflow-hidden" style={{ borderRadius: "var(--radius)" }}>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
                alt="Dashboard metrics"
                className="w-full aspect-square object-cover"
                style={{ outline: "1px solid rgba(0,0,0,0.05)", outlineOffset: "-1px" }}
              />
            </div>
            <div className="border border-border overflow-hidden" style={{ borderRadius: "var(--radius)" }}>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
                alt="Query interface"
                className="w-full aspect-square object-cover"
                style={{ outline: "1px solid rgba(0,0,0,0.05)", outlineOffset: "-1px" }}
              />
            </div>
          </div>

          <div>
            <h3 className="font-sans font-medium text-xl mb-4">The Outcome</h3>
            <div className="grid grid-cols-3 gap-6">
              {[
                ["1.4s", "Avg response time"],
                ["94%", "Relevance score"],
                ["12k", "Daily queries"],
              ].map(([stat, label]) => (
                <div key={label} className="text-center">
                  <p className="font-serif text-4xl md:text-5xl text-foreground mb-1" style={{ fontVariantNumeric: "tabular-nums" }}>{stat}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-secondary">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
