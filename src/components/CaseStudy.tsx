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
            ["Project", "Fetal-State Classification — CTG Dataset"],
            ["Year", "2025"],
            ["Role", "Machine Learning Engineer"],
            ["Type", "Independent project"],
            ["Stack", "Python · Scikit-learn · SMOTE"],
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
              Cardiotocography (CTG) data classifies fetal state from patterns in fetal heart rate and uterine
              contractions, but the dataset is heavily imbalanced — the "at-risk" classes that matter most
              clinically are rare relative to the normal class. A naive pipeline scores well on accuracy while
              quietly failing to catch the minority cases, and it's easy to leak information from validation
              into training without realizing it. The goal was a pipeline that stayed leakage-free end to end
              and was evaluated on metrics that actually reflect minority-class performance.
            </p>
          </div>

          <div className="border border-border overflow-hidden" style={{ borderRadius: "var(--radius)" }}>
            <img
              src="https://images.unsplash.com/photo-1758691462668-046fd85ceac9?w=1200&q=80"
              alt="Clinician reviewing patient monitoring data"
              className="w-full aspect-[16/9] object-cover"
              style={{ outline: "1px solid rgba(0,0,0,0.05)", outlineOffset: "-1px" }}
            />
          </div>

          <div>
            <h3 className="font-sans font-medium text-xl mb-4">The Process</h3>
            <p className="text-secondary leading-relaxed max-w-[65ch] mb-6">
              I split the data with stratified sampling before touching anything else, so class ratios stayed
              consistent across train, validation and test sets and no information from held-out folds ever
              reached preprocessing or feature selection. SMOTE was applied only inside the training folds
              during cross-validation — never on validation or test data — to oversample the minority classes
              without inflating the model's apparent performance. Model selection and tuning were driven by
              class-sensitive metrics (recall and F1 on the minority classes) rather than raw accuracy, since
              accuracy alone rewards ignoring the cases that matter most.
            </p>
            <div className="bg-card border border-border p-6 font-mono text-sm leading-relaxed" style={{ borderRadius: "var(--radius)" }}>
              <p className="text-secondary mb-2"># Simplified pipeline</p>
              <p>data → stratified_split(train, val, test)</p>
              <p>train_fold → SMOTE(minority_classes)</p>
              <p>cross_validate(model, scoring="recall_minority")</p>
              <p>best_model → evaluate(test, leakage_free=True)</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="border border-border overflow-hidden" style={{ borderRadius: "var(--radius)" }}>
              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&q=80"
                alt="Python code on screen"
                className="w-full aspect-square object-cover"
                style={{ outline: "1px solid rgba(0,0,0,0.05)", outlineOffset: "-1px" }}
              />
            </div>
            <div className="border border-border overflow-hidden" style={{ borderRadius: "var(--radius)" }}>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
                alt="Model evaluation charts"
                className="w-full aspect-square object-cover"
                style={{ outline: "1px solid rgba(0,0,0,0.05)", outlineOffset: "-1px" }}
              />
            </div>
          </div>

          <div>
            <h3 className="font-sans font-medium text-xl mb-4">The Outcome</h3>
            <div className="grid grid-cols-3 gap-6">
              {[
                ["0.83", "Minority-class recall"],
                ["3-class", "Fetal state output"],
                ["Leak-free", "Stratified pipeline"],
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