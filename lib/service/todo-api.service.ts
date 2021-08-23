import {IToDo} from "../interfaces/to-do.interface";
import {axios$} from "../utils/instace-axios";

export class ToDoApi {


    private constructor() {
    }

    static async getTodos() {
        const {data} = await axios$.get<IToDo[]>('to-do');
        return data
    }

    static async addTodo(payload: Partial<Omit<IToDo, 'id'>>): Promise<IToDo> {
        const {data} = await axios$.post<IToDo>('to-do', payload);
        return data;
    }

    static async removeTodo(id: number) {
        const {data} = await axios$.delete<IToDo>(`to-do/${id}`);
        return data;
    }

    static async updateTodo(payload: Partial<Omit<IToDo, 'id'>>): Promise<IToDo> {
        const {data} = await axios$.put<IToDo>('to-do', payload);
        return data;
    }

}