import { useState } from "react";

export default function AlbumCard({ album, onOpen }) {
    const [imgError, setImgError] = useState(false);
    const hasCover = Boolean(album.coverUrl) && !imgError;

    return (
        <div className="rounded-xl border border-zinc-900 bg-black overflow-hidden">
            {hasCover ? <img src={album.coverUrl} alt={`${album.title} cover`} className="block h-48 w-full object-cover" loading="lazy" onError={() => setImgError(true)} /> : <div className={`h-48 w-full bg-gradient-to-br ${album.coverGradient}`} />}
            <div className="flex items-start justify-between p-4">
                <div>
                    <div className="text-xs text-zinc-400">{album.year}</div>
                    <div className="text-lg font-medium tracking-tight">{album.title}</div>
                </div>
                <button className="text-sm text-amber-300 hover:underline" onClick={() => onOpen(album)}>
                    Tracks
                </button>
            </div>
        </div>
    );
}
