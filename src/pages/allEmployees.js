import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../component/header";
import "./department.css";
const AllEmployees = () => {
  const [ListEmployee, setListemployee] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost:3030/store/sparql?query=%0APREFIX+ns%3A%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fyosra%2Fontologies%2F2021%2F9%2Funtitled-ontology-6%23%3E%0APREFIX+rdf%3A%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0A%0A%0A%0ASELECT+++%3Fnom+%3Fcin+%3Ffonction+%0Awhere+%7B%0A%0A%3Fpersonne+ns%3ANOM-Complet++%3Fnom+.%0A%3Fpersonne+ns%3ACIN+%3Fcin+.%0A%3Fpersonne+ns%3AFonction+%3Ffonction+.%0A%0A%7D&output=json"
      )
      .then((res) => {
        setListemployee(res.data.results.bindings);
      });
  }, []);
  return (
    <div className="body">
      <Header />
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>
        {" "}
        Store's Employees{" "}
      </h1>
      <table class="styled-table">
        <thead>
          <tr>
            <th>nom</th>
            <th>cin</th>
            <th>fonction</th>
          </tr>
        </thead>
        {ListEmployee.map((e) => (
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
};
export default AllEmployees;
