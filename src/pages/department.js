import React, { useEffect, useState } from "react";
import axios from "axios";
import "./department.css";
import Header from "../component/header";
export default function Department() {
  const [listProduction, setListproduction] = useState([]);
  const [listRh, setListrh] = useState([]);
  const [listFinanciee, setListfinaciee] = useState([]);

  useEffect(() => {
    const data = async () => {
      await axios
        .get(
          "http://localhost:3030/store/sparql?query=PREFIX+ns%3A%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fyosra%2Fontologies%2F2021%2F9%2Funtitled-ontology-6%23%3E%0APREFIX+rdf%3A%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0A%0A%0A%0ASELECT+++%3Fnom+%3Fcin+%3Ffonction%0Awhere+%7B%0A%3Fpersonne+rdf%3Atype+ns%3ADirecteur_de_production+.%0A%3Fpersonne+ns%3Atravaillesouslememedepartement+%3Fcollegue+.%0A%3Fcollegue+ns%3ANOM-Complet+%3Fnom+.%0A%3Fcollegue+ns%3ACIN+%3Fcin+.%0A%3Fcollegue+ns%3AFonction+%3Ffonction+.%0A%0A%7D%09&output=json"
        )
        .then((res) => {
          setListproduction(res.data.results.bindings);
        });

      await axios
        .get(
          "http://localhost:3030/store/sparql?query=PREFIX+ns%3A%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fyosra%2Fontologies%2F2021%2F9%2Funtitled-ontology-6%23%3E%0APREFIX+rdf%3A%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0A%0A%0A%0ASELECT+++%3Fnom+%3Fcin+%3Ffonction%0Awhere+%7B%0A%3Fpersonne+rdf%3Atype+ns%3ADirecteur_RH+.%0A%0A%3Fpersonne+ns%3Atravaillesouslememedepartement+%3Fcollegue+.%0A%3Fcollegue+ns%3ANOM-Complet+%3Fnom+.%0A%3Fcollegue+ns%3ACIN+%3Fcin+.%0A%3Fcollegue+ns%3AFonction+%3Ffonction+.%0A%0A%7D%09&output=json"
        )
        .then((res) => {
          setListrh(res.data.results.bindings);
        });

      await axios
        .get(
          "http://localhost:3030/store/sparql?query=PREFIX+ns%3A%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fyosra%2Fontologies%2F2021%2F9%2Funtitled-ontology-6%23%3E%0APREFIX+rdf%3A%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0A%0A%0A%0ASELECT+++%3Fnom+%3Fcin+%3Ffonction%0Awhere+%7B%0A%3Fpersonne+rdf%3Atype+ns%3ADirecteur_financier+.%0A%0A%3Fpersonne+ns%3Atravaillesouslememedepartement+%3Fcollegue+.%0A%3Fcollegue+ns%3ANOM-Complet+%3Fnom+.%0A%3Fcollegue+ns%3ACIN+%3Fcin+.%0A%3Fcollegue+ns%3AFonction+%3Ffonction+.%0A%0A%7D%09&output=json"
        )
        .then((res) => {
          setListfinaciee(res.data.results.bindings);
        });
    };
    data();
    console.log("====================================");
    console.log(listFinanciee);
    console.log("====================================");
  }, []);
  return (
    <div className="body">
      <Header />
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>
        {" "}
        Department Finance{" "}
      </h1>
      <table class="styled-table">
        <thead>
          <tr>
            <th>nom</th>
            <th>cin</th>
            <th>fonction</th>
          </tr>
        </thead>
        {listFinanciee.map((e) => (
          <tbody>
            <tr class="active-row">
              <td>{e.nom.value}</td>
              <td>{e.cin.value}</td>
              <td>{e.fonction.value}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>
        {" "}
        Department Production{" "}
      </h1>
      <table class="styled-table">
        <thead>
          <tr>
            <th>nom</th>
            <th>cin</th>
            <th>fonction</th>
          </tr>
        </thead>
        {listProduction.map((e) => (
          <tbody>
            <tr>
              <td>{e.nom.value}</td>
              <td>{e.cin.value}</td>
              <td>{e.fonction.value}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>
        {" "}
        Department RH{" "}
      </h1>
      <table class="styled-table">
        <thead>
          <tr>
            <th>nom</th>
            <th>cin</th>
            <th>fonction</th>
          </tr>
        </thead>
        {listRh.map((e) => (
          <tbody>
            <tr class="active-row">
              <td>{e.nom.value}</td>
              <td>{e.cin.value}</td>
              <td>{e.fonction.value}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
