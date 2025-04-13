// This example is contained in a single file for simplicity.
// In a real-world application, you would split the components into separate files.

import { useState, useEffect } from 'react';

interface FaviconUpdaterProps {
  faviconUrl: string;
}

const FaviconUpdater: React.FC<FaviconUpdaterProps> = ({ faviconUrl }) => {
  useEffect(() => {
    // Find the existing favicon link element
    let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");

    // If link does not exist, create a new one
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }

    // Update the href attribute with the new favicon URL
    link.href = faviconUrl;
  }, [faviconUrl]); 

  return null; // This component does not render anything
}

const FaviconExample: React.FC = () => {
  const [favicon, setFavicon] = useState<string>('/vite.svg');
  const changeFavicon = (newFavicon: string) => {
    setFavicon(newFavicon);
  };

  return (
    <>
      <FaviconUpdater faviconUrl={favicon} />
      <h1>My App</h1>
      <button onClick={() => changeFavicon('/vite.svg')}> {/* Click to use Vite favicon */}
        Change to Vite favicon
      </button>
      <button onClick={() => changeFavicon('/src/assets/react.svg')}> {/* Click to use React favicon */}
        Change to React favicon
      </button>
      <button onClick={() => // Click to use Google doc favicon
        changeFavicon('https://ssl.gstatic.com/docs/documents/images/kix-favicon-2023q4.ico')}>
        Change to Google doc favicon
      </button>
    </>
  );
}

export default FaviconExample;