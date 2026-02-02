import { Suspense, lazy } from 'react'

// Lazy load do Spline para melhor performance
const Spline = lazy(() => import('@splinetool/react-spline'))

function SplineScene() {
    return (
        <div className="spline-container">
            <Suspense fallback={<SplineLoader />}>
                <Spline
                    scene="https://prod.spline.design/r4xbot-1166OUPMSmkR46qRHRgwomdO/scene.splinecode"
                    onLoad={() => console.log('Spline loaded!')}
                />
            </Suspense>
        </div>
    )
}

function SplineLoader() {
    return (
        <div className="spline-loader">
            <div className="spline-loader-spinner"></div>
            <span>Carregando 3D...</span>
        </div>
    )
}

export default SplineScene
