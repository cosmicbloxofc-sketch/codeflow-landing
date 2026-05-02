export default function VimeoPlayer({ videoId, title }) {
  return (
    <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        className="absolute top-0 left-0 w-full h-full"
        title={title}
      />
    </div>
  );
}
