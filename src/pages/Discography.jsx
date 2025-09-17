import { useEffect, useMemo, useState } from "react";
import { fetchJSON } from "../utils/fetchDB";
import { buildSpotifySearchUrl } from "../utils/spotify";
import { getAllCovers } from "../utils/covers";
import AlbumCard from "../components/AlbumCard";
import Modal from "../components/Modal";

export default function Discography() {
    const [data, setData] = useState({ artist: "Tool", albums: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selected, setSelected] = useState(null);
    const [q] = useState("");

    const coverMap = useMemo(() => getAllCovers(), []);

    useEffect(() => {
        let mounted = true;
        fetchJSON("/db/albums.json")
            .then((json) => {
                if (mounted) {
                    setData(json);
                    setLoading(false);
                }
            })
            .catch((e) => {
                if (mounted) {
                    setError(e.message);
                    setLoading(false);
                }
            });
        return () => {
            mounted = false;
        };
    }, []);

    const albums = useMemo(() => data.albums.map((a) => ({ ...a, coverUrl: coverMap[String(a.id).toLowerCase()] || "" })), [data.albums, coverMap]);

    const filtered = useMemo(() => {
        const s = q.trim().toLowerCase();
        if (!s) return albums;
        return albums.filter((a) => a.title.toLowerCase().includes(s) || String(a.year).includes(s));
    }, [albums, q]);

    if (loading)
        return (
            <Section>
                <p>Loading…</p>
            </Section>
        );
    if (error)
        return (
            <Section>
                <p className="text-red-400">{error}</p>
            </Section>
        );

    return (
        <Section>
            <header className="mb-6">
                <h1 className="text-3xl font-semibold tracking-tight">Discography</h1>
                <p className="mt-1 text-zinc-400">Click any album to view tracks. Each track opens on Spotify.</p>
            </header>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((album) => (
                    <AlbumCard key={album.id} album={album} onOpen={setSelected} />
                ))}
            </div>

            <Modal open={!!selected} onClose={() => setSelected(null)}>
                {selected && (
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-zinc-400">{selected.year}</p>
                                <h3 className="text-2xl font-semibold tracking-tight">{selected.title}</h3>
                            </div>
                            {selected.coverUrl ? <img src={selected.coverUrl} alt={`${selected.title} cover`} className="h-16 w-16 rounded-md object-cover" /> : <div className={`h-16 w-16 rounded-md bg-gradient-to-br ${selected.coverGradient}`} />}
                        </div>
                        <div>
                            <h4 className="text-sm font-medium uppercase tracking-wider text-zinc-300">Tracks</h4>
                            <ol className="mt-2 space-y-1 text-sm text-zinc-200">
                                {selected.tracks.map((t) => {
                                    const url = t.spotifyUrl || buildSpotifySearchUrl({ artist: data.artist, track: t.title, album: selected.title });
                                    return (
                                        <li key={t.n} className="flex items-center gap-2">
                                            <span className="text-xs text-zinc-500 w-6">{String(t.n).padStart(2, "0")}</span>
                                            <a href={url} target="_blank" rel="noreferrer" className="text-amber-300 hover:underline">
                                                {t.title}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ol>
                        </div>
                    </div>
                )}
            </Modal>
        </Section>
    );
}

function Section({ children }) {
    return <section className="mx-auto max-w-6xl px-4 py-12">{children}</section>;
}
