import { createContext, useContext, useState } from 'react'

export const ModalContext = createContext()

export function ModalProvider({ children }) {
    const [modal, setModal] = useState({ isOpen: false, title: '', content: null })

    const openModal = ({ title, content }) => {
        setModal({ isOpen: true, title, content })
    }

    const closeModal = () => {
        setModal({ isOpen: false, title: '', content: null })
    }

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            {modal.isOpen && (
                <div className="modal active">
                    <div className="modal-overlay" onClick={closeModal} />
                    <div className="modal-content">
                        <button className="modal-close" onClick={closeModal}>×</button>
                        <h2 style={{ marginBottom: '20px', fontSize: '24px' }}>{modal.title}</h2>
                        {modal.content}
                    </div>
                </div>
            )}
        </ModalContext.Provider>
    )
}
