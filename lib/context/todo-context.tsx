import React, {createContext, useContext, useState} from "react";

import {IReactChildren} from "../interfaces/react-children.interface";
import {IToDo} from "../interfaces/to-do.interface";


const ToDoContext = createContext<{ todos: IToDo[]; setTodos: React.Dispatch<React.SetStateAction<IToDo[]>>; }>({
    setTodos(value: ((prevState: IToDo[]) => IToDo[]) | IToDo[]): void {
    }, todos: []
});

export const TodoContextProvider: React.FC<IReactChildren> = ({children}) => {

    const initialState = [] as unknown as IToDo[]
    const [todos, setTodos] = useState<IToDo[]>(initialState)

    return (
        <ToDoContext.Provider value={{todos, setTodos}}>
            {children}
        </ToDoContext.Provider>
    )

}

export const useToDoContext = () => {
    return useContext(ToDoContext);
}