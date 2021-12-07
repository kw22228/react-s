import { rest } from 'msw';

export const handler = [
    rest.get('/login', async (req, res, ctx) => {
        return res(
            ctx.json({
                id: 'ffffffffff',
                firstName: 'jaewon',
                lastName: 'Kim',
            })
        );
    }),
    rest.get(
        'https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json',
        async (req, res, ctx) => {
            return res(
                ctx.json({
                    data: {
                        people: [
                            {
                                name: 'jimmy',
                                age: 133335,
                            },
                            {
                                name: 'timmy',
                                age: 13,
                            },
                            {
                                name: 'cindy',
                                age: 15,
                            },
                            {
                                name: 'judy',
                                age: 25,
                            },
                            {
                                name: 'marry',
                                age: 64,
                            },
                            {
                                name: 'tommy',
                                age: 109,
                            },
                        ],
                    },
                })
            );
        }
    ),
];
