import { rest } from 'msw';

const todos = [
    {
        id: `1`,
        title: `jaewon 1`,
    },
    {
        id: `2`,
        title: `jaewon 2`,
    },
    {
        id: `3`,
        title: `jaewon 3`,
    },
    {
        id: `4`,
        title: `jaewon 4`,
    },
    {
        id: `5`,
        title: `jaewon 5`,
    },
];

export const handler = [
    rest.get('http://localhost:3000/api/projects', async (req, res, ctx) => {
        const pageIndex = req.url.searchParams.get('page');
        return res(
            ctx.json({
                projects: [
                    {
                        id: `1 ${pageIndex}`,
                        name: `jaewon 1-${pageIndex}`,
                    },
                    {
                        id: `2 ${pageIndex}`,
                        name: `jaewon 2-${pageIndex}`,
                    },
                    {
                        id: `3 ${pageIndex}`,
                        name: `jaewon 3-${pageIndex}`,
                    },
                    {
                        id: `4 ${pageIndex}`,
                        name: `jaewon 4-${pageIndex}`,
                    },
                    {
                        id: `5 ${pageIndex}`,
                        name: `jaewon 5-${pageIndex}`,
                    },
                ],
                hasMore: pageIndex < 9,
                nextCursor: pageIndex < 4 ? parseInt(pageIndex) + 1 : undefined,
            })
        );
        // return res(ctx.status(400));
    }),
    rest.post('http://localhost:3000/api/todo', async (req, res, ctx) => {
        const { todo } = req.body;
        todos.push(todo);

        return res(ctx.json(true));
    }),
    rest.get('http://localhost:3000/api/todos', async (req, res, ctx) => {
        const pageIndex = req.url.searchParams.get('page');
        return res(ctx.json(todos));
        // return res(ctx.status(400));
    }),
    rest.get('http://localhost:3000/api/users', async (req, res, ctx) => {
        const pageIndex = req.url.searchParams.get('page');
        return res(
            ctx.json([
                {
                    id: `1 ${pageIndex}`,
                    name: `jaewon 1-${pageIndex}`,
                },
                {
                    id: `2 ${pageIndex}`,
                    name: `jaewon 2-${pageIndex}`,
                },
                {
                    id: `3 ${pageIndex}`,
                    name: `jaewon 3-${pageIndex}`,
                },
                {
                    id: `4 ${pageIndex}`,
                    name: `jaewon 4-${pageIndex}`,
                },
                {
                    id: `5 ${pageIndex}`,
                    name: `jaewon 5-${pageIndex}`,
                },
            ])
        );
        // return res(ctx.status(400));
    }),
    rest.get(
        'http://localhost:3000/api/user/:userId',
        async (req, res, ctx) => {
            const { userId } = req.params;
            return res(
                ctx.json({
                    name: `jaewon (${userId})`,
                })
            );
            // return res(ctx.status(400));
        }
    ),
    rest.get('/todo', async (req, res, ctx) => {
        return res(
            ctx.json({
                todo: {
                    task: 'Todo from Server',
                },
            })
        );
    }),
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
