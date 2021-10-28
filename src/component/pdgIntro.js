import React, { useEffect, useState } from "react";
import pdgLogo from "../assets/img/pdg.jpg";
import axios from "axios";
function PdgIntro() {
  const [pdg, setPdg] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(
          "http://localhost:3030/store/sparql?query=PREFIX+ns%3A%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fyosra%2Fontologies%2F2021%2F9%2Funtitled-ontology-6%23%3E%0APREFIX+rdf%3A%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0A%0A%0A%0ASELECT+%3Fpersonne+%3Fnom+%3FCIN+%3FFonction%0Awhere+{%0A%3Fpersonne+rdf%3Atype+ns%3APDG+.%0A%3Fpersonne+ns%3ANOM-Complet+%3Fnom++.%0A%3Fpersonne+ns%3ACIN+%3FCIN++.%0A%3Fpersonne+ns%3AFonction+%3FFonction++.%0A%0A}%09%0A&output=json"
        )
        .then((res) => {
          setPdg(res.data.results.bindings);
          console.log("====================================");
          console.log(res);
          console.log("====================================");
        });

      console.log("====================================");
      console.log(pdg);

      console.log("====================================");
    };
    fetch();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <img src={pdgLogo} alt="" />
      <div
        style={{
          alignItems: "center",
          textAlign: "center",
          paddingTop: "200px",
        }}
      >
        {pdg.map((e) => (
          <div>
            <h1> {e.nom.value}</h1>
            <h2> {e.Fonction.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PdgIntro;
