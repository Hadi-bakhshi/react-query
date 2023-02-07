import { IPerson } from '@/lib/interfaces/IPerson';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<IPerson | Error>): void {
  const {
    query: { id },
  } = req;

  if (typeof id === 'string') {
    console.log(`Getting person by id: ${id}`);
    res.status(200).json({ id, name: 'Hadi Bakhshi', age: 25 });
  } else {
    res.status(500).send(new Error('id is not of the correct type'));
  }
}
