import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: any;
  }
}

const TawkToChat = () => {
  useEffect(() => {
    // Add Tawk.to script
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    
    s1.async = true;
    s1.src = 'https://embed.tawk.to/67ac11d33a842732607daa0a/1ijs2b8m6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    }

    // Cleanup
    return () => {
      if (s1 && s1.parentNode) {
        s1.parentNode.removeChild(s1);
      }
    };
  }, []);

  return null;
};

export default TawkToChat; 