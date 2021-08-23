import React from 'react';
import {Header} from "../header";

export const MainLayout: React.FC = ({children}) => {
    return (
        <div>
            <Header/>
            {children}

        </div>
    );
};
