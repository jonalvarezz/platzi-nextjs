import DB from '@database'
import { IncomingMessage, ServerResponse } from 'http'

const allAvos = async (req: IncomingMessage, res: ServerResponse) => {
  const db = new DB()
  const allData = await db.getAll()

  res.statusCode = 200
  res.setHeader('Content-type', 'application/json')

  res.end(
    JSON.stringify({
      length: allData.length,
      data: allData,
    })
  )
}

export default allAvos
