import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: string;
  name: string;
  age: number;
};

export default function handler(_req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ id: '27', name: 'Hadi Bakhshi', age: 24 });
}
