import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TableData {
  tipo: string;
  valor: string;
  prazo: string;
  juros: string;
}

const tableData: TableData[] = [
  {
    tipo: "Novo",
    valor: "R$1.000",
    prazo: "Pagamento até 30 dias",
    juros: "XX%"
  },
  {
    tipo: "Bom histórico (Já pegou 2x)",
    valor: "R$2.000",
    prazo: "Pagamento até 45 dias",
    juros: "-20% da taxa do novo"
  },
  {
    tipo: "Fiel (Já pegou 5x ou mais)",
    valor: "+R$5.000",
    prazo: "Pagamento até 60 dias",
    juros: "50%"
  }
];

const TableCard = () => {
  return (
    <Card className="bg-card border-primary/20 shadow-elegant">
      <CardHeader>
        <CardTitle className="font-shelby text-xl text-primary">
          💸 Tabela de juros prática
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-primary/20">
              <TableHead className="text-primary font-semibold">Tipo de cliente</TableHead>
              <TableHead className="text-primary font-semibold">Valor máximo</TableHead>
              <TableHead className="text-primary font-semibold">Prazo</TableHead>
              <TableHead className="text-primary font-semibold">Juros</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index} className="border-primary/10 hover:bg-primary/5">
                <TableCell className="font-medium text-foreground">{row.tipo}</TableCell>
                <TableCell className="text-foreground">{row.valor}</TableCell>
                <TableCell className="text-foreground">{row.prazo}</TableCell>
                <TableCell className="text-primary font-semibold">{row.juros}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TableCard;