
import NextCors from 'nextjs-cors';

import {NextApiRequest, NextApiResponse} from 'next';


export type Handler = (req: NextApiRequest, res: NextApiResponse) => void;

function initCors() {
    return async (req: NextApiRequest, res: NextApiResponse) =>

        await NextCors(req, res, {
            // Options
            methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
            origin: 'https://test-todo-api-884.herokuapp.com',
            optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204,
            credentials: true,
            allowedHeaders: 'Content-Type, Authorization,Accept,X-Requested-With',
        });

}

export const withCors = (handler: Handler) => async (req: NextApiRequest, res: NextApiResponse) => {
    await initCors()(req, res);
    return handler(req, res);
};