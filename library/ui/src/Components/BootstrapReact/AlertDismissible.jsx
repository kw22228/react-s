import { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';

export default function AlertDismissible() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Alert show={show} variant="danger">
                <Alert.Heading>How's it going?!</Alert.Heading>
                <p>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula, eget lacinia odio sem nec elit. Cras mattis
                    consectetur purus sit amet fermentum.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="danger">
                        Close me y'all!
                    </Button>
                </div>
            </Alert>

            {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
        </>
    );
}
