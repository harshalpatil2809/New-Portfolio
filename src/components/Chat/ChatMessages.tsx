import { Message } from './PortfolioChat';

interface Props {
    messages: Message[];
    isLoading: boolean;
    chatEndRef: React.RefObject<HTMLDivElement | null>;
}

export default function ChatMessages({
    messages,
    isLoading,
    chatEndRef,
}: Props) {
    return (
        <div onWheel={(e) => e.stopPropagation()} className="relative z-10 flex-1 overflow-y-auto overscroll-contain px-4 py-5 space-y-5 bg-[#050505]">

            {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center">

                    <div className="w-20 h-20 rounded-3xl bg-linear-to-br from-blue-500/20 to-cyan-400/10 border border-blue-500/20 flex items-center justify-center mb-6 backdrop-blur-xl">
                        <span className="text-3xl">🤖</span>
                    </div>

                    <h2 className="text-white text-lg font-semibold">
                        Ask Anything About Harshal
                    </h2>

                    <p className="text-sm text-zinc-500 mt-3 leading-relaxed max-w-70">
                        Projects, backend systems, architecture decisions,
                        AI integrations, Django APIs, deployments and more.
                    </p>

                
                </div>
            )}

            {messages.map((msg) => (
                <div
                    key={msg.id}
                    className={`flex ${msg.role === 'user'
                            ? 'justify-end'
                            : 'justify-start'
                        }`}
                >
                    <div
                        className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-relaxed shadow-lg border ${msg.role === 'user'
                                ? 'bg-linear-to-r from-gray-600 to-white text-black rounded-br-md'
                                : 'bg-white/3 text-zinc-200 border-white/10 rounded-bl-md backdrop-blur-xl'
                            }`}
                    >
                        <p className="whitespace-pre-wrap">
                            {msg.text}
                        </p>
                    </div>
                </div>
            ))}

            {isLoading && (
                <div className="flex justify-start">
                    <div className="bg-white/3 border border-white/10 rounded-3xl rounded-bl-md px-4 py-3 backdrop-blur-xl">

                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-blue-400 animate-bounce" />
                            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.2s]" />
                            <span className="h-2 w-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:-0.4s]" />

                            <p className="text-xs text-zinc-400 ml-2">
                                Thinking deeply...
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <div ref={chatEndRef} />
        </div>
    );
}