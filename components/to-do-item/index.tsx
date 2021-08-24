import React, {useState} from 'react';

import {IResponseMessage} from "../../lib/interfaces/response-message.interface";
import {useToDoContext} from "../../lib/context/todo-context";
import {IToDo} from "../../lib/interfaces/to-do.interface";
import {ToDoApi} from "../../lib/service/todo-api.service";
import TodoStatus from "../todo-status";

export const ToDoItem: React.FC<IToDo> = ({title, status, id}) => {

    const {setTodos} = useToDoContext()

    const [isNeedShowStatus, setIsNeedShowStatus] = useState<boolean>(false)
    //  const [currentStatus, setCurrentStatus] = useState<string>('in progress')


    const closeStatusBar = () => {

        setIsNeedShowStatus(false)
    }

    const opeStatusBar = (e: MouseEvent) => {

        e.stopPropagation()

        setIsNeedShowStatus(true)

    }

    React.useEffect(() => {
        window.addEventListener('click', closeStatusBar);


        return () => {
            window.removeEventListener('click', closeStatusBar);
        };
    }, []);

    const removeTodo = async () => {
        try {
            const deleted: IResponseMessage = await ToDoApi.removeTodo(id)
            console.log(deleted)
            if (deleted.message === 'success') {
                setTodos((prevState: IToDo[]) => {
                    return prevState.filter(todo => todo.id !== id)
                })
            }
        } catch (e) {
            //setSomeError
            console.log(e)
        } finally {
            //loader false
        }
    }


    return (
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">

            <div>
                <div className="flex mb-4 items-center">
                    <p className="w-full  text-green">{title}</p>
                    {/*// @ts-ignore*/}
                    <button onClick={opeStatusBar}
                            className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey">
                        {status}
                    </button>
                    {isNeedShowStatus ? <TodoStatus/> : ''}

                    <button onClick={removeTodo}
                        className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove
                    </button>
                </div>
            </div>
        </div>
    )
}
