import React  from 'react';

import {IToDo} from "../../lib/interfaces/to-do.interface";
import TodoStatus from "../todo-status";
import {Loader} from "../loader";
import {useToDoFacade} from "../../lib/hooks/use-to-do.facade";

export const ToDoItem: React.FC<IToDo> = (props) => {
    const {title, status} = props
    const {
        saveOrEditHandler,
        isNeedShowStatus,
        opeStatusBar,
        isSubmitting,
        isRemoving,
        setNewTitle,
        removeTodo,
        isNeedEdited,
        newTitle
    } = useToDoFacade(props)


    return (
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">

            <div>
                <div className="flex mb-4 items-center">
                    {
                        isNeedEdited
                            ? <input type="text" onChange={(e) => setNewTitle(e.currentTarget.value)} value={newTitle}
                                     className='shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker focus:outline-none focus:ring focus:border-blue-100'/>
                            : <p className="w-full  text-green">{title}</p>
                    }

                    {isSubmitting
                        ? <Loader/>

                        : <button onClick={saveOrEditHandler}
                                  className="block p-2 ml-2 border-2 rounded text-red border-red hover:bg-purple-300 hover:bg-red">{isNeedEdited ? 'Save' : 'Edit'}
                        </button>
                    }
                    {/*// @ts-ignore*/}
                    <button onClick={opeStatusBar}
                            className="block w-56 p-2 ml-4 mr-2 border-2 rounded hover:bg-yellow-300 text-grey border-grey hover:bg-grey">
                        {status}
                    </button>
                    {
                        isRemoving
                            ? <Loader/>
                            : <button onClick={removeTodo}
                                      className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:bg-red-300 hover:bg-red">Remove
                            </button>
                    }

                    {isNeedShowStatus ? <TodoStatus {...props} /> : ''}

                </div>
            </div>
        </div>
    )
}
