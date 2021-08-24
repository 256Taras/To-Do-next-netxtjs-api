import {getRepository, Like, Repository} from "typeorm";

import {NextApiRequest, NextApiResponse} from "next";
import {IToDo} from "../../../lib/interfaces/to-do.interface";
import {ToDoEntity} from "../entities/todo.entity";

export class TodoController {
    constructor(private todoRepository: Repository<ToDoEntity> = getRepository("todo")) {
    }

    public async getAll(req: NextApiRequest, res: NextApiResponse) {
        const {query} = req
        const take = query.take || 10
        const skip = query.skip || 0
        const keyword = query.keyword || ''


        const [result, total] = await this.todoRepository.findAndCount(
            {
                // @ts-ignore
                where: {title: Like('%' + keyword + '%')}, order: {id: "DESC"},
                take: take,
                skip: skip
            }
        );
        res.send({
            data: result,
            total: total
        })
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


        if (deleted.affected === 1) {
            console.log('im work to bacend')
            res.status(200).json({message: 'success'});
        }
        //exception
    }

    public async update(req: NextApiRequest, res: NextApiResponse): Promise<void> {
        const id = Number(req.query.params)
        const data = req.body as Omit<IToDo, 'id'>
        const updated = await this.todoRepository.update({id}, data);
        if (updated.affected === 1) {
            res.status(200).json({message: 'success'});

        }
        //exception
    }


}

