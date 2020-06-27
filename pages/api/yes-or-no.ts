import { IncomingMessage, ServerResponse } from 'http'
import { NextApiResponse, NextApiRequest } from 'next'

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  const answer = Math.round(Math.random()) ? 'yes' : 'no'

  res.status(200).json({ data: answer, error: null })
}

export default allAvos
