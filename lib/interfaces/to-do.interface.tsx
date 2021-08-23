import {ToDoStatus} from "./todo-status.enum";

export interface IToDo {
    id: number;
    title: string;
    status: ToDoStatus;
}