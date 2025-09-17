import Logo from "../components/Logo";

export default function Home() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-12">
            <div className="mb-6">
                <Logo />
                <p className="mt-2 text-xs text-zinc-500">Fan-made educational page</p>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight">Tool — Fan-Made Page</h1>
            <div className="mt-4 grid gap-4">
                <p className="text-zinc-300">Formed in Los Angeles in the early 1990s, Tool blend progressive and alternative metal with visual art and long-form composition. Their sound emphasizes polyrhythms, odd time signatures, and meticulous production.</p>
                <p className="text-zinc-300">
                    Across albums like <em>Ænima</em>, <em>Lateralus</em>, <em>10,000 Days</em>, and
                    <em> Fear Inoculum</em>, the band evolved from heavy alt-metal roots to immersive, meditative pieces, pairing intricate musicianship with distinctive visual direction.
                </p>
            </div>
        </section>
    );
}
