import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
    id: number;
    text: string;
    sender: "user" | "bot";
    time: string;
}

const quickReplies = [
    "Book a ride",
    "Fleet options",
    "Service areas",
    "Contact us",
];

const botResponses: Record<string, string> = {
    "book a ride": "You can book online at our Book Now page or call us directly at +1 (703) 868-1811. We're available 24/7!",
    "fleet options": "We offer Luxury Sedans, Executive SUVs, Sprinter Vans, Stretch Limos, Mini Buses, and Motor Coaches. Which interests you?",
    "service areas": "We proudly serve Washington DC, Maryland, and Virginia — including airport transfers to DCA, IAD, and BWI.",
    "contact us": "📞 +1 (703) 868-1811\n📧 contact@trustluxurytransportation.com\n📍 7918 Jones Branch Dr, McLean, VA 22102",
};

const getBot = (msg: string): string => {
    const lower = msg.toLowerCase();
    for (const [key, val] of Object.entries(botResponses)) {
        if (lower.includes(key)) return val;
    }
    return "Thank you for reaching out! For immediate assistance, please call us at +1 (703) 868-1811 or select one of the quick options below.";
};

const now = () =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const ChatBot = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 0, text: "Welcome to Trust Luxury Transportation! How can we assist you today?", sender: "bot", time: now() },
    ]);
    const [input, setInput] = useState("");
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const send = (text: string) => {
        if (!text.trim()) return;
        const userMsg: Message = { id: Date.now(), text, sender: "user", time: now() };
        setMessages((p) => [...p, userMsg]);
        setInput("");
        setTimeout(() => {
            setMessages((p) => [
                ...p,
                { id: Date.now() + 1, text: getBot(text), sender: "bot", time: now() },
            ]);
        }, 600);
    };

    return (
        <>
            {/* FAB */}
            <motion.button
                onClick={() => setOpen((o) => !o)}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Open chat"
            >
                <AnimatePresence mode="wait">
                    {open ? (
                        <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                            <X size={22} className="bg-gold-gradient" />
                        </motion.span>
                    ) : (
                        <motion.span key="chat" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ duration: 0.15 }}>
                            <MessageCircle size={22} className="bg-gold-gradient" />
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] max-h-[70vh] flex flex-col rounded-2xl border border-border overflow-hidden shadow-2xl shadow-black/40"
                        style={{ background: "hsl(var(--card))" }}
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                    >
                        {/* Header */}
                        <div className="bg-gold-gradient px-4 py-3 flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                                <MessageCircle size={18} className="text-primary" />
                            </div>
                            <div className="flex-1">
                                <p className="text-primary font-heading font-semibold text-sm tracking-wide">Trust Concierge</p>
                                <p className="text-primary/70 text-xs">Online • 24/7 Support</p>
                            </div>
                            <button onClick={() => setOpen(false)} className="text-primary/70 hover:text-primary" aria-label="Close chat">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px] max-h-[40vh]">
                            {messages.map((m) => (
                                <div key={m.id} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                                    <div
                                        className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${m.sender === "user"
                                            ? "bg-primary text-white rounded-br-sm"
                                            : "bg-muted text-foreground rounded-bl-sm"
                                            }`}
                                    >
                                        {m.text}
                                        <span className={`block text-[10px] mt-1 ${m.sender === "user" ? "text-primary/60" : "text-muted-foreground"}`}>
                                            {m.time}
                                        </span>
                                    </div>
                                </div>
                            ))}
                            <div ref={bottomRef} />
                        </div>

                        {/* Quick Replies */}
                        <div className="px-4 pb-2 flex flex-wrap gap-2">
                            {quickReplies.map((q) => (
                                <button
                                    key={q}
                                    onClick={() => send(q)}
                                    className="text-xs px-3 py-1.5 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-colors font-medium"
                                >
                                    {q}
                                </button>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="p-3 border-t border-border flex items-center gap-2">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && send(input)}
                                placeholder="Type a message..."
                                className="flex-1 bg-muted text-foreground text-sm rounded-full px-4 py-2.5 outline-none placeholder:text-muted-foreground focus:ring-1 focus:ring-primary/50"
                            />
                            <motion.button
                                onClick={() => send(input)}
                                className="w-9 h-9 rounded-full bg-gold-gradient flex items-center justify-center shrink-0"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Send message"
                            >
                                <Send size={16} className="text-primary" />
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatBot;
