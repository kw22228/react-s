import React from 'react';
import { Page } from 'react-onsenui';

import ButtonExample from './ButtonExample';
import ActionSheetExample from './ActionSheetExample';
import CheckBoxExample from './CheckBoxExample';
import FabExample from './FabExample';
import ListExample from './ListExample';
import ProgressExample from './ProgressExample';
import AlertExample from './AlertExample';
// import TabbarExample from './TabbarExample';

export default function OnsenuiExample() {
    return (
        <Page>
            <ActionSheetExample />
            <hr />
            <ProgressExample />
            <hr />
            <ListExample />
            <hr />
            <ButtonExample />
            <hr />
            <CheckBoxExample />
            <hr />
            <FabExample />
            <hr />
            <AlertExample />
            {/* <TabbarExample /> */}
        </Page>
    );
}
