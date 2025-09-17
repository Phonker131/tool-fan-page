import { useEffect, useState } from "react";
import { fetchJSON } from "../utils/fetchDB";

export default function Members() {
    const [data, setData] = useState({ band: "Tool", members: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let mounted = true;
        fetchJSON("/db/members.json")
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
            <h1 className="text-3xl font-semibold tracking-tight">Members</h1>
            <ul className="mt-6 grid gap-4">
                {data.members.map((m) => (
                    <li key={m.name} className="rounded-xl border border-zinc-900 bg-black p-5">
                        <div className="text-sm text-zinc-500">
                            {m.role} • {m.yearsActive}
                        </div>
                        <div className="text-lg font-medium tracking-wide">{m.name}</div>
                        {m.bio && <p className="text-sm text-zinc-300 mt-1">{m.bio}</p>}

                        {m.style && (
                            <p className="mt-3 text-sm text-zinc-200">
                                <span className="text-zinc-500">Style & Writing:</span> {m.style}
                            </p>
                        )}

                        {Array.isArray(m.writing) && m.writing.length > 0 && <SectionList title="Writing" items={m.writing} />}
                        {Array.isArray(m.playing) && m.playing.length > 0 && <SectionList title="Playing" items={m.playing} />}
                        {m.performance && (
                            <p className="mt-2 text-sm text-zinc-400">
                                <span className="text-zinc-500">Performance:</span> {m.performance}
                            </p>
                        )}
                        {Array.isArray(m.techniques) && m.techniques.length > 0 && <TagList title="Techniques" items={m.techniques} />}
                        {Array.isArray(m.notable) && m.notable.length > 0 && <SectionList title="Notable" items={m.notable} />}
                    </li>
                ))}
            </ul>
        </Section>
    );
}

function Section({ children }) {
    return <section className="mx-auto max-w-6xl px-4 py-12">{children}</section>;
}

function SectionList({ title, items }) {
    return (
        <div className="mt-3">
            <div className="text-xs uppercase tracking-widest text-zinc-500">{title}</div>
            <ul className="mt-1 list-disc pl-5 text-sm text-zinc-300 space-y-1">
                {items.map((it, i) => (
                    <li key={i}>{it}</li>
                ))}
            </ul>
        </div>
    );
}

function TagList({ title, items }) {
    return (
        <div className="mt-3">
            <div className="text-xs uppercase tracking-widest text-zinc-500">{title}</div>
            <div className="mt-1 flex flex-wrap gap-2">
                {items.map((it, i) => (
                    <span key={i} className="rounded-md border border-zinc-800 px-2 py-1 text-xs text-zinc-300">
                        {it}
                    </span>
                ))}
            </div>
        </div>
    );
}
