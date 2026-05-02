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

  const userData = useMemo(() => data ?? defaultUserData, [data]);

  const mutation = useMutation({
    mutationFn: async (newUserData: UserData) => {
      await fetch('/api/data', {
        method: 'POST',
        body: JSON.stringify(newUserData),
      });
    },
    onSuccess: async () => {
      // Invalidate and refetch
      await queryClient.invalidateQueries({ queryKey: ['userData'] });
    },
  });

  const updateEntryCompletion = useCallback((entryId: string, completion: boolean) => {
    const updatedUserData = {
      ...userData,
      completion: {
        ...userData.completion,
      },
    };
    updatedUserData.completion[entryId] = completion;
    mutation.mutate(updatedUserData);
  }, [mutation, userData]);

  return useMemo(() => ({
    status,
    error,
    userData,
    updateEntryCompletion,
  }), [error, status, updateEntryCompletion, userData]);
}
