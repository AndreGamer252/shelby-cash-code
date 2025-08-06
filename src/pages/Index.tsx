import EbookHeader from "@/components/EbookHeader";
import ChapterCard from "@/components/ChapterCard";
import TableCard from "@/components/TableCard";
import QuoteBlock from "@/components/QuoteBlock";
import HighlightBox from "@/components/HighlightBox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
            {/* Chapter 1 */}
            <ChapterCard
              chapter="CAPÍTULO 1"
              title="CAPITAL INICIAL: O COMEÇO DE TUDO"
              icon="🕴️"
              content={
                <div className="space-y-6">
                  <p className="text-lg">
                    Quem te disse que é preciso ser rico pra emprestar dinheiro... <strong>mentiu</strong>.
                  </p>
                  
                  <p>
                    Os grandes banqueiros começaram com pouco — o que os diferenciou foi o método, não o montante.
                    E nesse jogo, o mais inteligente não é quem tem mais dinheiro, mas quem sabe fazer o dinheiro trabalhar.
                  </p>

                  <HighlightBox title="💸 Comece com o que tem" variant="success">
                    <p>
                      Com R$500 no bolso, você pode operar pequenos empréstimos, como R$100, R$200 ou R$300, com juros mensais.
                      Essa é a margem usada por muitas financeiras (inclusive as que cobram mais de 15% ao mês de forma legal).
                    </p>
                  </HighlightBox>

                  <QuoteBlock quote="Não existe pequeno negócio, existe pequena visão." />

                  <p>
                    O segredo está na frequência, não na quantia. Um empréstimo pequeno, quando bem estruturado, vira lucro recorrente.
                  </p>

                  <HighlightBox title="Exemplo prático:" variant="info">
                    <p>Você empresta R$1.000 para 5 pessoas → R$5.000 no total.</p>
                    <p>Em 30 dias, dependendo do seu juros, seu dinheiro está na lua! Hahaha</p>
                    <p>Lucro pesado, sem sair de casa, sem precisar abrir empresa.</p>
                    <p>Mas começa devagar, gira o capital, reinveste. Você não é agiota. É estrategista.</p>
                  </HighlightBox>

                  <HighlightBox title="💰 Fontes criativas de capital" variant="warning">
                    <p><strong>FGTS parado de um amigo/parente:</strong> Ofereça a ele uma % ao mês pelo valor emprestado. Ele pode ganhar mais que a poupança e você gira o dinheiro (com dinheiro dos outros).</p>
                    <p><strong>Venda o que não usa:</strong> Ferramentas, eletrônico antigo, roupas de marca, celular velho e transforme em capital.</p>
                    <p><strong>Antecipe vendas do seu negócio:</strong> Tem um mercadinho, loja ou salão? Use parte do caixa como capital rotativo.</p>
                  </HighlightBox>

                  <HighlightBox title="⚔️ Regra de ouro:" variant="danger">
                    <QuoteBlock quote="Nunca coloque mais de 30% do que você tem em jogo. Tem R$10.000? No máximo R$3.000 emprestado. O resto é retaguarda. Quando você tiver fiéis pagantes, você empresta mais!" />
                  </HighlightBox>
                </div>
              }
            />

            {/* Chapter 2 */}
            <ChapterCard
              chapter="CAPÍTULO 2"
              title="SUA APARÊNCIA DIGITAL: O CARTÃO DO JOGO"
              icon="🪪"
              content={
                <div className="space-y-6">
                  <p className="text-lg font-semibold text-primary">Sua presença diz tudo!</p>
                  <p>Um cartão digital faz esse papel.</p>

                  <HighlightBox title="Por que cartão digital?" variant="success">
                    <ul className="list-disc pl-6 space-y-2">
                      <li>É gratuito</li>
                      <li>Pode ser compartilhado no WhatsApp, Instagram, grupos do Facebook</li>
                      <li>Fácil de atualizar</li>
                      <li>Profissional</li>
                    </ul>
                  </HighlightBox>

                  <HighlightBox title="O que um cartão poderoso precisa ter:" variant="info">
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Nome comercial ou profissional (Ex: "Crédito Rápido SP")</li>
                      <li>WhatsApp de contato (Use um somente para esse negócios)</li>
                      <li>Uma frase curta e direta</li>
                      <li>Um visual limpo (nada de memes, emojis ou fotos na praia)</li>
                    </ul>
                  </HighlightBox>

                  <HighlightBox title="Frases que funcionam:" variant="warning">
                    <ul className="list-disc pl-6 space-y-2">
                      <li>"Dinheiro Rápido. Sem Burocracia."</li>
                      <li>"Confiança é a Moeda Mais Valiosa."</li>
                      <li>"A solução rápida para seu financeiro."</li>
                    </ul>
                  </HighlightBox>

                  <p>
                    Você pode usar o Canva (app gratuito) para criar o seu cartão em 10 minutos.
                    E lembre-se: imagem importa. O cliente vai decidir se confia em você em segundos.
                  </p>

                  <p className="text-sm text-muted-foreground italic">
                    (Não use sua foto no cartão digital, nem seu nome de preferência)
                  </p>
                </div>
              }
            />

            {/* Chapter 3 */}
            <ChapterCard
              chapter="CAPÍTULO 3"
              title="GATILHOS QUE DOMINAM A MENTE DO CLIENTE"
              icon="🧠"
              content={
                <div className="space-y-6">
                  <p>
                    Não é só sobre dinheiro.
                    É sobre como você faz o cliente sentir.
                  </p>

                  <HighlightBox title="Você está lidando com pessoas que:" variant="info">
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Estão no aperto</li>
                      <li>Têm vergonha de pedir dinheiro</li>
                      <li>Têm medo de serem expostas</li>
                    </ul>
                    <p className="mt-4 font-medium">Use isso com inteligência e respeito.</p>
                  </HighlightBox>

                  <HighlightBox title="Palavras com poder:" variant="success">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p><strong>"Aprovação na hora"</strong> → reduz ansiedade, gera ação rápida</p>
                        <p><strong>"Sem consulta ao SPC"</strong> → alívio para quem está negativado</p>
                      </div>
                      <div>
                        <p><strong>"Primeira vez com juros reduzidos"</strong> → atrai e fideliza</p>
                        <p><strong>"Confidencialidade total"</strong> → evita constrangimentos</p>
                      </div>
                    </div>
                  </HighlightBox>

                  <p>
                    Essas palavras funcionam como iscas psicológicas.
                    Mas seja sincero: não prometa o que não pode cumprir.
                    Mentira pode trazer lucro hoje, mas prejuízo amanhã.
                  </p>
                </div>
              }
            />

            {/* Chapter 4 */}
            <ChapterCard
              chapter="CAPÍTULO 4"
              title="SEGURANÇA ESTRATÉGICA: NÃO CAIA EM ARMADILHAS"
              icon="🔐"
              content={
                <div className="space-y-6">
                  <p>
                    Neste jogo, os amadores quebram.
                    E quem quebra... vira lenda nos grupos de WhatsApp.
                  </p>

                  <p>Você precisa ter regras e métodos. Aqui vão algumas:</p>

                  <HighlightBox title="Regras práticas:" variant="warning">
                    <div className="space-y-4">
                      <div>
                        <p><strong>1. Sempre peça documento oficial com foto.</strong></p>
                        <p className="text-sm pl-4">CNH ou RG com selfie.</p>
                      </div>
                      
                      <div>
                        <p><strong>2. Nunca empreste baseado só em áudio.</strong></p>
                        <p className="text-sm pl-4">Golpistas fingem voz de conhecidos.</p>
                        <p className="text-sm pl-4">Tudo precisa ser documentado: texto, foto, prints de conversas.</p>
                      </div>
                      
                      <div>
                        <p><strong>3. Tenha um número exclusivo para o negócio.</strong></p>
                        <p className="text-sm pl-4">Use WhatsApp Business.</p>
                        <p className="text-sm pl-4">Separar vida pessoal e negócio evita exposição e confusão.</p>
                      </div>
                      
                      <div>
                        <p><strong>4. Crie contrato simples impresso.</strong></p>
                        <p className="text-sm pl-4">(Foi disponibilizado no grupo do Telegram um modelo para você baixar, imprimir e usar)</p>
                      </div>
                    </div>
                  </HighlightBox>
                </div>
              }
            />

            {/* Chapter 5 */}
            <ChapterCard
              chapter="CAPÍTULO 5"
              title="O PERFIL DE CLIENTES QUE PAGAM (E OS QUE SOMEM)"
              icon="🎯"
              content={
                <div className="space-y-6">
                  <QuoteBlock quote="O bom cliente é como um soldado leal: ele paga, volta e ainda te indica." />

                  <div className="grid md:grid-cols-2 gap-8">
                    <HighlightBox title="✅ Clientes que pagam:" variant="success">
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Pedreiros:</strong> Trabalham por diária, giram dinheiro</li>
                        <li><strong>Motoristas de aplicativo:</strong> Precisam do carro rodando — crédito vira combustível</li>
                        <li><strong>Cabeleireiras e barbeiros:</strong> Vendem todo dia</li>
                        <li><strong>Vendedores de loja:</strong> Salário fixo + comissão</li>
                        <li><strong>Costureiras e cozinheiras:</strong> Pequenos negócios = entrada e saída diárias</li>
                      </ul>
                    </HighlightBox>

                    <HighlightBox title="❌ Clientes que somem:" variant="danger">
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Jogadores compulsivos (Apostadores de tigrinho)</li>
                        <li>Gente que "muda de número toda semana"</li>
                        <li>Pessoas que já devem pra outros</li>
                        <li>Quem "pede pra outra pessoa" — é cilada!</li>
                        <li>Viciados em drogas, álcool, etc...</li>
                      </ul>
                    </HighlightBox>
                  </div>

                  <HighlightBox title="💬 Dica:" variant="info">
                    <p>Analise o comportamento mais do que as palavras.</p>
                    <p className="font-medium">Gente que fala demais... normalmente paga de menos.</p>
                  </HighlightBox>
                </div>
              }
            />

            {/* Chapter 6 */}
            <ChapterCard
              chapter="CAPÍTULO 6"
              title="ANÁLISE DE RISCO: DETETIVE DO CRÉDITO"
              icon="🔍"
              content={
                <div className="space-y-6">
                  <p>Antes de soltar dinheiro, investigue. Sempre.</p>

                  <HighlightBox title="Checklist de confiança:" variant="warning">
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Documento com foto</li>
                      <li>Comprovante de endereço</li>
                      <li>Pegue uma garantia real (celular, aliança, ferramenta) dependendo do valor, moto, carro, etc...</li>
                    </ul>
                  </HighlightBox>

                  <HighlightBox title="Pesquisa rápida:" variant="info">
                    <p>Redes sociais (tem trabalho? tem filhos? parece confiável?)</p>
                  </HighlightBox>

                  <div className="text-center">
                    <Badge variant="outline" className="text-lg px-4 py-2 border-primary text-primary">
                      💡 Você precisa agir como um mini-analista de crédito.
                    </Badge>
                    <p className="mt-4">Não é sobre julgar. É sobre proteger seu dinheiro.</p>
                  </div>
                </div>
              }
            />

            {/* Chapter 7 */}
            <ChapterCard
              chapter="CAPÍTULO 7"
              title="JUROS JUSTOS, LUCRO REAL"
              icon="💸"
              content={
                <div className="space-y-6">
                  <p>
                    Você quer lucro, não problema.
                  </p>
                  <p>
                    A melhor forma de crescer é com juros justos e estratégia de longo prazo.
                  </p>

                  <TableCard />

                  <HighlightBox title="📌 Use garantias:" variant="success">
                    <p>muitos pedem uma garantia com valor equivalente ou no mínimo 50% do valor emprestimo:</p>
                    <div className="bg-primary/10 p-4 rounded-lg mt-4">
                      <p>Emprestou R$1.000? Pede uma garantia de 50% do valor como sinal.</p>
                      <p>Se pagar, devolve.</p>
                      <p>Se sumir, você minimiza prejuízo.</p>
                    </div>
                  </HighlightBox>

                  <div className="text-center">
                    <Badge variant="outline" className="text-lg px-4 py-2 border-primary text-primary">
                      🧾 Simples, direto, justo.
                    </Badge>
                  </div>
                </div>
              }
            />

            {/* Chapter 8 */}
            <ChapterCard
              chapter="CAPÍTULO 8"
              title="CONTROLE TOTAL = LUCRO PREVISÍVEL"
              icon="📈"
              content={
                <div className="space-y-6">
                  <p>
                    Não importa se você é high-tech ou do caderninho.
                  </p>
                  <p className="font-semibold text-primary">
                    Quem controla os números, domina o jogo.
                  </p>

                  <HighlightBox title="Planilha ou caderno deve ter:" variant="info">
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Nome</li>
                        <li>Telefone</li>
                        <li>Data do empréstimo</li>
                        <li>Valor</li>
                        <li>Parcelas</li>
                      </ul>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Data/hora de vencimento</li>
                        <li>Data/hora de pagamento (por parcela)</li>
                        <li>Garantia</li>
                        <li>Observações</li>
                      </ul>
                    </div>
                  </HighlightBox>

                  <HighlightBox title="Ferramentas recomendadas:" variant="success">
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Google Sheets</strong> (online e gratuito)</li>
                      <li><strong>Caderno tradicional</strong> (mas capricha!)</li>
                    </ul>
                  </HighlightBox>

                  <div className="text-center">
                    <Badge variant="outline" className="text-lg px-4 py-2 border-primary text-primary">
                      📌 Anote tudo! Esse é o jogo...
                    </Badge>
                  </div>
                </div>
              }
            />

            {/* Final Chapter */}
            <ChapterCard
              chapter="ENCERRAMENTO"
              title="O CÓDIGO DE UM SHELBY"
              icon="🏁"
              content={
                <div className="space-y-6">
                  <p>Você chegou até aqui. Leu o plano.</p>
                  <p className="font-semibold text-primary">Agora é hora de aplicar.</p>

                  <QuoteBlock 
                    quote="Neste jogo, não ganha quem empresta mais. Ganha quem empresta melhor." 
                  />

                  <div className="grid md:grid-cols-3 gap-6 my-8">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🛡️</div>
                      <p className="font-semibold">Com controle,</p>
                      <p>você evita prejuízo.</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">📋</div>
                      <p className="font-semibold">Com regras,</p>
                      <p>você evita desgastes.</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">👁️</div>
                      <p className="font-semibold">Com visão,</p>
                      <p>você constrói uma base sólida.</p>
                    </div>
                  </div>

                  <div className="bg-gradient-accent p-8 rounded-lg text-center">
                    <p className="text-xl font-bold text-shelby-black mb-4">
                      Você não precisa quebrar regras.
                    </p>
                    <p className="text-lg text-shelby-black">
                      Precisa criar suas próprias.
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-xl font-semibold text-primary">
                      O poder está nas mãos de quem empresta com inteligência.
                    </p>
                  </div>
                </div>
              }
            />
          </div>

          {/* Footer */}
          <div className="mt-24 text-center">
            <div className="w-full h-px bg-gradient-accent mb-12"></div>
            <p className="text-muted-foreground font-shelby text-lg">
              © Manual Shelby do Dinheiro Esperto
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
