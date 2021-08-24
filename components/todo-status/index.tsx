import React from 'react';

import {ToDoStatus} from "../../lib/interfaces/todo-status.enum";
import {IToDo} from "../../lib/interfaces/to-do.interface";
import {ToDoApi} from "../../lib/service/todo-api.service";
import {useToDoContext} from "../../lib/context/todo-context";


const TodoStatus: React.FC<IToDo> = ({status, id}) => {
    const currentStatus = status
    const {setTodos} = useToDoContext()

    const statuses: ToDoStatus[] = [ToDoStatus.OPEN, ToDoStatus.IN_PROGRESS, ToDoStatus.DONE]


    const updateStatus = async (status: ToDoStatus) => {
        const result = await ToDoApi.updateTodo(id, {status})
        if (result.message ==='success'){

            setTodos((prevState: IToDo[]) => {
                return prevState.map((todo) => {
                    if (todo.id === id) {
                        todo.status = status
                    }
                    return todo
                })
            })
        }
     //exception
    }


    return (
        <div className="absolute ml-96">
            <div
                className="bg-white w-28 border border-gray-300 rounded-lg flex flex-col text-sm py-4 px-2 text-gray-500 shadow-lg">
                {statuses.map((status, index) => (
                    <div key={index} onClick={() => updateStatus(status)}>
                        <div
                            className={currentStatus === status ? "flex start bg-gray-100 hover:bg-gray-300 py-1 px-2 rounded" : 'flex start hover:bg-gray-300 py-1 px-2 rounded"'}>
                            <div className="w-14 text-gray-900 ">{status}</div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default TodoStatus;