import EbookHeader from "@/components/EbookHeader";
import ChapterCard from "@/components/ChapterCard";
import QuoteBlock from "@/components/QuoteBlock";
import HighlightBox from "@/components/HighlightBox";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-shelby">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23059669\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      }}></div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <EbookHeader />

          {/* Separator */}
          <div className="w-full h-px bg-gradient-accent my-16"></div>

          {/* Chapters */}
          <div className="space-y-16">
            {/* Página 1: Os Fundamentos */}
            <ChapterCard
              chapter="PÁGINA 1"
              title="OS FUNDAMENTOS"
              icon="🏗️"
              content={
                <div className="space-y-6">
                  <HighlightBox title="A Regra de Ouro" variant="success">
                    <p>
                      No negócio de empréstimo, você não está vendendo dinheiro. Você está vendendo <strong>confiança</strong>. 
                      E confiança se constrói através de <strong>relacionamentos sólidos</strong> e <strong>reputação impecável</strong>.
                    </p>
                  </HighlightBox>

                  <h3 className="text-xl font-bold text-primary mt-8 mb-4">Começe Pelo Óbvio: Seu Círculo Interno</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <HighlightBox title="👨‍👩‍👧‍👦 Familiares" variant="info">
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Comece com parentes próximos que conhecem seu caráter</li>
                        <li>Ofereça condições justas - não abuse da relação familiar</li>
                        <li>Seja transparente sobre taxas e prazos desde o início</li>
                        <li>Lembre-se: um familiar satisfeito vale mais que dez desconhecidos insatisfeitos</li>
                      </ul>
                    </HighlightBox>

                    <HighlightBox title="👥 Amigos de Verdade" variant="info">
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Identifique quem realmente precisa e tem capacidade de pagamento</li>
                        <li>Mantenha a amizade separada do negócio - documentos sempre</li>
                        <li>Seja profissional mesmo sendo pessoal</li>
                        <li>Um amigo que paga em dia vira seu melhor vendedor</li>
                      </ul>
                    </HighlightBox>
                  </div>

                  <HighlightBox title="📈 A Estratégia do Crescimento Controlado" variant="warning">
                    <p className="mb-4">
                      Você não quer ser conhecido como "aquele que empresta para qualquer um". 
                      Você quer ser conhecido como "aquele que resolve problemas de gente séria".
                    </p>
                    <div className="font-semibold">Regras básicas:</div>
                    <ol className="list-decimal pl-6 space-y-1">
                      <li>Sempre documente tudo</li>
                      <li>Conheça a pessoa antes de emprestar</li>
                      <li>Estabeleça limites claros</li>
                      <li>Cobre profissionalmente</li>
                    </ol>
                  </HighlightBox>
                </div>
              }
            />

            {/* Página 2: Expandindo a Rede */}
            <ChapterCard
              chapter="PÁGINA 2"
              title="EXPANDINDO A REDE"
              icon="🌐"
              content={
                <div className="space-y-6">
                  <HighlightBox title="🤝 O Poder das Indicações" variant="success">
                    <p>
                      Quando alguém indica você, está colocando a própria reputação em jogo. Use isso a seu favor.
                    </p>
                  </HighlightBox>

                  <h3 className="text-xl font-bold text-primary mt-8 mb-4">Estratégia "Amigo do Amigo"</h3>
                  
                  <div className="space-y-4">
                    <p>• Peça indicações para clientes satisfeitos</p>
                    <p>• Ofereça incentivos para quem indicar (desconto na próxima operação)</p>
                    <p>• Sempre pergunte: "Conhece alguém que precisa resolver uma situação financeira?"</p>
                  </div>

                  <HighlightBox title="💬 Como Abordar Indicados" variant="info">
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Use o nome de quem indicou: "João me disse que você é pessoa séria..."</li>
                      <li>Seja direto sobre suas condições</li>
                      <li>Explique como funciona seu sistema</li>
                      <li>Deixe claro que indicação não é favor - é negócio</li>
                    </ul>
                  </HighlightBox>

                  <h3 className="text-xl font-bold text-primary mt-8 mb-4">Construindo Sua Reputação</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <HighlightBox title="🏘️ No Bairro/Comunidade" variant="warning">
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Frequente estabelecimentos locais</li>
                        <li>Converse com comerciantes - eles conhecem quem precisa</li>
                        <li>Seja pontual e discreto nos encontros</li>
                        <li>Mantenha aparência profissional</li>
                      </ul>
                    </HighlightBox>

                    <HighlightBox title="🎯 Networking Inteligente" variant="warning">
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Chaveiros, mecânicos, cabeleireiros - pessoas que conversam muito</li>
                        <li>Pequenos comerciantes que conhecem a vizinhança</li>
                        <li>Porteiros e seguranças - eles sabem de tudo</li>
                      </ul>
                    </HighlightBox>
                  </div>

                  <HighlightBox title="⭐ As 5 Regras de Ouro" variant="danger">
                    <ol className="list-decimal pl-6 space-y-2">
                      <li><strong>Análise sempre:</strong> CPF, comprovante de renda, referências</li>
                      <li><strong>Comece pequeno:</strong> Teste com valores baixos primeiro</li>
                      <li><strong>Seja implacável:</strong> Atraso = cobrança imediata</li>
                      <li><strong>Mantenha registro:</strong> Histórico de cada cliente é ouro</li>
                      <li><strong>Cresça devagar:</strong> Prefira 10 clientes bons a 100 ruins</li>
                    </ol>
                  </HighlightBox>

                  <HighlightBox title="💼 O Último Conselho" variant="success">
                    <p>
                      Neste negócio, sua palavra é sua moeda. Uma reputação leva anos para construir e segundos para destruir. 
                      Seja justo, seja firme, seja profissional.
                    </p>
                    <p className="mt-4 font-semibold">
                      <strong>Lembre-se:</strong> Você não está fazendo caridade. Você está oferecendo um serviço. 
                      Cobre por ele adequadamente e entregue com qualidade.
                    </p>
                  </HighlightBox>

                  <QuoteBlock quote="No fim do dia, pessoas fazem negócio com pessoas em quem confiam. Seja essa pessoa." />
                </div>
              }
            />
          </div>

          {/* Footer */}
          <div className="text-center mt-20 py-8 border-t border-primary/20">
            <p className="text-muted-foreground text-sm">
              © 2024 Manual Shelby - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;