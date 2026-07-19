import { useState, useRef, useEffect } from "react";

type Line = { type: "system" | "user" | "response"; text: string };

const CONTACT_EMAIL = "agbeninemmanuel@gmail.com";
// WhatsApp click-to-chat needs the number in international format,
// digits only, no "+", no spaces (e.g. 2347061595214 for +234 706 159 5214).
const CONTACT_NUMBER = "447350158806";

const HELP_TEXT = [
  "Available commands:",
  "  /message  — Send me a message",
  "  /hi       — Say hello",
  "  /hire     — Let's work together",
  "  /clear    — Clear terminal",
  "  /help     — Show this menu",
];

const Contact = () => {
  const [lines, setLines] = useState<Line[]>([
    { type: "system", text: "Welcome to the terminal. Type /help to see commands." },
  ]);
  const [input, setInput] = useState("");
  const [messageMode, setMessageMode] = useState(false);
  const [sending, setSending] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [lines]);

  const addLines = (newLines: Line[]) => setLines((prev) => [...prev, ...newLines]);

  // No backend, no third-party API, no API key: wa.me is WhatsApp's
  // own click-to-chat deep link, not a service you sign up for. It
  // opens WhatsApp (app on mobile, WhatsApp Web on desktop) with the
  // message pre-filled — the visitor still taps send themselves.
  const sendMessage = async (message: string) => {
    setSending(true);

    let copied = false;
    try {
      await navigator.clipboard.writeText(message);
      copied = true;
    } catch {
      // Clipboard can fail on insecure contexts or denied permission — ignore.
    }

    const waLink = `https://wa.me/${CONTACT_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waLink, "_blank", "noopener,noreferrer");

    addLines([
      { type: "response", text: "Opening WhatsApp with your message pre-filled — just hit send. ✓" },
      ...(copied
        ? [{ type: "system" as const, text: "Also copied your message to the clipboard, just in case." }]
        : []),
      { type: "system", text: `If nothing opened: message me directly at +${CONTACT_NUMBER.replace(/(\d{3})(\d{3})(\d{3})(\d{4})/, "$1 $2 $3 $4")}` },
    ]);
    setSending(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd || sending) return;

    if (messageMode) {
      const userLine: Line = { type: "user", text: cmd };
      addLines([userLine, { type: "system", text: "Sending..." }]);
      setMessageMode(false);
      setInput("");
      await sendMessage(cmd);
      return;
    }

    const userLine: Line = { type: "user", text: cmd };

    switch (cmd.toLowerCase()) {
      case "/help":
        addLines([userLine, ...HELP_TEXT.map((t) => ({ type: "system" as const, text: t }))]);
        break;
      case "/hi":
        addLines([
          userLine,
          { type: "response", text: "Hey! 👋 Thanks for stopping by. Type /message to drop me a note." },
        ]);
        break;
      case "/hire":
        addLines([
          userLine,
          { type: "response", text: "Exciting! I'm currently available for contract and full-time roles." },
          { type: "response", text: `→ WhatsApp: +${CONTACT_NUMBER}` },
          { type: "response", text: "→ Or type /message to tell me about your project." },
        ]);
        break;
      case "/message":
        addLines([
          userLine,
          { type: "system", text: "Enter your message below. Press Enter to send." },
        ]);
        setMessageMode(true);
        break;
      case "/clear":
        setLines([{ type: "system", text: "Terminal cleared. Type /help for commands." }]);
        setInput("");
        return;
      default:
        addLines([
          userLine,
          { type: "system", text: `Command not found: "${cmd}". Type /help for available commands.` },
        ]);
    }
    setInput("");
  };

  return (
    <section className="px-8 md:px-16 py-24 max-w-[1440px] mx-auto border-t border-border">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-sans font-medium text-2xl md:text-[2.5rem] leading-tight tracking-[-0.01em]">
          Connect
        </h2>
        <span className="h-px flex-1 bg-border" />
        <span className="font-mono text-xs text-secondary uppercase tracking-widest">Terminal</span>
      </div>

      <div
        className="bg-foreground border border-border max-w-2xl mx-auto overflow-hidden"
        style={{ borderRadius: "var(--radius)" }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-primary-foreground/10">
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div className="w-3 h-3 rounded-full bg-primary/40" />
          <div className="w-3 h-3 rounded-full bg-primary/60" />
          <span className="ml-3 font-mono text-[10px] text-primary-foreground/40 uppercase tracking-widest">
            contact@portfolio ~ %
          </span>
        </div>

        {/* Terminal body */}
        <div
          ref={scrollRef}
          className="p-6 h-[320px] overflow-y-auto"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="space-y-1.5">
            {lines.map((line, i) => (
              <div key={i} className="font-mono text-sm leading-relaxed">
                {line.type === "user" ? (
                  <span>
                    <span className="text-primary/80">→ </span>
                    <span className="text-primary-foreground">{line.text}</span>
                  </span>
                ) : line.type === "response" ? (
                  <span className="text-primary/90">{line.text}</span>
                ) : (
                  <span className="text-primary-foreground/50">{line.text}</span>
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2">
            <span className="font-mono text-sm text-primary/80">→</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={sending}
              className="flex-1 bg-transparent font-mono text-sm text-primary-foreground outline-none placeholder:text-primary-foreground/30 disabled:opacity-50"
              placeholder={messageMode ? "Type your message..." : "Type a command..."}
              autoFocus
            />
          </form>
        </div>
      </div>

      <p className="text-center font-mono text-xs text-secondary mt-6">
        Or just send me a mail at{" "}
        <a
          href={`mail::to ${CONTACT_EMAIL}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-4 hover:text-foreground transition-colors"
        >
          {CONTACT_EMAIL}
        </a>
      </p>
    </section>
  );
};

export default Contact;