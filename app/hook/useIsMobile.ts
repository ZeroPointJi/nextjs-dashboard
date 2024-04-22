import { useState, useEffect } from 'react';
import { debounce } from 'lodash';

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = debounce(() => {
      if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }, 1000);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
}
