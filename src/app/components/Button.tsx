import Link from "next/link";
import FadeIn from "./animation/Fadein";
interface ButtonProps {
    children: React.ReactNode,
    href?: string,
    newTab?: string,
    className?: string,
    onClick?: () => {},
}

const Button = ({ children, href, newTab, className, onClick }: ButtonProps) => {
    let ComponentType: any = 'button';
    let linkProps = {};
    let target;
    if (newTab) {
        target = "_blank";
    }
    if (href) {
        ComponentType = Link;
        linkProps = { href, target };
    }
    return (
        <FadeIn
            className={`${className}`}
        >
            <ComponentType
                onClick={onClick}
                className={`group relative w-full`}
                {...linkProps}
            >

                <div className="relative z-40 bg-white p-4 w-full h-full text-center transition-all -translate-x-1 -translate-y-1 group-hover:translate-x-1 group-hover:translate-y-1 text-base font-medium">{children}</div>
                <div className="absolute top-1 left-1 w-full h-full -right-1 bg-gradient-to-br from-secondary to-primary p-4 z-10"></div>

            </ComponentType>
        </FadeIn>
    )
}
export default Button;