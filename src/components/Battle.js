import React from "react";
import "../styles/Battle.css";

function Battle() {
  return (
    <div className="container">
      <h3 style={{ color: "rgb(200, 197, 197)" }}>TONIGHT'S</h3>
      <p className="heading">BATTLE OF THE BASTARDS</p>
      <div className="card">
        <div className="a">
          <img src="https://i.pinimg.com/originals/5c/20/ab/5c20abe8a3f01b227375a186336fa736.jpg" />
          <h2 className="name">SNOW</h2>
          <p className="subname">Bastard of Winterfell</p>
        </div>
        <div className="b">
          <img src="data:image/jpeg;base64,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" />
          <h2 className="name">SNOW</h2>
          <p className="subname">Lord of of Dreadfort</p>
        </div>
      </div>

      <div className="card2">
        <div
          className="team"
          style={{ borderRight: "1px solid rgb(200, 197, 197)" }}
        >
          <div className="logo">
            <img src="https://image.freepik.com/free-vector/ninja-esport-gaming-logo_96628-68.jpg" />
          </div>
          <div>87</div>
          <div>164</div>
          <div>89%</div>
        </div>
        <div className="team">
          <div>56</div>
          <div>135</div>
          <div>86%</div>
          <div className="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj2rHz5GVNcn767nlpD_YJcXQZKlcDzDfIKg&usqp=CAU" />
          </div>
        </div>
      </div>

      <div className="button">START FIGHT</div>
    </div>
  );
}

export default Battle;
