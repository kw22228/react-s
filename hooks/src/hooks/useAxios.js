import { useState, useEffect } from 'react';
import defaultAxios from 'axios';

const useAxios = (options, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null,
    });

    const [trigger, setTrigger] = useState(0);
    const refetch = () => {
        setState(prevState => ({
            ...prevState,
            loading: true,
        }));
        setTrigger(Date.now());
    };

    useEffect(() => {
        async function axiosData() {
            try {
                const data = await axiosInstance(options);

                setState(prevState => ({
                    ...prevState,
                    loading: false,
                    data,
                }));
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                    error,
                }));
            }
        }
        axiosData();
    }, [trigger]);

    if (!options.url) {
        return;
    }

    return {
        ...state,
        refetch,
    };
};

export default useAxios;
