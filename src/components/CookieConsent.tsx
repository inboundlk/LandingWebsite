import { useEffect } from 'react';
import UniversalCookie from 'universal-cookie';

declare global {
  interface Window {
    cookieconsent: any;
  }
}

const CookieConsent = () => {
  const cookies = new UniversalCookie();

  useEffect(() => {
    // Load TermsFeed Cookie Consent script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.termsfeed.com/public/cookie-consent/4.2.0/cookie-consent.js';
    script.charset = 'UTF-8';
    script.async = true;
    
    script.onload = () => {
      if (window.cookieconsent) {
        // Initialize cookie consent after script loads
        window.cookieconsent.run({
          notice_banner_type: "simple",
          consent_type: "express",
          palette: "dark",
          language: "en",
          page_load_consent_levels: ["strictly-necessary"],
          notice_banner_reject_button_hide: false,
          preferences_center_close_button_hide: false,
          page_refresh_confirmation_buttons: false,
          website_name: "Inbound AI Tech"
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <noscript>
        Free cookie consent management tool by{' '}
        <a href="https://www.termsfeed.com/" rel="nofollow">TermsFeed</a>
      </noscript>
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="#"
          id="open_preferences_center"
          className="
            text-white/80 hover:text-white
            text-sm px-4 py-2
            bg-white/10 hover:bg-white/20
            rounded-lg
            transition-all duration-300
            inline-block
          "
          onClick={(e) => {
            e.preventDefault();
            if (window.cookieconsent) {
              window.cookieconsent.openPreferences();
            }
          }}
        >
          Update cookies preferences
        </a>
      </div>
    </>
  );
};

export default CookieConsent; 