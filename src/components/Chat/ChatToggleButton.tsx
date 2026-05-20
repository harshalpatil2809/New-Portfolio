interface Props {
    onClick: () => void;
}

export default function ChatToggleButton({
    onClick,
}: Props) {
    return (
        <button
            onClick={onClick}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur-2xl px-5 py-4 shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:scale-105 transition-all duration-300 cursor-pointer"
        >
            <div className="absolute inset-0 bg-linear-to-r from-gray-600/20 to-gray-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative flex items-center gap-3">

                <div className="relative flex items-center justify-center">
                    <div className="absolute h-3 w-3 rounded-full bg-gray-400 animate-ping" />
                    <div className="relative h-3 w-3 rounded-full bg-gray-400" />
                </div>

                <div className="text-left">
                    <p className="text-white text-sm font-semibold tracking-wide">
                        Ask Harshal AI
                    </p>
                </div>
            </div>
        </button>
    );
}