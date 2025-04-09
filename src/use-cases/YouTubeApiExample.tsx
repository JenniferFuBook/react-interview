import { useEffect, useRef } from 'react';

// Extend the Window interface to include onYouTubeIframeAPIReady
declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
  }
}

const YouTubeApiExample: React.FC = () => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the YouTube IFrame Player API code asynchronously
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode!.insertBefore(tag, firstScriptTag);

    // This function will be executed as soon as the player API code downloads,
    // which will create an <iframe> and a YouTube player that will autoplay a video
    window.onYouTubeIframeAPIReady = () => {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      if (playerRef.current) {
        new window.YT.Player(playerRef.current, {
          // Define video size
          height: '487', // default: 390
          width: '640', // default: 640
          // Define specific Video ID
          videoId: 'm8IEpBuXKjk',
          events: {
            onReady: (event) => // Play the video when it is ready
              event.target.playVideo(),
          },
          playerVars: { // Set autoplay and mute the video
            autoplay: YT.AutoPlay?.AutoPlay ?? 1, // in case enum is not available at runtime
            mute: YT.Mute?.Muted ?? 1, // in case enum is not available at runtime
          },
        });
      }
    };

    return () => {
      delete window.onYouTubeIframeAPIReady;
    };
  }, []);

  return (
    <div>
      <h1>YouTube API Demo</h1>
      {/* The <iframe> (and video player) will replace this <div> tag */}
      <div ref={playerRef}></div>
    </div>
  );
};

export default YouTubeApiExample;
