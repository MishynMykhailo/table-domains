import React from "react";
import s from "./Table.module.scss";
function Table({ data }) {
  const { arrayWords, domain, ipAdress } = data;

  const exportToTxt = () => {
    let txtContent = arrayWords
      .map((word) => `${word}.${domain}  1 IN A ${ipAdress}`)
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
  };

  return (
    <>
      {
        <table className={s.table}>
          <tr>
            <th className={s.th}>Words</th>
            <th className={s.th}>Domain</th>
            <th className={s.th}>IP</th>
          </tr>

          {arrayWords ? (
            arrayWords.map((e) => {
              return (
                <>
                  <tr key={e}>
                    <td className={s.td}>{e}</td>
                    <td className={s.td}>{`${e}.${domain}`}</td>
                    <td className={s.td}>{ipAdress}</td>
                  </tr>
                </>
              );
            })
          ) : (
            <tr className={s.skeleton}>
              <td className={s.skeletonTd}> </td>
              <td className={s.skeletonTd}>Not Found</td>
              <td className={s.skeletonTd}> </td>
            </tr>
          )}
        </table>
      }
      <button onClick={exportToTxt}>Export to TXT</button>
    </>
  );
}

export default Table;
