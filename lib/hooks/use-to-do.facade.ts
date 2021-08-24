import {useToDoContext} from "../context/todo-context";
import React, {useState} from "react";
import {ToDoApi} from "../service/todo-api.service";
import {IToDo} from "../interfaces/to-do.interface";
import {IResponseMessage} from "../interfaces/response-message.interface";

export const useToDoFacade = ({id, title}: IToDo) => {
    const {setTodos} = useToDoContext()

    const [isNeedShowStatus, setIsNeedShowStatus] = useState<boolean>(false)
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [isRemoving, setIsRemoving] = useState<boolean>(false)
    const [isNeedEdited, setIsNeedEdited] = useState<boolean>(false)
    const [newTitle, setNewTitle] = useState<string>(title)


    const saveOrEditHandler = async () => {
        if (isNeedEdited) {
            if (newTitle !== title) {
                setIsSubmitting(true)
                const newTodo = await ToDoApi.updateTodo(id, {title: newTitle})
                if (newTodo.message === 'success') {
                    setTodos(((prevState: IToDo[]) => {
                        return prevState.map((todo: IToDo) => {
                            if (todo.id === id) {
                                todo.title = newTitle
                            }
                            return todo
                        })
                    }))
                }
                setIsSubmitting(false)
            }
            setIsNeedEdited(false)
            return
        }
        setIsNeedEdited(true)
    }


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
            setIsRemoving(true)
            const deleted: IResponseMessage = await ToDoApi.removeTodo(id)
            if (deleted.message === 'success') {
                setTodos((prevState: IToDo[]) => {
                    return prevState.filter(todo => todo.id !== id)
                })
            }
        } catch (e) {
            //setSomeError
        } finally {
            setIsRemoving(false)
        }
    }

    return {
        saveOrEditHandler,
        isNeedShowStatus,
        setIsNeedShowStatus,
        opeStatusBar,
        closeStatusBar,
        setIsRemoving,
        isSubmitting,
        isRemoving,
        setIsNeedEdited,
        setNewTitle,
        removeTodo,
        setIsSubmitting,
        isNeedEdited,
        newTitle
    }
}