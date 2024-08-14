import { useState } from "react";
import s from "./App.module.scss";
import Container from "../Container/Container";
import FormIpv4 from "../FormIpv4/FormIpv4";
import FormIpv6 from "../FormIpv6/FormIpv6";
import TableIpv4 from "../TableIpv4/TableIpv4";
import TableIpv6 from "../TableIpv6/TableIpv6";

function App() {
  const [dataArray, setDataArray] = useState([]);
  const [dataArray2, setDataArray2] = useState([]);
  return (
    <Container>
      <div className={s.div}>
        <div className={s.divForms}>
          <FormIpv4 setData={setDataArray} />
          <TableIpv4 data={dataArray} />
        </div>
        <div>
          <FormIpv6 setData={setDataArray2} />
          <TableIpv6 data={dataArray2} />
        </div>
      </div>
    </Container>
  );
}

export default App;
