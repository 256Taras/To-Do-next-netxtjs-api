import {createConnection, getConnection} from "typeorm";
import { ToDoEntity } from "../api/v1/entities/todo.entity";

import {environment} from "../environments/environment";

export async function connectToDataBase() {
    try {
        return getConnection();
    } catch (e) {
        return createConnection({
            ...environment.databaseConnection,
            entities: [ToDoEntity]
        });
    }
}
