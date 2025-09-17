export default function Footer() {
    return (
        <footer className="mt-24 border-t border-zinc-900/60 bg-black/60">
            <div className="mx-auto max-w-6xl px-4 py-10">
                <p className="text-sm text-zinc-400">© {new Date().getFullYear()} Fan-made project</p>
            </div>
        </footer>
    );
}
