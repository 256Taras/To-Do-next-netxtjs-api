import React, {useState} from 'react';

import {ToDoApi} from "../../lib/service/todo-api.service";
import {useToDoContext} from "../../lib/context/todo-context";
import {IToDo} from "../../lib/interfaces/to-do.interface";


export const AddToDo:React.FC = () => {

    const [title, setTitle] = useState<string>('')
    const [isTodoSending, setIsTodoSending] = useState<boolean>(false)
    const [todoSendingFailure, setTodoSendingFailure] = useState<string | string[] | null>(null)
    const {todos,setTodos} = useToDoContext()

    const onChangeTodo = (e: React.FormEvent<HTMLInputElement>) => {
        if (title.length < 30) {
            setTitle(e.currentTarget.value)
        }
        return
    }

    const addTodo = async () => {
        try {
            if(!title.length){
                return
            }


            setIsTodoSending(true)
            const response = await ToDoApi.addTodo({title})
            console.log(response)
            setTodos(((prevState: IToDo[]) => {
                if (prevState && prevState.length >= 1) {
                    return [response, ...prevState]
                }
                return [response]
            }))
            console.log(todos)
        } catch (e) {
            setTodoSendingFailure(e)
        } finally {
            setIsTodoSending(false)
        }
    }




    return (
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            {todoSendingFailure
                ? <pre>{todoSendingFailure}</pre>
                : ''
            }
            <div className="mb-4">
                <h1 className="text-grey-darkest">Todo List</h1>
                <div className="flex mt-4">
                    <input disabled={isTodoSending} onChange={onChangeTodo}
                           className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                           placeholder="Add Todo"/>
                    <button onClick={addTodo}
                            className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Add
                    </button>
                </div>
            </div>

        </div>
    );
};

