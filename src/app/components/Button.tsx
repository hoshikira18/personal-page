import Link from "next/link";
import FadeIn from "./animation/Fadein";
interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  newTab?: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  href,
  newTab,
  className,
  onClick,
}: ButtonProps) => {
  let ComponentType: any = "button";
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
    <FadeIn className={`${className}`}>
      <ComponentType
        onClick={onClick}
        className={`group relative w-full `}
        {...linkProps}
      >
        <div className="relative z-40 h-full w-full -translate-x-1 -translate-y-1 bg-white p-4 text-center text-base font-medium transition-all group-hover:translate-x-1 group-hover:translate-y-1">
          {children}
        </div>
        <div className="absolute -right-1 left-1 top-1 z-10 h-full w-full bg-gradient-to-br from-secondary to-primary p-4"></div>
      </ComponentType>
    </FadeIn>
  );
};
export default Button;
