import type { NextPage } from 'next'
import {AddToDo} from "../../components/add-to-do";
import {ToDoItem} from "../../components/to-do-item";


const Home: NextPage = () => {
  return (
      <div className="h-100 w-full flex flex-col items-center  justify-center flex- bg-teal-lightest font-sans">
         <AddToDo/>
         <ToDoItem/>
      </div>
  )
}

export default Home
