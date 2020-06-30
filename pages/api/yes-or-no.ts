import { NextApiResponse, NextApiRequest } from 'next'
import enablePublicAccess from '@cors'

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  // Generally, you would not want this in your apps.
  // See more in 'cors.js'
  await enablePublicAccess(req, res)

  const answer = Math.round(Math.random()) ? 'yes' : 'no'

  res.status(200).json({
    data: answer,
    error: null,
  })
}

export default allAvos
