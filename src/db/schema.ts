interface EntryData {
  timestamp: string; // when the entry was completed, ISO 8601 format
  thumbhash: string;
}

export interface UserData {
  completion: Record<string, EntryData>; // keys are compendium entry IDs
}
