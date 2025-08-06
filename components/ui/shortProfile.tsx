import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import userPlaceholder from "@/images/Portrait_Placeholder.png";
import { cn } from "@/lib/utilities/ctx";
import Image from "next/image";

const shortProfileVariants = cva(
  "inline-flex items-center bg-gray-900 p-2 rounded-lg flex items-center text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "w-22",
        
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ShortProfileProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof shortProfileVariants> {
  size?: number; // make it optional
}

const ShortProfile = React.memo(function ShortProfile({
  className,
  variant,
  size = 22,
  ...props
}: ShortProfileProps) {
  return (
    <div
      className={cn(shortProfileVariants({ variant }), className)}
      {...props}
    >
      <Image
        src={userPlaceholder}
        alt="User Profile Picture"
        width={size}
        height={size}
        className="rounded-full object-cover"
        priority
      />
      <span className="w-full ml-4">{"parsa"}</span>
    </div>
  );
});

export { ShortProfile, shortProfileVariants };
