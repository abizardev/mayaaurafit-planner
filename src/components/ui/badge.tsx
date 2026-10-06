import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-charcoal text-cloud-card shadow",
        secondary: "border-transparent bg-cloud-card text-ink",
        outline: "text-ink border border-black/10 bg-white/50",
        gold: "bg-amber-100 text-amber-900 border border-amber-200/50",
        green: "bg-emerald-100 text-emerald-800 border border-emerald-200/50",
        blue: "bg-blue-100 text-blue-800 border border-blue-200/50",
        purple: "bg-purple-100 text-purple-800 border border-purple-200/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
