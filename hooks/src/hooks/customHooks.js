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

export const useNetwork = onChange => {
    const [status, setStatus] = useState(navigator.onLine);

    const handleChange = () => {
        if (typeof onChange === 'function') {
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    };

    useEffect(() => {
        window.addEventListener('online', handleChange);
        window.addEventListener('offline', handleChange);

        return () => {
            window.removeEventListener('online', handleChange);
            window.removeEventListener('offline', handleChange);
        };
    }, []);

    return status;
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

    if (typeof onClick !== 'function') {
        return false;
    }

    return element;
};

export const useConfirm = (message, onConfirm, onCancel) => {
    if (onConfirm && typeof onConfirm !== 'function') return;
    if (onCancel && typeof onCancel !== 'function') return;

    const confirmAction = () => {
        if (window.confirm(message)) {
            onConfirm();
        } else {
            onCancel();
        }
    };

    return confirmAction;
};

export const usePreventLeave = () => {
    const listener = e => {
        e.preventDefault();
        e.returnValue = '';
    };
    const enablePrevent = () => {
        window.addEventListener('beforeunload', listener);
    };
    const disablePrevent = () => {
        window.removeEventListener('beforeunload', listener);
    };

    return { enablePrevent, disablePrevent };
};

export const useBeforeLeave = onBefore => {
    const mouseLeaveHanler = () => {
        onBefore();
    };

    useEffect(() => {
        document.addEventListener('mouseleave', mouseLeaveHanler);

        return document.removeEventListener('mouseleave', mouseLeaveHanler);
    }, []);

    if (typeof onBefore !== 'function') return;
};

export const useFadeIn = (duration = 3, delay = 0) => {
    const element = useRef();

    useEffect(() => {
        if (element.current) {
            const { current } = element;

            //style
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    }, []);

    if (typeof duration !== 'number') {
        return;
    }
    return {
        ref: element,
        style: {
            opacity: 0,
        },
    };
};

export const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setState(prev => {
                return {
                    x: window.scrollX,
                    y: window.scrollY,
                };
            });
        });
    }, []);

    return state;
};

export const useFullscreen = callback => {
    const element = useRef();

    const triggerFullscreen = () => {
        element.current.requestFullscreen();

        if (callback && typeof callback === 'function') {
            callback(true);
        }
    };

    const exitFullscreen = () => {
        document.exitFullscreen();

        if (callback && typeof callback === 'function') {
            callback(false);
        }
    };

    return { element, triggerFullscreen, exitFullscreen };
};

export const useNotification = (title, options) => {
    if (!('Notification' in window)) {
        console.log('no');
        return;
    }

    const fireNotif = () => {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission().then(permission => {
                console.log('Notification Permission denied');
            });
        } else {
            new Notification(title, options);
        }
    };

    return fireNotif;
};
