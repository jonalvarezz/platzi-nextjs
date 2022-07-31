import DB from '@database'
import { NextApiResponse, NextApiRequest } from 'next'

const singleItem = async (req: NextApiRequest, res: NextApiResponse) => {
  const itemId = req.query.item
  const db = new DB()

  const singleAvo: string = await db.getById(itemId)

  res.statusCode = singleAvo ? 200 : 500
  res.setHeader('Content-type', 'application/json')
  res.end(JSON.stringify(singleAvo))
}

export default singleItem
