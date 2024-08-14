"use client";
import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-3YRZWBPBBH"></Script>
      
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-3YRZWBPBBH');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;