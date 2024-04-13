import "@/app/styles/animation/fadeout.css"

interface FadeoutProps {
    children?: React.ReactNode,
    className?: string
}

const Fadeout = ({ children, className }: FadeoutProps) => {
    return (
        <div className={`${className} fade-out`}>
            {children}
        </div>
    )
}

export default Fadeout