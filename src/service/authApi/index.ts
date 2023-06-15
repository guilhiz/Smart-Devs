import { api } from '../api';

interface RegisterProps {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  accountId?: number | null;
}

export const registerUser = async (params: RegisterProps) => {
  console.log({ params });
  const { data } = await api.post('/api/register', params);

  return data;
};
