import React from "react";
import s from "./Table.module.scss";
import { Notify } from "notiflix/build/notiflix-notify-aio";

function Table({ data }) {
  const { arrayWords, domain, ipAdress } = data;

  const exportToTxt = () => {
    let txtContent = arrayWords
      .map((word) => `${word}.${domain}. 1 IN A ${ipAdress}`)
      .join("\n");
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(txtContent)
    );
    element.setAttribute("download", "table.txt");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    Notify.success("Downloaded file");
  };
  function getSubdomain() {
    if (arrayWords && domain) {
      const result = arrayWords.map((word) => {
        return `${word}.${domain}`;
      });
      console.log(result);
      return result;
    }
    return "";
  }

  function copyToClipboard() {
    try {
      const text = getSubdomain();
      if (text.length < 1) {
        throw Error();
      }
      navigator.clipboard.writeText(text);
      Notify.success("Text copied");
    } catch {
      Notify.failure("Error with copied this text");
    }
  }

  return (
    <>
      <div className={s.copyBlock}>
        <h3 className={s.h3}>Array your subdomain</h3>
        <textarea
          value={getSubdomain()}
          className={s.textarea}
          readOnly
        ></textarea>
        <button
          disabled={!getSubdomain().length > 0 ? true : false}
          onClick={copyToClipboard}
          className={`${s.btnCopy} ${s.btn}`}
        >
          Copy all
        </button>
      </div>
      <button
        disabled={!getSubdomain().length > 0 ? true : false}
        onClick={exportToTxt}
        className={`${s.btn} ${s.btnExport}`}
      >
        Export to TXT
      </button>

      {
        <table className={s.table}>
          <thead>
            <tr className={s.tableHead}>
              <th className={s.th}>Words</th>
              <th className={s.th}>Domain</th>
              <th className={s.th}>IP</th>
            </tr>
          </thead>

          <tbody>
            {arrayWords ? (
              arrayWords.map((e, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td className={s.td}>{e}</td>
                      <td className={s.td}>{`${e}.${domain}`}</td>
                      <td className={s.td}>{ipAdress}</td>
                    </tr>
                  </>
                );
              })
            ) : (
              <tr
                key="skeleton"
                className={s.skeleton}
              >
                <td className={s.skeletonTd}> </td>
                <td className={s.skeletonTd}>Not Found</td>
                <td className={s.skeletonTd}> </td>
              </tr>
            )}
          </tbody>
        </table>
      }
    </>
  );
}

export default Table;
