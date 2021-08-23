import {getRepository, Repository} from "typeorm";

import {NextApiRequest, NextApiResponse} from "next";
import {IToDo} from "../../../lib/interfaces/to-do.interface";
import {ToDoEntity} from "../entities/todo.entity";

export class TodoController {
    constructor(private todoRepository: Repository<ToDoEntity> = getRepository("todo")) {
    }

    public async getAll(req: NextApiRequest, res: NextApiResponse) {

        const todos = await this.todoRepository
            .createQueryBuilder('t')
            .orderBy('t.id', 'DESC')
            .getMany()

        res.send(todos)
    }


    public async create(req: NextApiRequest, res: NextApiResponse): Promise<void> {
        const title = req.body as IToDo
        const todo = this.todoRepository.create(title)
        await this.todoRepository.save(todo)
        res.status(201).json(todo);

    }

    public async delete(req: NextApiRequest, res: NextApiResponse): Promise<void> {
        const id = Number(req.query.params)

        const deleted = await this.todoRepository.delete(id)

        if (deleted.raw[0]) {
            res.status(200).json({message: 'success'});
        }
        //exeption
    }

    public async update(req: NextApiRequest, res: NextApiResponse): Promise<void> {
        const id = Number(req.query.params)
        const data = req.body as Omit<IToDo, 'id'>
        const updated = await this.todoRepository.update({id}, data);
        if (updated.raw[0]) {
            res.status(200).json({message: 'success'});

        }
        //exeption
    }


}

