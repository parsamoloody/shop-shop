'use client';

import { cn } from '@/lib/utilities/ctx';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

type CardItem = {
  description: string;
};

const cardVariants = cva(
  'rounded-md p-4 transition-colors cursor-pointer group',
  {
    variants: {
      variant: {
        default:
          'flex-cols justify-center items-center bg-white border border-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-secondary  hover:bg-secondary',
        outlined:
          'border border-gray-300 bg-transparent hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800',
        filled:
          'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700',
      },
      size: {
        default: 'w-40',
        sm: 'w-32',
        lg: 'w-56',
      },
      selected: {
        true: 'ring-2 ring-secondary dark:ring-secondary/80',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      selected: false,
    },
  }
);

export interface SelectActionCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  card: CardItem;
}

const Card = React.forwardRef<HTMLDivElement, SelectActionCardProps>(
  ({ card, children, variant, size, selected, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, size, selected, className }))}
        {...props}
      >
        <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {children}
        </div>
        <p className="text-gray-600 text-center group-hover:text-[#f5f5f5] dark:text-gray-400 text-md mt-2 ">
          {card.description}
        </p>
      </div>
    );
  }
);

Card.displayName = 'Card';

export { Card, cardVariants };
