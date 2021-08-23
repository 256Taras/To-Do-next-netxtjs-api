import React, { useState} from 'react';
import TodoStatus from "../todo-status";

export const ToDoItem = () => {
    const [isNeedShowStatus, setIsNeedShowStatus] = useState<boolean>(false)
  //  const [currentStatus, setCurrentStatus] = useState<string>('in progress')


    const closeStatusBar = () => {

        setIsNeedShowStatus(false)
    }

    const opeStatusBar = (e:MouseEvent) => {
        e.stopPropagation()
        setIsNeedShowStatus(true)

    }

    React.useEffect(() => {
        window.addEventListener('click', closeStatusBar);


        return () => {
            window.removeEventListener('click', closeStatusBar);
        };
    }, []);


    return (
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">

            <div>
                <div className="flex mb-4 items-center">
                    <p className="w-full  text-green">Submit To-do App Component to Tailwind Components</p>
                    <button onClick={opeStatusBar}
                            className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey">
                        Status
                    </button>
                    {isNeedShowStatus ? <TodoStatus/> : ''}

                    <button
                        className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove
                    </button>
                </div>
            </div>
        </div>
    )
}
