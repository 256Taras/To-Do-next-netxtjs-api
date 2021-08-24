import React, {useState} from 'react';


import {useDebounce} from "../../lib/hooks/use-debounce";
import {ToDoApi} from "../../lib/service/todo-api.service";
import {useToDoContext} from "../../lib/context/todo-context";


export const Search: React.FC = () => {
    const [search, setSearch] = useState<string>('')

    const {setTodos} = useToDoContext()

    const searchTodos = async (keyword: string) => {
        const result = await ToDoApi.getTodos(`keyword=${keyword}`)
        console.log(result)
        setTodos(result.data)
    }

    const debounce = useDebounce(searchTodos, 300)

    const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
        debounce(e.currentTarget.value)
    }


    return (
        <div>
            <input
                value={search}
                onChange={onChangeInput}
                className="border-2 border-gray-300 bg-white h-10 pl-2 pr-1 rounded-lg text-sm focus:outline-none focus:ring focus:border-blue-300"
                type="search" name="search" placeholder="Search"/>
        </div>
    );
};

