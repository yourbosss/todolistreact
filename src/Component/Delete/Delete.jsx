import React, { useState } from 'react';
import './Delete.scss';

const DeleteModal = ({ onConfirm, onCancel }) => {
    const [showModal, setShowModal] = useState(true);

    const closeModal = (action) => {
        action();
        setShowModal(false);
    };

    if (!showModal) return null;

    return (
        <div className="modal-button-delete">
            <div className="modal-content-button-delete">
                <div className="modal-border-top-button-delete" />
                <div className="modal-header-button-delete">
                    <h3>Are you sure you want to delete this task?</h3>
                </div>
                <div className="modal-buttons-button-delete">
                    <button
                        className="button-button-delete"
                        onClick={() => closeModal(onConfirm)}
                    >
                        Confirm
                    </button>
                    <button
                        className="button-button-delete"
                        onClick={() => closeModal(onCancel)}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
