export async function fetchJSON(path) {
    const res = await fetch(path);
    if (!res.ok) throw new Error("Failed to load " + path);
    return res.json();
}
