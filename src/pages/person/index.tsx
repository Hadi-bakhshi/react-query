import { useQuery, UseQueryResult } from 'react-query';
import type { NextPage } from 'next';
import type { IPerson } from '@/lib/interfaces/IPerson';

const fetchPerson = async (): Promise<IPerson> => {
  const res = await fetch('/api/person');
  if (res.ok) {
    return res.json();
  }
  throw new Error('Network Res Got Error');
};

const PersonPage: NextPage = () => {
  //   const { isError, isLoading, error, data }: UseQueryResult<IPerson, Error> = useQuery<IPerson, Error, IPerson, string>('person', fetchPerson, {
  //     staleTime: 5000,
  //   });
  const { isError, isLoading, error, data }: UseQueryResult<IPerson, Error> = useQuery<IPerson, Error, IPerson, string>('person', fetchPerson);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  if (isError) return <p>Oops, Something went wrong -- {error.message}</p>;

  return (
    <>
      <p>{data?.id}</p>
      <p>{data?.name}</p>
      <p>{data?.age}</p>
    </>
  );
};

export default PersonPage;
