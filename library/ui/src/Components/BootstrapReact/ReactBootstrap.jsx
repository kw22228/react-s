import React from 'react';
import AlertDismissible from './AlertDismissible';
import ButtonExample from './ButtonExample';
import CarouselExmaple from './CarouselExmaple';
import GridExample from './GridExample';
import MydModalWithGrid from './MydModalWithGrid';

export default function ReactBootstrap() {
    return (
        <div>
            <CarouselExmaple />
            <hr />
            <AlertDismissible />
            <hr />
            <ButtonExample />
            <hr />
            <GridExample />
            <hr />
            <MydModalWithGrid />
        </div>
    );
}
