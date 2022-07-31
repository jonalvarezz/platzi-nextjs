// import allData from "@app/database/data"

import { IncomingMessage, ServerResponse } from 'http'

const allAvos = async (req: IncomingMessage, res: ServerResponse) => {
  res.end(JSON.stringify({ message: 'Hi' }))
}

export default allAvos
