import React from 'react';
import { List, Image } from 'semantic-ui-react';
export default function ListExample() {
    return (
        <div>
            <List celled horizontal inverted>
                <List.Item>
                    <Image src="https://react.semantic-ui.com/images/avatar/small/helen.jpg" />
                    <List.Content>
                        <List.Header>Snickerdoodle</List.Header>
                        An excellent companion
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Image
                        avatar
                        src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg"
                    />
                    <List.Content>
                        <List.Header>Poodle</List.Header>A poodle, it's pretty
                        basic
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Image
                        avatar
                        src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg"
                    />
                    <List.Content>
                        <List.Header>Paulo</List.Header>
                        He's also a dog
                    </List.Content>
                </List.Item>
            </List>
        </div>
    );
}
