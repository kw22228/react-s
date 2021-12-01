import React from 'react';
import { ProgressBar, ProgressCircular } from 'react-onsenui';

export default function ProgressExample() {
    return (
        <div>
            <ProgressCircular indeterminate></ProgressCircular>
            <ProgressCircular
                modifier="material"
                value="30"
                secondaryValue="50"
            ></ProgressCircular>
            <ProgressBar indeterminate></ProgressBar>
        </div>
    );
}
