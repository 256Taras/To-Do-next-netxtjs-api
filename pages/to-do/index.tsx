import {useEffect} from "react";
import type {GetServerSideProps, NextPage} from 'next';

import {AddToDo} from "../../components/add-to-do";
import {ToDoItem} from "../../components/to-do-item";
import {useToDoContext} from "../../lib/context/todo-context";
import {IToDo} from "../../lib/interfaces/to-do.interface";
import {ToDoApi} from "../../lib/service/todo-api.service";


const Home: NextPage<{ response: IToDo[] }> = ({response}) => {

    const {todos, setTodos} = useToDoContext()

    useEffect(() => {
        setTodos(response)
    }, [])


    return (
        <div className="h-100 w-full flex flex-col items-center  justify-center flex- bg-teal-lightest font-sans">
            <AddToDo/>
            <ToDoItem/>
        </div>
    )
}

export default Home


export const getServerSideProps: GetServerSideProps = async (context) => {
    const payload = await ToDoApi.getTodos()

    if (!payload) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            payload
        },
    }
}

