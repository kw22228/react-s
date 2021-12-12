import { rest } from 'msw';

export const handler = [
    rest.put(
        'http://localhost:3000/counter/increment',
        async (req, res, ctx) => {
            const { value } = req.body;
            return res(
                ctx.json({
                    value: value + 2,
                })
            );
        }
    ),
    rest.get('/login', async (req, res, ctx) => {
        return res(
            ctx.json({
                id: 'ffffffffff',
                firstName: 'jaewon',
                lastName: 'Kim',
            })
        );
    }),
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
        'https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json?id=react',
        async (req, res, ctx) => {
            const id = req.url.searchParams.get('id');

            const originalResponse = await ctx.fetch(req);
            const originalResponseData = await originalResponse.json();

            return res(
                ctx.status(403),
                ctx.json({
                    errorMessage: 'Data not found',
                })
                // ctx.json({
                //     data: {
                //         people: [
                //             ...originalResponseData.data.people, //원래 가져오던 서버에서 가져옴
                //             {
                //                 name: 'id',
                //                 age: 133335,
                //             },
                //         ],
                //     },
                // })
            );
        }
    ),
];
