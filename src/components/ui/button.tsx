import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? SlotButton : "button";
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-500 disabled:pointer-events-none disabled:opacity-50",
          {
            default: "bg-violet-600 text-white shadow hover:bg-violet-700",
            outline: "border border-white/20 bg-transparent text-white shadow-sm hover:bg-white/10",
            ghost: "text-white hover:bg-white/10",
            secondary: "bg-white/10 text-white shadow-sm hover:bg-white/20",
          }[variant],
          {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10.5 rounded-md px-6 text-base",
          }[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// Simple slot-like component for asChild pattern
const SlotButton = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, ...props }, ref) => {
    if (React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
        ...props,
        ref,
        className: cn((props as Record<string, unknown>).className as string, (children.props as Record<string, unknown>).className as string),
      });
    }
    return <button ref={ref} {...props}>{children}</button>;
  }
);
SlotButton.displayName = "SlotButton";

export { Button };
