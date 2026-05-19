// components/chat/ChatInput.tsx

interface Props {
    input: string;
    setInput: (value: string) => void;
    handleSubmit: (e: React.FormEvent) => void;
    isLoading: boolean;
}

export default function ChatInput({
    input,
    setInput,
    handleSubmit,
    isLoading,
}: Props) {
    return (
        <form
            onSubmit={handleSubmit}
            className="relative z-10 border-t border-white/10 p-4 bg-black/30 backdrop-blur-xl"
        >
            <div className="flex items-center gap-3">

                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about projects, backend systems, AI..."
                    className="flex-1 h-12 rounded-2xl bg-white/[0.04] border border-white/10 px-4 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-blue-500/40 focus:ring-4 focus:ring-blue-500/10 transition-all"
                />

                <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="h-12 px-5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-medium hover:scale-[1.03] active:scale-95 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                    Send
                </button>
            </div>
        </form>
    );
}