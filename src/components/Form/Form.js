import React, { useEffect, useState } from "react";
import s from "./Form.module.scss";

function Form({ setData }) {
  const [domain, setDomain] = useState("");
  const [ipAdress, setIpAdress] = useState("");
  const [words, setWords] = useState(
    "bond manufacturer carve memorial complex stereotype racism patrol assignment profound"
  );
  const [arrayWords, setArrayWords] = useState([]);
  useEffect(() => {
    setArrayWords(() => {
      return words.split(" ");
    });
  }, [words]);

  function handlerChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case "domain":
        setDomain(value);
        break;
      case "words":
        setWords(value);
        break;
      case "ipAdress":
        setIpAdress(value);
        break;
      default:
    }
  }

  function handlerSubmit(e) {
    e.preventDefault();
    const data = {
      domain: domain,
      ipAdress: ipAdress,
      arrayWords: arrayWords,
    };
    setData(data);
    return data;
  }

  return (
    <form
      onSubmit={(e) => handlerSubmit(e)}
      className={s.form}
    >
      <label className={s.label}>
        {" "}
        domain
        <input
          className={s.input}
          name="domain"
          type="text"
          value={domain}
          onChange={handlerChange}
        />
      </label>
      <label className={s.label}>
        Ip
        <input
          className={s.input}
          name="ipAdress"
          value={ipAdress}
          type="text"
          onChange={handlerChange}
        />
      </label>
      <label className={s.label}>
        asdasd
        <input
          className={s.input}
          name="words"
          value={words}
          type="text"
          onChange={handlerChange}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}

export default Form;
