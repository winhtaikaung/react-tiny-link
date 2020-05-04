import * as React from 'react'

export interface HoverProps extends React.HTMLProps<HTMLDivElement> {
    constant: React.ReactNode
}

export const Hover: React.FC<HoverProps> = ({
    constant,
    children,
    ...divProps
}: HoverProps) => {
    const [open, setOpen] = React.useState<boolean>(false)

    /** toggle `open` value */
    const toggleOpen = React.useCallback(() => {
        setOpen(old => !old)
    }, [])

    return (
        <div onMouseEnter={toggleOpen} onMouseLeave={toggleOpen} {...divProps}>
            {constant}
            {open && children}
        </div>
    )
}
