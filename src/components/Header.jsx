import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const linkCls = ({ isActive }) => ["px-3 py-1.5 rounded-md text-sm", isActive ? "bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/30" : "text-zinc-300 hover:bg-zinc-900"].join(" ");

    return (
        <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-black/70 backdrop-blur">
            <div className="mx-auto max-w-6xl px-4">
                <div className="flex h-16 items-center justify-between">
                    <Link to="/" className="font-semibold tracking-wider">
                        TOOL FAN-MADE PAGE
                    </Link>
                    <nav className="flex items-center gap-2">
                        <NavLink to="/" className={linkCls} end>
                            Home
                        </NavLink>
                        <NavLink to="/discography" className={linkCls}>
                            Discography
                        </NavLink>
                        <NavLink to="/members" className={linkCls}>
                            Members
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
}
