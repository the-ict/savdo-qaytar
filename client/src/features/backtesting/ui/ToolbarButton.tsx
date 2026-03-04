import React from 'react';
import { cn } from '@/shared/lib/utils';

interface ToolbarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
    active?: boolean;
}

export const ToolbarButton: React.FC<ToolbarButtonProps> = ({
    children,
    icon,
    active,
    className,
    ...props
}) => {
    return (
        <button
            className={cn(
                "flex items-center justify-center gap-2 px-3 py-1.5 rounded-md transition-all duration-200",
                "text-gray-400 hover:text-white hover:bg-white/10",
                active && "text-blue-400 bg-blue-400/10",
                className
            )}
            {...props}
        >
            {icon && <span className="w-5 h-5">{icon}</span>}
            {children && <span className="text-sm font-medium">{children}</span>}
        </button>
    );
};
