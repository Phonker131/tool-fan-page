export function buildSpotifySearchUrl({ artist, track, album }) {
    const q = `${artist} ${track}${album ? " " + album : ""}`;
    return `https://open.spotify.com/search/${encodeURIComponent(q)}`;
}
