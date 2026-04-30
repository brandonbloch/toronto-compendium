import type { PropsWithChildren } from 'react';
import { useLocation } from 'react-router';

export function Compendium({ children }: PropsWithChildren) {
  const location = useLocation();

  return (
    <div className="compendium">
      <div className="compendium-header">
        {location.pathname !== '/' && (
          <a href="/" className="compendium-back-button">←</a>
        )}
        <h1>Toronto Compendium</h1>
      </div>
      {children}
    </div>
  );
}
