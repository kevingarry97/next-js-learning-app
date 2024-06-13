import Script from 'next/script'
import React from 'react';

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script async src='https://www.googletagmanager.com/gtag/js?id=process.env.GOOGLE_KEY' />
      <Script id='google-analytics'>
        {`window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments)
        }
        gtag('js', new Date())

        gtag('config', process.env.GOOGLE_KEY)`}
      </Script>
    </>
  )
}

export default GoogleAnalyticsScript
