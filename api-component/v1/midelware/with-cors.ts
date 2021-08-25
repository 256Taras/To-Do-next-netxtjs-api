import Cors from 'cors'

import {NextApiRequest, NextApiResponse} from 'next';


export type Handler = (req: NextApiRequest, res: NextApiResponse) => void;

function initCors() {
    return (req: NextApiRequest, res: NextApiResponse) =>
        new Promise((resolve, reject) => {

            Cors({
                origin: 'https://test-todo-api-884.herokuapp.com',
                methods: 'GET, POST, PUT, PATCH, POST, DELETE,OPTIONS, HEAD',
                allowedHeaders: 'Content-Type, Authorization,Accept,X-Requested-With',
                credentials: true,

            })(req, res, (result: unknown) => {

                res.setHeader("Access-Control-Allow-Origin", "*");
                res.setHeader(
                    "Access-Control-Allow-Headers",
                    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
                );
                if (req.method == "OPTIONS") {
                    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
                    return res.status(200).json({});
                }
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