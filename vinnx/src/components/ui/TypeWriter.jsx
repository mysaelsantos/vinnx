import { useState, useEffect } from 'react'

function TypeWriter({
    words,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 2000,
    className = ''
}) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [currentText, setCurrentText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const word = words[currentWordIndex]

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                if (currentText.length < word.length) {
                    setCurrentText(word.substring(0, currentText.length + 1))
                } else {
                    // Pause then start deleting
                    setTimeout(() => setIsDeleting(true), pauseDuration)
                }
            } else {
                // Deleting
                if (currentText.length > 0) {
                    setCurrentText(word.substring(0, currentText.length - 1))
                } else {
                    setIsDeleting(false)
                    setCurrentWordIndex((prev) => (prev + 1) % words.length)
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed)

        return () => clearTimeout(timeout)
    }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration])

    return (
        <span className={`typewriter ${className}`}>
            {currentText}
            <span className="typewriter-cursor">|</span>
        </span>
    )
}

export default TypeWriter
