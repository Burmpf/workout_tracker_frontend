import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import DailyDiaryForm from '/components/DailyDiaryForm';

const DailyDiary = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <h1>Daily Diary</h1>
            <Button onClick={handleOpenModal}>Open Daily Diary Form</Button>
            
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Daily Diary Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DailyDiaryForm />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default DailyDiary;
