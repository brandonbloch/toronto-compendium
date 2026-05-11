import { defaultUserData } from '@/db/default.ts';
import type { UserData } from '@/db/schema.ts';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';

export function useUserData() {
  const queryClient = useQueryClient();

  const { status, error, data: userData } = useQuery<UserData>({
    queryKey: ['userData'],
    initialData: defaultUserData,
    queryFn: async () => {
      const response = await fetch('/api/data');
      if (response.ok) {
        return await response.json();
      }
      throw new Error(await response.text());
    },
  });

  type MutationArgs = {
    entryId: string,
    completed: boolean,
    image?: File,
  };

  const mutation = useMutation({
    mutationFn: async ({ entryId, completed, image }: MutationArgs) => {
      const body = new FormData();
      body.set('completed', completed ? 'true' : 'false');
      if (image) {
        body.set('image', image);
      }
      await fetch(`/api/entry/${entryId}`, {
        method: 'POST',
        body,
      });
    },
    onSuccess: async () => {
      // Invalidate and refetch
      await queryClient.invalidateQueries({ queryKey: ['userData'] });
    },
  });

  const updateEntryCompletion = useCallback((entryId: string, completed: boolean, image?: File) => {
    mutation.mutate({
      entryId,
      completed,
      image,
    });
  }, [mutation]);

  return useMemo(() => ({
    status,
    error,
    userData,
    updateEntryCompletion,
  }), [error, status, updateEntryCompletion, userData]);
}
