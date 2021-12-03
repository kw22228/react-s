import React from 'react';
import { Modal, Button, Progress } from 'antd';

export default function ModalExample() {
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalText, setModalText] = React.useState('Content of the modal');

    const showModal = () => {
        setVisible(true);
        setModalText('Content of the modal');
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    return (
        <>
            <div>
                <Progress
                    strokeLinecap="square"
                    percent={75}
                    trailColor="red"
                />
                <Progress
                    strokeLinecap="square"
                    type="circle"
                    percent={100}
                    trailColor="red"
                />
                <Progress
                    strokeLinecap="square"
                    type="dashboard"
                    percent={75}
                    trailColor="red"
                    status="exception"
                />
            </div>
            <Button type="primary" onClick={showModal}>
                Open Modal with async logic
            </Button>
            <Modal
                title="Title"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{modalText}</p>
            </Modal>
        </>
    );
}
