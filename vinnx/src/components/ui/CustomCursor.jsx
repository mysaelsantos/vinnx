import { useEffect, useRef, useState } from 'react'

function CustomCursor() {
    const cursorRef = useRef(null)
    const followerRef = useRef(null)
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const cursor = cursorRef.current
        const follower = followerRef.current
        if (!cursor || !follower) return

        let mouseX = 0
        let mouseY = 0
        let cursorX = 0
        let cursorY = 0
        let followerX = 0
        let followerY = 0

        const handleMouseMove = (e) => {
            mouseX = e.clientX
            mouseY = e.clientY
        }

        const animate = () => {
            // Cursor follows mouse with slight lag
            cursorX += (mouseX - cursorX) * 0.2
            cursorY += (mouseY - cursorY) * 0.2
            cursor.style.left = `${cursorX}px`
            cursor.style.top = `${cursorY}px`

            // Follower has more lag
            followerX += (mouseX - followerX) * 0.1
            followerY += (mouseY - followerY) * 0.1
            follower.style.left = `${followerX}px`
            follower.style.top = `${followerY}px`

            requestAnimationFrame(animate)
        }

        // Add hover listeners to interactive elements
        const addHoverListeners = () => {
            const targets = document.querySelectorAll(
                'a, button, .service-card, .case-card, .pricing-card, input, select, textarea'
            )

            targets.forEach((target) => {
                target.addEventListener('mouseenter', () => setIsHovering(true))
                target.addEventListener('mouseleave', () => setIsHovering(false))
            })
        }

        document.addEventListener('mousemove', handleMouseMove)
        animate()

        // Add hover listeners after a short delay to ensure DOM is ready
        setTimeout(addHoverListeners, 100)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <>
            <div
                ref={cursorRef}
                className={`cursor ${isHovering ? 'hover' : ''}`}
                id="cursor"
            />
            <div
                ref={followerRef}
                className={`cursor-follower ${isHovering ? 'hover' : ''}`}
                id="cursor-follower"
            />
        </>
    )
}

export default CustomCursor
