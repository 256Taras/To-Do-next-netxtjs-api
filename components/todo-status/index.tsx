import React from 'react';
import {ToDoStatus} from "../../lib/interfaces/todo-status.enum";

const TodoStatus = () => {
    const statuses: ToDoStatus[] = [ToDoStatus.OPEN, ToDoStatus.IN_PROGRESS, ToDoStatus.DONE]
    return (
        <div className="absolute ml-96">
            <div
                className="bg-white w-28 border border-gray-300 rounded-lg flex flex-col text-sm py-4 px-2 text-gray-500 shadow-lg">
                {statuses.map((status, index) => (
                    <div key={index}>
                        <div className=" flex start hover:bg-gray-100 py-1 px-2 rounded">
                            <div  className="w-14 text-gray-900 ">{status}</div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default TodoStatus;