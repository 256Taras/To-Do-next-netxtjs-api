import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import { IToDo } from "../../lib/interfaces/to-do.interface";
import { ToDoStatus } from "../../lib/interfaces/todo-status.enum";


@Entity('todo')
export class ToDoEntity implements IToDo {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public title!: string;

    @Column({ type: 'enum', enum: ToDoStatus, default: ToDoStatus.OPEN })
    public status!: ToDoStatus;

}