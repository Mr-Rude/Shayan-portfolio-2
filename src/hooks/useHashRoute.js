import { useCallback, useEffect, useState } from 'react';

function parse() {
  const [view = 'home', param = null] = window.location.hash.replace(/^#\/?/, '').split('/');
  return { view: view || 'home', param };
}

/**
 * Hash router matching the original site: #/home, #/home/about, #/portfolio, #/project/:id.
 * `key` increments on every navigation, including clicks on a link to the current hash,
 * so views can re-run their scroll behaviour (e.g. "Back to top" while already home).
 */
export default function useHashRoute() {
  const [route, setRoute] = useState(() => ({ ...parse(), key: 0 }));

  const refresh = useCallback(() => setRoute((r) => ({ ...parse(), key: r.key + 1 })), []);

  useEffect(() => {
    if (!window.location.hash) window.location.replace('#/home');

    const onHashChange = () => refresh();
    // A link to the hash we're already on fires no hashchange, so route manually.
    const onClick = (e) => {
      const a = e.target.closest?.('a[href^="#/"]');
      if (a && a.hash === window.location.hash) {
        e.preventDefault();
        refresh();
      }
    };

    window.addEventListener('hashchange', onHashChange);
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('hashchange', onHashChange);
      document.removeEventListener('click', onClick);
    };
  }, [refresh]);

  const navigate = useCallback(
    (hash) => {
      if (window.location.hash === hash) refresh();
      else window.location.hash = hash;
    },
    [refresh]
  );

  return { ...route, navigate };
}
