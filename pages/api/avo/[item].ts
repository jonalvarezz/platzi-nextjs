import DB from '@database'
import { NextApiResponse, NextApiRequest } from 'next'

const singleItem = async (req: NextApiRequest, res: NextApiResponse) => {
  const itemId = req.query.item as string
  const db = new DB()

  const singleAvo: TProduct | null = await db.getById(itemId)

  if (singleAvo) {
    res.statusCode = singleAvo ? 200 : 500
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify(singleAvo as TProduct))
  }
}

export default singleItem
