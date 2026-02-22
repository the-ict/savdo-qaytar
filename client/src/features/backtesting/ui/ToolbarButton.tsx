import { Button } from "@/shared/ui/button";
import { LucideIcon } from "lucide-react";

const ToolbarButton = ({
    icon: Icon,
    tooltip,
    onClick,
    active,
    isDanger,
}: {
    icon: LucideIcon;
    tooltip: string;
    onClick: () => void;
    active?: boolean;
    isDanger?: boolean;
}) => (
    <Button
        variant="ghost"
        size="icon"
        className={`h-8 w-8 rounded-lg ${active ? 'bg-white/10 text-white' : 'text-muted-foreground hover:bg-white/5'} ${isDanger ? 'hover:text-red-500' : ''}`}
        onClick={onClick}
        title={tooltip}
    >
        <Icon className="size-4" />
    </Button>
);

export default ToolbarButton;