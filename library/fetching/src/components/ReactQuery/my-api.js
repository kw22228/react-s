import axios from 'axios';

export const getTodos = () => {
    return axios.get('/api/todos').then(res => {
        return res.data;
    });
};

export const postTodo = todo => {
    return axios.post('/api/todo', { todo }).then(res => {
        return res.data;
    });
};
