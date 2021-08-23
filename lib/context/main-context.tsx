import React from "react";

import {IReactChildren} from "../interfaces/react-children.interface";
import {TodoContextProvider} from "./todo-context";

export const MainContext: React.FC<IReactChildren> = ({children}) => {
    return (
        <TodoContextProvider>{children}</TodoContextProvider>
    )
}