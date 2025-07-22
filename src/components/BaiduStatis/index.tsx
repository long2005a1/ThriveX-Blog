'use client';

import Script from 'next/script';

export default () => {
  return (
    <Script
      dangerouslySetInnerHTML={{
        __html: `
              var _hmt = _hmt || [];
              (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?57d52cf371d544144ca221b1754afcfd";
                var s = document.getElementsByTagName("script")[0]; 
                s.parentNode.insertBefore(hm, s);
              })();
            `,
      }}
    />
  );
};
