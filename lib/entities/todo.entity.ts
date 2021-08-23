import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

import {ToDoStatus} from "../interfaces/todo-status.enum";
import {IToDo} from "../interfaces/to-do.interface";

@Entity('todo')
export class ToDoEntity implements IToDo {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public title!: string;

    @Column({ type: 'enum', enum: ToDoStatus, default: ToDoStatus.OPEN })
    public status!: ToDoStatus;

}