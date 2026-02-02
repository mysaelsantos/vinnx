import Spline from '@splinetool/react-spline'

function SplineScene() {
    return (
        <div className="spline-container">
            <Spline
                scene="https://prod.spline.design/r4xbot-1166OUPMSmkR46qRHRgwomdO/scene.splinecode"
                onLoad={() => console.log('Spline loaded!')}
                onError={(e) => console.error('Spline error:', e)}
            />
        </div>
    )
}

export default SplineScene
