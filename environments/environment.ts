export const environment = {
    databaseConnection: {
        type: process.env['DB_TYPE'] as 'postgres',
        url: process.env['DATABASE_URL'] as string,
        autoLoadEntities: true,
        synchronize: true,
        logging: false,
        dropSchema: false,
    },
}
