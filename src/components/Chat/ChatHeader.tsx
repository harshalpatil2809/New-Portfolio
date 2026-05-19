// components/chat/ChatHeader.tsx

interface Props {
    onClose: () => void;
}

export default function ChatHeader({ onClose }: Props) {
    return (
        <div className="relative z-10 border-b border-white/10 px-5 py-4 bg-black/40 backdrop-blur-xl">
            <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                    <div className="relative">
                        <div className="h-11 w-11 rounded-2xl bg-linear-to-br from-gray-900 via-gray-400 to-gray-900 flex items-center justify-center">
                            <span className="text-black font-black text-sm">
                                HP
                            </span>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-white font-semibold tracking-wide text-sm">
                            Harshal AI
                        </h2>
                    </div>
                </div>

                <button
                    onClick={onClose}
                    className="h-9 w-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}