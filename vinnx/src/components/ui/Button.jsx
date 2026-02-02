function Button({
    children,
    variant = 'primary',
    size = 'default',
    href,
    type = 'button',
    fullWidth = false,
    disabled = false,
    onClick,
    ...props
}) {
    const baseClass = 'btn'
    const variantClass = `btn-${variant}`
    const sizeClass = size === 'large' ? 'btn-large' : ''
    const widthClass = fullWidth ? 'btn-full' : ''

    const classes = [baseClass, variantClass, sizeClass, widthClass]
        .filter(Boolean)
        .join(' ')

    if (href) {
        return (
            <a
                href={href}
                className={classes}
                {...props}
            >
                {children}
            </a>
        )
    }

    return (
        <button
            type={type}
            className={classes}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
