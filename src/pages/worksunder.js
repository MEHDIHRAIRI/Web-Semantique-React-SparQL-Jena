import React, { useState } from "react";

import Select from "@material-ui/core/Select";

import axios from "axios";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import Header from "../component/header";
export default function Worksunder() {
  const [value, setValue] = useState("");
  const [directeur, setDirecteur] = useState([]);
  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
    axios
      .get(
        `http://localhost:3030/store/sparql?query=PREFIX+ns%3A%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fyosra%2Fontologies%2F2021%2F9%2Funtitled-ontology-6%23%3E%0APREFIX+rdf%3A%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0A%0A%0A%0ASELECT+++%3Fnom+%3Fcin+%3Ffonction+%0Awhere+%7B%0A%3Fpersonne+ns%3ANOM-Complet+%3FNOMComplet++.%0AFILTER+(%3FNOMComplet+%3D+%22${e}%22)+%0A%0A%3Fpersonne+ns%3Atravaillesous+%3Fdirector+.%0A%3Fdirector+ns%3ANOM-Complet++%3Fnom+.%0A%3Fdirector+ns%3ACIN+%3Fcin+.%0A%3Fdirector+ns%3AFonction+%3Ffonction+.%0A%0A%7D%09&output=json`
      )
      .then((res) => {
        setDirecteur(res.data.results.bindings);
      });
  };
  console.log("====================================");
  console.log(directeur);
  console.log("====================================");
  return (
    <div className="body">
      <div>
        <Header />
        <div style={{ textAlign: "center", marginTop: "150px" }}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">
              Select employee name
            </InputLabel>
            <Select
              style={{ minWidth: "200px" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={(e) => {
                handleSelect(e.target.value);
              }}
            >
              <MenuItem value={"achref ayari"}>achref ayari</MenuItem>
              <MenuItem value={"faten mahnouch"}>faten mahnouch</MenuItem>
              <MenuItem value={"karim chalouah"}>karim chalouah</MenuItem>
              <MenuItem value={"laila said"}>laila said</MenuItem>
              <MenuItem value={"monia messelmani"}>monia messelmani</MenuItem>
              <MenuItem value={"mouldi Lakhel"}>mouldi Lakhel</MenuItem>
              <MenuItem value={"nabil wetherfi"}>nabil wetherfi</MenuItem>
              <MenuItem value={"sara Abderazzk"}>sara Abderazzk</MenuItem>
              <MenuItem value={"wissal fatnassi"}>wissal fatnassi</MenuItem>
              <MenuItem value={"yosra bouafif"}>yosra bouafif</MenuItem>
              <MenuItem value={"youssef Bayrem"}>youssef Bayrem</MenuItem>
              <MenuItem value={"alya louti"}>alya louti</MenuItem>
              <MenuItem value={"azer malouli"}>azer malouli</MenuItem>
              <MenuItem value={"bechir ben yahia"}>bechir ben yahia</MenuItem>
              <MenuItem value={"chahrazed almia"}>chahrazed almia</MenuItem>
              <MenuItem value={"karima nouni"}>karima nouni</MenuItem>
              <MenuItem value={"khawla Gessmi"}>khawla Gessmi</MenuItem>
              <MenuItem value={"mourad tbib"}>mourad tbib</MenuItem>
              <MenuItem value={"soumaya kaabi"}>soumaya kaabi</MenuItem>
              <MenuItem value={"yassine alouane"}>yassine alouane</MenuItem>
              <MenuItem value={"zehid aamar"}>zehid aamar</MenuItem>
            </Select>
          </FormControl>

          {directeur &&
            directeur.map((e) => (
              <h4>
                le directeur de {value} est: <br /> Nom:
                {e.nom.value} <br /> Cin: {e.cin.value} <br /> Fonction:{" "}
                {e.fonction.value}
              </h4>
            ))}
        </div>
      </div>
    </div>
  );
}
