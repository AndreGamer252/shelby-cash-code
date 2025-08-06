import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ChapterCardProps {
  chapter: string;
  title: string;
  content: React.ReactNode;
  icon?: string;
}

const ChapterCard = ({ chapter, title, content, icon }: ChapterCardProps) => {
  return (
    <Card className="bg-card border-primary/20 shadow-elegant hover:shadow-green-glow transition-all duration-300">
      <CardHeader className="space-y-4">
        <div className="flex items-center gap-3">
          {icon && <span className="text-2xl">{icon}</span>}
          <Badge variant="outline" className="border-primary bg-primary/10 text-primary">
            {chapter}
          </Badge>
        </div>
        <CardTitle className="font-shelby text-2xl md:text-3xl text-primary leading-tight">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="prose prose-invert max-w-none">
        <div className="text-foreground space-y-4">
          {content}
        </div>
      </CardContent>
    </Card>
  );
};

export default ChapterCard;