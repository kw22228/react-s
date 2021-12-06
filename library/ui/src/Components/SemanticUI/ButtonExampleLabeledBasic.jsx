import React from 'react';
import { Button, Icon, Label, Input, Dropdown } from 'semantic-ui-react';

const ButtonExampleLabeledBasic = () => (
    <div>
        <Button as="div" labelPosition="right">
            <Button color="red">
                <Icon name="heart" />
                Like
            </Button>
            <Label as="a" basic color="red" pointing="left">
                2,048
            </Label>
        </Button>
        <Button as="div" labelPosition="right">
            <Button basic color="blue">
                <Icon name="fork" />
                Fork
            </Button>
            <Label as="a" basic color="blue" pointing="left">
                2,048
            </Label>
        </Button>
        <br />
        <Button icon="like" />
        <br />
        <br />
        <Button content="Standard" basic />
        <Button basic color="red" content="Red" />
        <Button basic color="orange" content="Orange" />
        <Button basic color="yellow" content="Yellow" />
        <Button basic color="olive" content="Olive" />
        <Button color="green" content="Green" />
        <Button color="teal" content="Teal" />
        <Button color="blue" content="Blue" />
        <Button color="violet" content="Violet" />
        <Button color="purple" content="Purple" />
        <Button color="pink" content="Pink" />
        <Button color="pink" content="Pink" as="a" />
        <Button basic color="brown" content="Brown" />
        <Button basic color="grey" content="Grey" />
        <Button basic color="black" content="Black" />
        <br />
        <br />
        <Button.Group>
            <Button>One</Button>
            <Button.Or text="또" />
            <Button>Two</Button>
            <Button.Or />
            <Button>Three</Button>
        </Button.Group>
        <br />
        <br />
        <Button color="facebook">
            <Icon name="facebook" /> Facebook
        </Button>
        <Button color="twitter">
            <Icon name="twitter" /> Twitter
        </Button>
        <Button color="google plus">
            <Icon name="google plus" /> Google Plus
        </Button>
        <Button color="vk">
            <Icon name="vk" /> VK
        </Button>
        <Button color="linkedin">
            <Icon name="linkedin" /> LinkedIn
        </Button>
        <Button color="instagram">
            <Icon name="instagram" /> Instagram
        </Button>
        <Button color="youtube">
            <Icon name="youtube" /> YouTube
        </Button>
        <br />
        <br />
        <Input
            action={{
                icon: 'search',
                onClick: () => console.log('An action was clicked!'),
            }}
            actionPosition="right"
            placeholder="Search..."
        />
        <br />
        <br />
        <Dropdown text="File" icon={null}>
            <Dropdown.Menu>
                <Dropdown.Item text="New" />
                <Dropdown.Item text="Open..." description="ctrl + o" />
                <Dropdown.Item text="Save as..." description="ctrl + s" />
                <Dropdown.Item text="Rename" description="ctrl + r" />
                <Dropdown.Item text="Make a copy" />
                <Dropdown.Item icon="folder" text="Move to folder" />
                <Dropdown.Item icon="trash" text="Move to trash" />
                <Dropdown.Divider />
                <Dropdown.Item text="Download As..." />
                <Dropdown.Item text="Publish To Web" />
                <Dropdown.Item text="E-mail Collaborators" />
            </Dropdown.Menu>
        </Dropdown>

        <br />
        <br />
        <Button icon={<i className="my-icon" />} />
        <Button icon={{ as: 'i', className: 'my-icon' }} />
    </div>
);

export default ButtonExampleLabeledBasic;
