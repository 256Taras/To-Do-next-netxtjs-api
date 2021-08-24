import {NextApiRequest, NextApiResponse} from "next";

import {connectToDataBase} from "../../../../db/connection";
import {TodoController} from "../../../../api/v1/controllers/todo-controller";
import {withCors} from "../../../../api/v1/midelware/with-cors";

async function handler(req: NextApiRequest, res: NextApiResponse) {

    await connectToDataBase()

    const todoController = new TodoController()
    switch (req.method) {
        case 'PUT':
            return await todoController.update(req, res);
        case 'DELETE':
            return await todoController.delete(req, res);
        case 'POST':
            return await todoController.create(req, res);
        case 'GET':
            return await todoController.getAll(req, res)
        default:
            console.log({status: `Method ${req.method} Not Allowed`})
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }


}


export default withCors(handler);

