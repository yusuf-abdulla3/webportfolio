import React from 'react';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

export default function CardModal({ vid, showModal, setShowModal, title }) {
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <video
            autoPlay
            loop
            muted
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <source src={vid} type="video/mp4" />
          </video>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </>
  );
}

CardModal.propTypes = {
  vid: PropTypes.string,
  setShowModal: PropTypes.func,
  showModal: PropTypes.bool,
  title: PropTypes.string,
};
