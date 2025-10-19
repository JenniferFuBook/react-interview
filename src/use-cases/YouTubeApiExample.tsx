import { useEffect, useRef } from 'react';

// Extend the Window interface to include onYouTubeIframeAPIReady
declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
  }
}

const YouTubeApiExample = () => {
  // Create a reference to the DOM element where the YouTube player will be inserted
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically load the YouTube iframe Player API script asynchronously to avoid 
    // blocking page rendering and ensure the API is available before creating the player
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';

    // Get the first script tag in the document and insert the YouTube API script before it
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode!.insertBefore(tag, firstScriptTag);

    // This function will be called automatically by the YouTube API once the script is loaded,
    // and the callback will initialize the YouTube player with the specified settings
    window.onYouTubeIframeAPIReady = () => {
      // Double-check that playerRef.current is available before proceeding
      if (playerRef.current) {
        // Create a new YouTube player instance using the referenced DOM element
        new window.YT.Player(playerRef.current, {
          // Set the height and width of the video player
          height: '487', // default: 390
          width: '640', // default: 640
          // Specify the video to be embedded by its unique ID
          videoId: 'm8IEpBuXKjk',
          events: {
            onReady: (event) => // The onReady event is triggered when the player is ready
              event.target.playVideo(),
          },
          playerVars: { // Set player options such as autoplay and mute for a better user experience
            autoplay: YT.AutoPlay?.AutoPlay ?? 1, // Automatically start playback
            mute: YT.Mute?.Muted ?? 1, // Start playback muted
          },
        });
      }
    };

    // Cleanup function to remove the YouTube API script and callback when the component unmounts
    return () => {
      delete window.onYouTubeIframeAPIReady;
    };
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div>
      <h1>YouTube API Demo</h1>
      {/* <iframe> (and video player) will replace this <div> tag */}
      <div ref={playerRef}></div>
    </div>
  );
};

export default YouTubeApiExample;
