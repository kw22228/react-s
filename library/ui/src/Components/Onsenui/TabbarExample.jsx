import React, { useState } from 'react';
import { Tabbar, Tab, Page, Button, Toast } from 'react-onsenui';

export default function TabbarExample() {
    const [index, setIndex] = useState(0);
    const [open, setOpen] = useState(false);
    return (
        <Tabbar
            onPreChange={({ index }) => setIndex(index)}
            onPostChange={() => console.log('postChange')}
            onReactive={() => console.log('postChange')}
            position="bottom"
            index={index}
            renderTabs={(activeIndex, tabbar) => [
                {
                    content: (
                        <Page
                            title="Home"
                            active={activeIndex === 0}
                            tabbar={tabbar}
                        >
                            <Button onClick={() => setOpen(true)}>open</Button>
                            <Toast isOpen={open}>hi</Toast>
                        </Page>
                    ),
                    tab: <Tab label="Home" icon="md-home" />,
                },
                {
                    content: (
                        <Page
                            title="Settings"
                            active={activeIndex === 1}
                            tabbar={tabbar}
                        >
                            2
                        </Page>
                    ),
                    tab: <Tab label="Settings" icon="md-settings" />,
                },
            ]}
        />
    );
}
