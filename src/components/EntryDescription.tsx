import { useMemo } from 'react';

export interface EntryDescriptionProps {
  description: string | undefined;
}

export function EntryDescription({ description = '' }: EntryDescriptionProps) {
  const lines = useMemo(() => description.split(/\n/g), [description]);

  return lines.map((line, index) => (
    <p key={index}>{line}</p>
  ));
}
