import { Container } from "./styles";
import {Summary} from "./Summary";
import {TransactionsTable} from "./transactionsTable";

export function Dashboard() {
    return(
      <Container>
          <Summary/>
          <TransactionsTable/>
      </Container>
    );
}