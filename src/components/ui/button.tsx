import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer active:scale-[0.98] transition-all duration-150",
  {
    variants: {
      variant: {
        default:
          "bg-charcoal text-cloud-card hover:bg-black shadow-sm",
        pill:
          "bg-[#1f2025] text-[#ebf0f8] hover:bg-[#111215] rounded-full px-5 py-2.5 font-medium shadow-md hover:shadow-lg transition-all",
        outline:
          "border border-black/10 bg-white/70 hover:bg-white text-ink rounded-full",
        secondary:
          "bg-cloud-card text-ink hover:bg-slate-200/80 rounded-full",
        ghost: "hover:bg-black/5 hover:text-ink text-body-gray",
        link: "text-ink underline-offset-4 hover:underline",
        white:
          "bg-white text-charcoal hover:bg-slate-50 shadow-sm rounded-full",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 rounded-full px-3 text-xs",
        lg: "h-12 rounded-full px-8 text-base",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
