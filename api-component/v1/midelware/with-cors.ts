import Cors from 'cors'

import { NextApiRequest, NextApiResponse } from 'next';


export type Handler = (req: NextApiRequest, res: NextApiResponse) => void;

function initCors() {
    return (req: NextApiRequest, res: NextApiResponse) =>
        new Promise((resolve, reject) => {

            Cors({
                origin: 'https://test-todo-api-884.herokuapp.com',
                credentials: true,

            })(req, res, (result: unknown) => {
                res.setHeader("Access-Control-Allow-Credentials", "true");
                res.setHeader("Access-Control-Max-Age", "1800");
                res.setHeader("Access-Control-Allow-Headers", "content-type");
                res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
                if (result instanceof Error) {
                    return reject(result);
                }
                return resolve(result);
            });
        });
}

export const withCors = (handler: Handler) => async (req: NextApiRequest, res: NextApiResponse) => {
    await initCors()(req, res);
    return handler(req, res);
};