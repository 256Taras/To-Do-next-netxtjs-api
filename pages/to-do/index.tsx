import type {GetServerSideProps, NextPage} from 'next';
import {useEffect} from "react";

import {ITodoResponse} from "../../lib/interfaces/todo-response.interface";
import {useToDoContext} from "../../lib/context/todo-context";
import {ToDoApi} from "../../lib/service/todo-api.service";
import {ToDoList} from "../../components/to-do-list";
import {AddToDo} from "../../components/add-to-do";
import {usePagination} from "../../lib/hooks/usePagination";


const Home: NextPage<{ payload: ITodoResponse }> = ({payload}) => {


    const {todos, setTodos} = useToDoContext()

    const {loadMore,loading,disablePagination,error,setTotal} = usePagination(ToDoApi.getTodos,setTodos)

    useEffect(()=>{
        setTodos(payload.data)
        setTotal(payload.total)
    },[])






    if (!todos) {
        return <div>
            ...loading
        </div>
    }


    return (
        <div className="h-100 w-full flex flex-col items-center  justify-center flex- bg-teal-lightest font-sans">
            <AddToDo/>
            <ToDoList todos={todos}/>
            {loading ? 'Loading...' : <button className={disablePagination? "text-gray-500":""} disabled={disablePagination} onClick={loadMore}>show more</button>}
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

