function Marquee({ items, speed = 30, direction = 'left' }) {
    // Duplicate items for seamless loop
    const duplicatedItems = [...items, ...items]

    return (
        <div className="marquee-container">
            <div
                className={`marquee-track marquee-${direction}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {duplicatedItems.map((item, index) => (
                    <div key={index} className="marquee-item">
                        {typeof item === 'string' ? (
                            <span>{item}</span>
                        ) : (
                            item
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Marquee
