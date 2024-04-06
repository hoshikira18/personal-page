import "@/app/styles/animation/pan.css"

interface PanProps {
    children?: React.ReactNode,
    className?: string
}

const Pan = ({ children, className }: PanProps) => {
    return (
        <div className={`${className} pan`}>
            {children}
        </div>
    )
}

export default Pan