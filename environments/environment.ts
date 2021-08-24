export const environment = {
    databaseConnection: {
        type: 'postgres' as 'postgres',
        url: 'postgres://pulxfqzz:WzcD54Dscd90DAWTExNMSXr6bVXe-umI@batyr.db.elephantsql.com/pulxfqzz' as string,
        autoLoadEntities: true,
        synchronize: true,
        logging: false,
        dropSchema: false,
    },
}
