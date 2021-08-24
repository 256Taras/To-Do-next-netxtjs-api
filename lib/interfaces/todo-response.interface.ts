import {IToDo} from "./to-do.interface";

export interface ITodoResponse {
    data: IToDo[],
    total: number
}