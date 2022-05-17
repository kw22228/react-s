import { useState, useEffect, useRef } from 'react';

//////////////////////// useState //////////////////////////
export const useInput = (initailValue, updator, validator) => {
    const [value, setValue] = useState(initailValue);

    const onChange = e => {
        const {
            target: { value },
        } = e;
        let willUpdate = true;

        if (typeof validator === 'function') {
            willUpdate = validator(value);
        }

        if (willUpdate) {
            setValue(value);
            updator(value);
        }
    };

    return { value, onChange };
};

export const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);

    if (!allTabs || !Array.isArray(allTabs)) return;

    return {
        currentItem: allTabs[currentIndex],
        setItem: setCurrentIndex,
    };
};

/////////////////////////////////  useEffect //////////////////////////////
export const useTitle = initialTitle => {
    const [title, setTitle] = useState(initialTitle);

    useEffect(() => {
        const htmlTitle = document.querySelector('title');
        htmlTitle.innerHTML = title;
    }, [title]);

    return setTitle;
};

export const useClick = (onClick, title) => {
    const element = useRef();

    useEffect(() => {
        if (!element.current) {
            return;
        }

        element?.current.addEventListener('click', () => {
            onClick(element, title);
        });

        return () => {
            element.current.removeEventListener('click', () => {
                onClick(element, title);
            });
        };
    }, []);

    return element;
};
