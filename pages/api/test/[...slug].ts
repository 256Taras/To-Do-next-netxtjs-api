import {connectToDataBase} from "../../../db/connection";
import {getRepository} from "typeorm";
import {ToDoEntity} from "../../../lib/entities/todo.entity";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {

    await  connectToDataBase()
    const todos =  await getRepository<ToDoEntity>("todo")
        .createQueryBuilder('t')
        .orderBy('t.id', 'DESC')
        .getMany()

    const { slug } = req.query
    res.send({todos})
}