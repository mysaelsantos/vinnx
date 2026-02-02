import { createContext, useState, useEffect } from 'react'
import Button from './Button'

export const ModalContext = createContext(null)

export function ModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    const [content, setContent] = useState({ title: '', content: null })

    const openModal = (modalContent) => {
        setContent(modalContent)
        setIsOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setIsOpen(false)
        document.body.style.overflow = ''
    }

    // Close on Escape
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) {
                closeModal()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isOpen])

    return (
        <ModalContext.Provider value={{ openModal, closeModal, isOpen }}>
            {children}
            {isOpen && (
                <div className="modal active" id="modal">
                    <div className="modal-overlay" onClick={closeModal} />
                    <div className="modal-content glass">
                        <button className="modal-close" onClick={closeModal}>
                            &times;
                        </button>
                        <div className="modal-body" id="modal-body">
                            {content.title && (
                                <h2 style={{ marginBottom: '20px' }}>{content.title}</h2>
                            )}
                            {content.content}
                            {content.showCTA !== false && (
                                <Button
                                    href="#contact"
                                    variant="primary"
                                    style={{ marginTop: '30px' }}
                                    onClick={closeModal}
                                >
                                    {content.ctaText || 'Falar com Especialista'}
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </ModalContext.Provider>
    )
}

function Modal() {
    // This component is a placeholder for when Modal is imported directly
    // The actual modal is rendered via ModalProvider
    return null
}

export default Modal
