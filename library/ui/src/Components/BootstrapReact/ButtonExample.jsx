import React from 'react';
import { ButtonGroup, Button, Spinner } from 'react-bootstrap';

export default function ButtonExample() {
    return (
        <>
            <ButtonGroup size="lg" className="mb-2">
                <Button variant="danger">Left</Button>
                <Button>Middle</Button>
                <Button variant="outline-info">Right</Button>
            </ButtonGroup>
            <br />
            <ButtonGroup className="mb-2">
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
            <br />
            <ButtonGroup size="sm">
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
            <br />
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                <span>&nbsp;Loading...</span>
            </Button>{' '}
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
        </>
    );
}
