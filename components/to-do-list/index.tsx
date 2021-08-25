import React from 'react';
import {IToDo} from "../../lib/interfaces/to-do.interface";
import {ToDoItem} from "../to-do-item";

export const ToDoList: React.FC<{ todos: IToDo[] }> = ({todos}) => {
    return (
        <>
            {todos.map((todo: IToDo) => (
            <ToDoItem {...todo} key={todo.title}/>
            ))}
        </>
    );
}


