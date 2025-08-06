import { Badge } from "@/components/ui/badge";

interface HighlightBoxProps {
  title?: string;
  children: React.ReactNode;
  variant?: "warning" | "success" | "info" | "danger";
  icon?: string;
}

const HighlightBox = ({ title, children, variant = "info", icon }: HighlightBoxProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "warning":
        return "bg-yellow-500/10 border-yellow-500/30 text-yellow-100";
      case "success":
        return "bg-primary/10 border-primary/30 text-foreground";
      case "danger":
        return "bg-red-500/10 border-red-500/30 text-red-100";
      default:
        return "bg-card border-primary/20 text-foreground";
    }
  };

  return (
    <div className={`p-6 rounded-lg border ${getVariantStyles()} my-6`}>
      {(title || icon) && (
        <div className="flex items-center gap-3 mb-4">
          {icon && <span className="text-2xl">{icon}</span>}
          {title && (
            <Badge variant="outline" className="border-current bg-current/10">
              {title}
            </Badge>
          )}
        </div>
      )}
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
};

export default HighlightBox;