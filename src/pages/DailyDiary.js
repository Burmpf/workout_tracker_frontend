import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import DailyDiaryForm from "/components/DailyDiaryForm";

const DailyDiary = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <style type="text/css">
        {`
    .btn-purple {
        backgound-color: transparent;
        border-color: #a855f7;
      color: #a855f7;
    }
    .btn-purple:hover { 
        backgound-color: transparent;
        border-color: #a855f7;
      color: #a855f7;
    }
    `}
      </style>

      <div className=" bg-black text-white h-screen w-screen flex flex-col justify-center items-center">
        <h1>Daily Diary</h1>
        <Button variant="purple" onClick={handleOpenModal}>
          Open Daily Diary Form
        </Button>

        <Modal centered show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Daily Diary Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DailyDiaryForm />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default DailyDiary;
