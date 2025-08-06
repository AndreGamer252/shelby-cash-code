import { Badge } from "@/components/ui/badge";

const EbookHeader = () => {
  return (
    <div className="text-center space-y-6 mb-12">
      <Badge variant="outline" className="border-primary bg-primary/10 text-primary font-medium px-4 py-2">
        📘 EBOOK EXCLUSIVO
      </Badge>
      
      <h1 className="font-shelby text-4xl md:text-6xl font-bold text-primary leading-tight">
        COMO CONSEGUIR
        <br />
        <span className="text-shelby-green-light">CLIENTES PARA EMPRÉSTIMO</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
        Um Guia Prático e Direto
      </p>
      
      <div className="relative max-w-2xl mx-auto">
        <div className="bg-card border border-primary/20 rounded-lg p-6 shadow-elegant">
          <blockquote className="text-lg md:text-xl italic text-foreground font-medium">
            "No fim do dia, pessoas fazem negócio com pessoas em quem confiam. Seja essa pessoa."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default EbookHeader;