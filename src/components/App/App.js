import { useState } from "react";
import s from './App.module.scss'
import Container from "../Container/Container";
import Form from "../Form/Form";
import Table from "../Table/Table";

function App() {
  const [dataArray, setDataArray] = useState([]);

  return (
    <Container>
      <div className={s.div}>
        <Form setData={setDataArray} />
        <Table data={dataArray} />
      </div>
    </Container>
  );
}

export default App;
