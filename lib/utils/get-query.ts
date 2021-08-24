export const getQuery = (skip: number = 0, take: number = 10): string =>
    `skip=${skip}&take=${take}`;
