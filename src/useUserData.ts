import { defaultUserData } from '@/db/default.ts';
import type { UserData } from '@/db/schema.ts';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';

export function useUserData() {
  const queryClient = useQueryClient();

  const { status, error, data } = useQuery<UserData>({
    queryKey: ['userData'],
    queryFn: async () => {
      const response = await fetch('/api/data');
      return await response.json();
    },
  });

  const userData = data ?? defaultUserData;

  const mutation = useMutation({
    mutationFn: async (variables: {
      entryId: string,
      completed: boolean,
      image?: File,
    }) => {
      const body = new FormData();
      body.set('completed', variables.completed ? 'true' : 'false');
      if (variables.image) {
        body.set('image', variables.image);
      }
      await fetch(`/api/entry/${variables.entryId}`, {
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
