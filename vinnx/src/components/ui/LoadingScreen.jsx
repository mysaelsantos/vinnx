import { useState, useEffect } from 'react'

function LoadingScreen() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval)
                    return 100
                }
                return prev + Math.random() * 15
            })
        }, 100)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="loading-screen">
            <div className="loading-content">
                <div className="loading-logo">
                    <span style={{
                        fontSize: '48px',
                        fontWeight: '800',
                        color: '#22C55E'
                    }}>
                        VINNX
                    </span>
                </div>
                <div className="loading-bar">
                    <div
                        className="loading-progress"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                    />
                </div>
                <p className="loading-text">Carregando...</p>
            </div>
        </div>
    )
}

// CSS adicional para o loading
const style = document.createElement('style')
style.textContent = `
  .loading-screen {
    position: fixed;
    inset: 0;
    z-index: 10000;
    background: #0A0A0A;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .loading-content {
    text-align: center;
  }
  
  .loading-logo {
    margin-bottom: 32px;
  }
  
  .loading-bar {
    width: 200px;
    height: 4px;
    background: #27272A;
    border-radius: 2px;
    overflow: hidden;
    margin-bottom: 16px;
  }
  
  .loading-progress {
    height: 100%;
    background: #22C55E;
    transition: width 0.1s ease;
  }
  
  .loading-text {
    font-size: 14px;
    color: #71717A;
  }
  
  .app.loading {
    opacity: 0;
  }
  
  .app.loaded {
    opacity: 1;
    transition: opacity 0.3s ease;
  }
`
if (typeof document !== 'undefined') {
    document.head.appendChild(style)
}

export default LoadingScreen
