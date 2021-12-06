import React, { Component, createRef } from 'react';
import {
    Divider,
    Grid,
    Image,
    Segment,
    Sticky,
    Ref,
    Visibility,
    Progress,
} from 'semantic-ui-react';

export default class VisibilityExampleVisibility extends Component {
    state = {
        calculations: {
            direction: 'none',
            height: 0,
            width: 0,
            topPassed: false,
            bottomPassed: false,
            pixelsPassed: 0,
            percentagePassed: 0,
            topVisible: false,
            bottomVisible: false,
            fits: false,
            passing: false,
            onScreen: false,
            offScreen: false,
            success: false,
        },
    };
    contextRef = createRef();

    handleUpdate = (e, { calculations }) => {
        return this.setState({ calculations });
    };

    render() {
        const { calculations } = this.state;

        return (
            <>
                <Sticky context={this.contextRef}>
                    <Progress
                        percent={(
                            (calculations.pixelsPassed /
                                (calculations.height - window.innerHeight)) *
                            100
                        ).toFixed()}
                        progress
                        active
                    />
                </Sticky>
                <Ref innerRef={this.contextRef}>
                    <Grid columns={2}>
                        <Grid.Column>
                            <Visibility onUpdate={this.handleUpdate}>
                                <Segment>
                                    {[
                                        'https://react.semantic-ui.com//images/wireframe/centered-paragraph.png',
                                        'https://react.semantic-ui.com//images/wireframe/short-paragraph.png',
                                        'https://react.semantic-ui.com//images/wireframe/media-paragraph.png',
                                        'https://react.semantic-ui.com//images/wireframe/paragraph.png',
                                        'https://react.semantic-ui.com//images/wireframe/centered-paragraph.png',
                                        'https://react.semantic-ui.com//images/wireframe/short-paragraph.png',
                                        'https://react.semantic-ui.com//images/wireframe/media-paragraph.png',
                                        'https://react.semantic-ui.com//images/wireframe/paragraph.png',
                                        'https://react.semantic-ui.com//images/wireframe/centered-paragraph.png',
                                        'https://react.semantic-ui.com//images/wireframe/short-paragraph.png',
                                        'https://react.semantic-ui.com//images/wireframe/media-paragraph.png',
                                        'https://react.semantic-ui.com//images/wireframe/paragraph.png',
                                        'https://react.semantic-ui.com//images/wireframe/centered-paragraph.png',
                                        'https://react.semantic-ui.com//images/wireframe/short-paragraph.png',
                                        'https://react.semantic-ui.com//images/wireframe/media-paragraph.png',
                                        'https://react.semantic-ui.com//images/wireframe/paragraph.png',
                                        'https://react.semantic-ui.com//images/wireframe/centered-paragraph.png',
                                        'https://react.semantic-ui.com//images/wireframe/short-paragraph.png',
                                        'https://react.semantic-ui.com//images/wireframe/media-paragraph.png',
                                        'https://react.semantic-ui.com//images/wireframe/paragraph.png',
                                        'https://react.semantic-ui.com//images/wireframe/centered-paragraph.png',
                                        'https://react.semantic-ui.com//images/wireframe/short-paragraph.png',
                                        'https://react.semantic-ui.com//images/wireframe/media-paragraph.png',
                                        'https://react.semantic-ui.com//images/wireframe/paragraph.png',
                                    ].map((src, index, images) => (
                                        <React.Fragment key={index}>
                                            <Image src={src} />
                                            {index !== images.length - 1 && (
                                                <Divider />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </Segment>
                            </Visibility>
                        </Grid.Column>
                    </Grid>
                </Ref>
                <div style={{ height: 1000 }}></div>
            </>
        );
    }
}
