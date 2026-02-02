import { useState, useEffect } from 'react'

function LoadingScreen({ onComplete }) {
    const [progress, setProgress] = useState(0)
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setTimeout(() => {
                        setIsComplete(true)
                        setTimeout(() => onComplete?.(), 500)
                    }, 300)
                    return 100
                }
                return prev + Math.random() * 15
            })
        }, 100)

        return () => clearInterval(interval)
    }, [onComplete])

    return (
        <div className={`loading-screen ${isComplete ? 'complete' : ''}`}>
            <div className="loading-content">
                <div className="loading-logo">
                    <img src="/logo-verde.png" alt="VINNX" />
                    <div className="loading-glow"></div>
                </div>

                <div className="loading-text">
                    <span className="loading-letter" style={{ animationDelay: '0s' }}>V</span>
                    <span className="loading-letter" style={{ animationDelay: '0.1s' }}>I</span>
                    <span className="loading-letter" style={{ animationDelay: '0.2s' }}>N</span>
                    <span className="loading-letter" style={{ animationDelay: '0.3s' }}>N</span>
                    <span className="loading-letter" style={{ animationDelay: '0.4s' }}>X</span>
                </div>

                <div className="loading-bar-container">
                    <div
                        className="loading-bar"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                    />
                </div>

                <p className="loading-status">
                    {progress < 30 && 'Inicializando IA...'}
                    {progress >= 30 && progress < 60 && 'Carregando componentes...'}
                    {progress >= 60 && progress < 90 && 'Preparando experiência...'}
                    {progress >= 90 && 'Pronto!'}
                </p>
            </div>

            {/* Background grid */}
            <div className="loading-grid"></div>
        </div>
    )
}

export default LoadingScreen
