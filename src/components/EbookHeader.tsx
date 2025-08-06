import { Badge } from "@/components/ui/badge";

const EbookHeader = () => {
  return (
    <div className="text-center space-y-6 mb-12">
      <Badge variant="outline" className="border-primary bg-primary/10 text-primary font-medium px-4 py-2">
        📘 EBOOK EXCLUSIVO
      </Badge>
      
      <h1 className="font-shelby text-4xl md:text-6xl font-bold text-primary leading-tight">
        O MANUAL SHELBY
        <br />
        <span className="text-shelby-green-light">DO DINHEIRO ESPERTO</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
        Como emprestar dinheiro com inteligência, evitar calotes e dominar o jogo financeiro das ruas
      </p>
      
      <div className="relative max-w-2xl mx-auto">
        <div className="bg-card border border-primary/20 rounded-lg p-6 shadow-elegant">
          <blockquote className="text-lg md:text-xl italic text-foreground font-medium">
            "Se você controla o crédito... você controla o bairro."
          </blockquote>
          <cite className="block mt-3 text-primary font-semibold">
            — Thomas Shelby (ou quase isso)
          </cite>
        </div>
      </div>
    </div>
  );
};

export default EbookHeader;