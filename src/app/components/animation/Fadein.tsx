import "@/app/styles/animation/fadein.css"

interface FadeInProps {
    children?: React.ReactNode,
    className?: string
}

const FadeIn = ({ children, className }: FadeInProps) => {
    return (
        <div className={`${className} fade-in`}>
            {children}
        </div>
    )
}

export default FadeIn