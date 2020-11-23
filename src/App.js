import "./App.css";
import React, { useState } from "react";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import Autocomplete from "react-autocomplete";
import Battle from "./components/Battle";

function App() {
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");
  const [search3, setSearch3] = useState("");


  const search=()=>{
      console.log(search1,search2,search3)
  }
  return (
    <BrowserRouter>
      <div className="nav">
        <div className=" search search1">
          <Autocomplete
            getItemValue={(item) => item.label}
            items={[{ label: "apple" }, { label: "banana" }, { label: "pear" }]}
            renderItem={(item, isHighlighted) => (
              <div
                style={{ background: isHighlighted ? "lightgray" : "white" }}
              >
                {item.label}
              </div>
            )}
           
            value={search1}
            onChange={(e) => setSearch1(e.target.value)}
            onSelect={(val) => setSearch1(val)}
          />
        </div>
        <div className="search search2">
          <Autocomplete
            getItemValue={(item) => item.label}
            items={[{ label: "apple" }, { label: "banana" }, { label: "pear" }]}
            renderItem={(item, isHighlighted) => (
              <div
                style={{ background: isHighlighted ? "lightgray" : "white" }}
              >
                {item.label}
              </div>
            )}
            value={search2}
            onChange={(e) => setSearch2(e.target.value)}
            onSelect={(val) => setSearch2(val)}
          />
        </div>
        <div className="search search3">
          <Autocomplete
            getItemValue={(item) => item.label}
            items={[{ label: "apple" }, { label: "banana" }, { label: "pear" }]}
            renderItem={(item, isHighlighted) => (
              <div
                style={{ background: isHighlighted ? "lightgray" : "white" }}
              >
                {item.label}
              </div>
            )}
            value={search3}
            onChange={(e) => setSearch3(e.target.value)}
            onSelect={(val) => setSearch3(val)}
          />
        </div>

        <button className="button0 button1" onClick={()=>search()}>Search</button>
      </div>

      <Switch>
        <Route exact path="/" component={Battle} />
        {/* <Route path="/battle" component={Battle} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
