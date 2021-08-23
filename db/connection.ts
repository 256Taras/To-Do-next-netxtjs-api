import {createConnection, getConnection} from "typeorm";

import {environment} from "../environments/environment";
import { ToDoEntity } from "../lib/entities/todo.entity";

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
