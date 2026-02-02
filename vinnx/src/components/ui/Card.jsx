function Card({
    children,
    className = '',
    hover = true,
    ...props
}) {
    const baseClass = 'glass'
    const hoverClass = hover ? 'card-hover' : ''

    const classes = [baseClass, hoverClass, className]
        .filter(Boolean)
        .join(' ')

    return (
        <div className={classes} {...props}>
            {children}
        </div>
    )
}

export default Card
