import type { IPerson } from '@/lib/interfaces/IPerson';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

const getPersonById = async (id: string | string[] | undefined): Promise<IPerson> => {
  if (typeof id === 'string') {
    const res = await fetch(`/api/person/${id}`);
    if (res.ok) {
      return res.json();
    }
    throw new Error('Oops something went wrong');
  }
  throw new Error('Invalid id');
};

const PersonPage: NextPage = () => {
  const {
    query: { id },
  } = useRouter();
  const { isLoading, isError, error, data } = useQuery<IPerson, Error>(['person', id], () => getPersonById(id), { enabled: !!id });
  if (isLoading) {
    return (
      <div>
        <p>Loading ...</p>
      </div>
    );
  }

  if (isError) return <p>Sorry there is something wrong - {error?.message}</p>;

  return <div>PersonPage</div>;
};

export default PersonPage;
