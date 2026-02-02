function Button({
    children,
    variant = 'primary',
    size = 'default',
    href,
    fullWidth,
    type = 'button',
    onClick
}) {
    const classes = [
        'btn',
        `btn-${variant}`,
        size === 'large' && 'btn-large',
        fullWidth && 'btn-fullwidth',
    ].filter(Boolean).join(' ')

    if (href) {
        return (
            <a href={href} className={classes}>
                {children}
            </a>
        )
    }

    return (
        <button type={type} className={classes} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
