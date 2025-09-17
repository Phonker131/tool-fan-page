import { useEffect } from "react";

export default function Modal({ open, onClose, children }) {
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 grid place-items-center">
            <div className="absolute inset-0 bg-black/70" onClick={onClose} />
            <div className="relative z-10 w-[min(92vw,700px)] rounded-2xl border border-zinc-900 bg-zinc-950 p-6 shadow-2xl">
                <button onClick={onClose} className="absolute right-3 top-3 rounded border border-zinc-800 px-2 py-1 text-xs text-zinc-400">
                    ESC
                </button>
                {children}
            </div>
        </div>
    );
}
