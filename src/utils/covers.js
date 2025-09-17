export function getCoverUrlById(id) {
    const key = String(id).toLowerCase().trim();
    const meta = document.querySelector(`meta[name="album:cover:${key}"]`);
    if (meta?.content) return meta.content;
    if (window.ALBUM_COVERS?.[key]) return window.ALBUM_COVERS[key];
    return "";
}

export function getAllCovers() {
    const map = {};
    document.querySelectorAll('meta[name^="album:cover:"]').forEach((m) => {
        const key = m.getAttribute("name").split(":").pop().toLowerCase().trim();
        map[key] = m.getAttribute("content") || "";
    });
    if (window.ALBUM_COVERS) {
        Object.entries(window.ALBUM_COVERS).forEach(([id, url]) => {
            const key = String(id).toLowerCase().trim();
            if (!map[key]) map[key] = url;
        });
    }
    return map;
}
