export function initGoogleAnalytics() {
  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) { (window as any).dataLayer.push(args); }
  gtag('js', new Date());

  gtag('config', 'G-JLPYHYGM30');
}
