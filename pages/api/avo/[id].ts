import { NextApiRequest, NextApiResponse } from "next";
import DB from '@database'

 const oneAvo = async (request: NextApiRequest, response: NextApiResponse) => {
    const db = new DB()

    const id = request.query.id

    const avo = await db.getById(id as string)
    
    response.status(200).json(avo)

 }

 export default oneAvo