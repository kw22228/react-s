import React from 'react';
import PropTypes from 'prop-types';

function PropComponent(props) {
    return <div>{props.name}</div>;
}

PropComponent.defaultProps = {
    name: 'jaewon',
    age: 9,
};

PropComponent.propTypes = {
    name: PropTypes.string,
    age: function (props, propName, componentName) {
        if (!/7|8/.test(props[propName])) {
            return new Error(
                'Invalid prop `' +
                    propName +
                    `[${props[propName]}]` +
                    '` supplied to' +
                    ' `' +
                    componentName +
                    '`. Validation failed. Crazy'
            );
        }
    },
};
export default function Component() {
    return (
        <div>
            <PropComponent />
        </div>
    );
}
