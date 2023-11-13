import React, { useEffect, useState } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
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

    if (
      domain.trim() === "" ||
      ipAdress.trim() === "" ||
      arrayWords === ""
    ) {
      Notify.failure(`Fill in the fields before adding`);
      return;
    }

    const data = {
      domain: domain,
      ipAdress: ipAdress,
      arrayWords: arrayWords,
    };
    setData(data);
    return data;
  }

  return (
    <>
      <form
        onSubmit={(e) => handlerSubmit(e)}
        className={s.form}
      >
        <label className={s.label}>
          <p>Domain</p>
          <input
            className={s.input}
            name="domain"
            type="text"
            placeholder="example: google.com"
            value={domain}
            onChange={handlerChange}
          />
        </label>
        <label className={s.label}>
          <p>Ip</p>
          <input
            className={s.input}
            name="ipAdress"
            placeholder="127.00.00.7"
            value={ipAdress}
            type="text"
            onChange={handlerChange}
          />
        </label>
        <label className={s.label}>
          <p>Your words (only space)</p>
          <input
            className={s.input}
            name="words"
            value={words}
            placeholder="first two three four"
            type="text"
            onChange={handlerChange}
          />
        </label>
        <button className={`${s.btn} ${s.btnSubmit}`}>Submit</button>
      </form>
    </>
  );
}

export default Form;
