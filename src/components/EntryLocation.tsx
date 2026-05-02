import { type CompendiumLocation, locationDetails } from '@/data/locations';

export interface EntryLocationProps {
  location: CompendiumLocation | undefined;
}

function formatCoords([degNorth, degEast]: [number, number]) {
  const northsouth = degNorth < 0 ? `${-degNorth}°S` : `${degNorth}°N`;
  const eastwest = degEast < 0 ? `${-degEast}°W` : `${degEast}°E`;
  return `${northsouth} ${eastwest}`;
}

export function EntryLocation({ location }: EntryLocationProps) {
  if (!location) {
    return (
      <p>???</p>
    );
  }

  const details = locationDetails[location];

  return (
    <>
      <p>{details.name}</p>
      {details.address && (
        <p>{details.address}</p>
      )}
      {details.coords && (
        <p>{formatCoords(details.coords)}</p>
      )}
    </>
  );
}
