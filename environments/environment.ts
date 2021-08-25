const isProd = true

export const environment = {
    databaseConnection: {
        type: process.env['DB_TYPE'] as 'postgres',
        url: process.env['DATABASE_URL'] as string,
        autoLoadEntities: true,
        synchronize: true,
        logging: false,
        dropSchema: false,
    },
    baseURL: isProd
        ? 'https://to-do-next-netxtjs-api.vercel.app/api/v1/'
        : 'http://localhost:3000/api/v1/'


}
