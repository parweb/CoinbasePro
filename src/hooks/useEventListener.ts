import { useRef, useEffect } from 'react';

export default (eventName, handler) => {
  const isClient = typeof window === 'object';

  const savedHandler = useRef(e => {});

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const isSupported = window && window.addEventListener;
    if (!isSupported) return;

    const eventListener = event => savedHandler.current(event);

    window.addEventListener(eventName, eventListener);

    return () => {
      window.removeEventListener(eventName, eventListener);
    };
  }, [eventName]);
};
