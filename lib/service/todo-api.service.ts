import {IToDo} from "../interfaces/to-do.interface";
import {axios$} from "../utils/instace-axios";
import {IResponseMessage} from "../interfaces/response-message.interface";
import {ITodoResponse} from "../interfaces/todo-response.interface";

export class ToDoApi {


    static async getTodos(query?: string): Promise<ITodoResponse> {
        const uri = query ? 'to-do/[[...params]]?' + query : 'to-do/[[...params]]'

        const {data} = await axios$.get<ITodoResponse>(uri);

        return data
    }

    static async addTodo(payload: Partial<Omit<IToDo, 'id'>>): Promise<IToDo> {
        const {data} = await axios$.post<IToDo>('to-do/[[...params]]', payload);
        return data;
    }

    static async removeTodo(id: number): Promise<IResponseMessage> {
        const {data} = await axios$.delete<IResponseMessage>(`to-do/[[...params]]/${id}`);
        return data;
    }

    static async updateTodo(id:number,payload: Partial<Omit<IToDo, 'id'>>): Promise<IResponseMessage> {
        const {data} = await axios$.put<IResponseMessage>(`to-do/[[...params]]/${id}`, payload);
        return data;
    }

}