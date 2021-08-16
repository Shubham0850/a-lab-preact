import { useState, useEffect } from "preact/hooks";
// import "./style.css";

// import or from "../imgs/or.png";
// import and from "../imgs/and.png";
// import xor from "../imgs/xor.png";
// import nor from "../imgs/nor.png";
// import nand from "../imgs/nand.png";
// import xnor from "../imgs/xnor.png";
import { NOR, OR, XOR, XNOR, NAND, AND } from "./logic";
const norTruth =
  "https://res.cloudinary.com/a-lab/img/upload/v1628738086/old-experiments-imgs/not-truth_l0wcit.png";
const andTruth =
  "https://res.cloudinary.com/a-lab/img/upload/v1628738014/old-experiments-imgs/and-truth_il5ktn.png";
const nandTruth =
  "https://res.cloudinary.com/a-lab/img/upload/v1628738082/old-experiments-imgs/nand-truth_eahs4x.png";
const xorTruth =
  "https://res.cloudinary.com/a-lab/img/upload/v1628738113/old-experiments-imgs/xor-truth_p5jtrk.png";
const orTruth =
  "https://res.cloudinary.com/a-lab/img/upload/v1628738090/old-experiments-imgs/or-truth_u2yalq.png";
const xnorTruth =
  "https://res.cloudinary.com/a-lab/img/upload/v1628738109/old-experiments-imgs/xnor-truth_m1o78e.png";
// const  bg          =

const or =
  "https://res.cloudinary.com/a-lab/img/upload/v1628738088/old-experiments-imgs/or_ehwg6j.png";
const nor =
  "https://res.cloudinary.com/a-lab/img/upload/v1628738084/old-experiments-imgs/nor_x7zzxn.png";
const nand =
  "https://res.cloudinary.com/a-lab/img/upload/v1628738080/old-experiments-imgs/nand_nkwtpd.png";
const xor =
  "https://res.cloudinary.com/a-lab/img/upload/v1628738111/old-experiments-imgs/xor_n1macp.png";
const and =
  "https://res.cloudinary.com/a-lab/img/upload/v1628738117/old-experiments-imgs/and_cvrra0.png";
const xnor =
  "https://res.cloudinary.com/a-lab/img/upload/v1628738107/old-experiments-imgs/xnor_gch3zk.png";

export default function LogicGateSimulator() {
  const [img, setImg] = useState("NOR");
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(1);

  const aChange = () => {
    if (a === 0) {
      setA(1);
    } else {
      setA(0);
    }
  };

  const bChange = () => {
    if (b === 0) {
      setB(1);
    } else {
      setB(0);
    }
  };
  const handleChange = (e) => {
    setImg(e.target.value);
  };
  useEffect(() => {
    if (img === "NOR") {
      return setC(NOR(a, b));
    } else if (img === "OR") {
      return setC(OR(a, b));
    } else if (img === "XOR") {
      return setC(XOR(a, b));
    } else if (img === "XNOR") {
      return setC(XNOR(a, b));
    } else if (img === "NAND") {
      return setC(NAND(a, b));
    } else if (img === "AND") {
      return setC(AND(a, b));
    }
  }, [a, b, handleChange]);

  return (
    <div className="logic-gate-simulator">
      {/* 
      <img src={bg} alt="bg-animation" className="lab-bg ex-bg" /> */}
      {/* Logic gate select different input */}
      <div className="simulator-div">
        <div className="select-logic">
          <h3>Select Logic Gate</h3>
          <select onChange={handleChange}>
            <option value="NOR">NOR</option>
            <option value="OR">OR</option>
            <option value="XNOR">XNOR</option>
            <option value="XOR">XOR</option>
            <option value="NAND">NAND</option>
            <option value="AND">AND</option>
          </select>
        </div>
        {/* img div of logic gate */}
        <div className="gate-img-div">
          {img === "NOR" && (
            <div className="logic-img">
              <div className="logic-input">
                <h1>A = {a}</h1>
                <button onClick={aChange}>Change</button>
                <h1>B = {b}</h1>
                <button onClick={bChange}>Change</button>
              </div>
              <img
                width={1080}
                height={700}
                src={nor}
                alt="nor-gate-img"
                className="gate-img"
              />
              <div className="logic-output">
                <h1>C = {c}</h1>
              </div>
            </div>
          )}
          {img === "OR" && (
            <div className="logic-img">
              <div className="logic-input">
                <h1>A = {a}</h1>
                <button onClick={aChange}>Change</button>
                <h1>B = {b}</h1>
                <button onClick={bChange}>Change</button>
              </div>
              <img
                width={1080}
                height={700}
                src={or}
                alt="nor-gate-img"
                className="gate-img"
              />
              <div className="logic-output">
                <h1>C = {c}</h1>
              </div>
            </div>
          )}
          {img === "XNOR" && (
            <div className="logic-img">
              <div className="logic-input">
                <h1>A = {a}</h1>
                <button onClick={aChange}>Change</button>
                <h1>B = {b}</h1>
                <button onClick={bChange}>Change</button>
              </div>
              <img
                width={1080}
                height={700}
                src={xnor}
                alt="nor-gate-img"
                className="gate-img"
              />
              <div className="logic-output">
                <h1>C = {c}</h1>
              </div>
            </div>
          )}
          {img === "XOR" && (
            <div className="logic-img">
              <div className="logic-input">
                <h1>A = {a}</h1>
                <button onClick={aChange}>Change</button>
                <h1>B = {b}</h1>
                <button onClick={bChange}>Change</button>
              </div>
              <img
                width={1080}
                height={700}
                src={xor}
                alt="nor-gate-img"
                className="gate-img"
              />
              <div className="logic-output">
                <h1>C = {c}</h1>
              </div>
            </div>
          )}
          {img === "NAND" && (
            <div className="logic-img">
              <div className="logic-input">
                <h1>A = {a}</h1>
                <button onClick={aChange}>Change</button>
                <h1>B = {b}</h1>
                <button onClick={bChange}>Change</button>
              </div>
              <img
                width={1080}
                height={700}
                src={nand}
                alt="nor-gate-img"
                className="gate-img"
              />
              <div className="logic-output">
                <h1>C = {c}</h1>
              </div>
            </div>
          )}
          {img === "AND" && (
            <div className="logic-img">
              <div className="logic-input">
                <h1>A = {a}</h1>
                <button onClick={aChange}>Change</button>
                <h1>B = {b}</h1>
                <button onClick={bChange}>Change</button>
              </div>
              <img
                width={1080}
                height={700}
                src={and}
                alt="nor-gate-img"
                className="gate-img"
              />
              <div className="logic-output">
                <h1>C = {c}</h1>
              </div>
            </div>
          )}
        </div>
        {/* Turth table div */}
        <div className="truth-table-div">
          <h3>Truth Table</h3>
          {img === "NOR" && (
            <img
              width={1080}
              height={700}
              src={norTruth}
              alt="nor-truth-table"
              className="truth-img"
            />
          )}
          {img === "OR" && (
            <img
              width={1080}
              height={700}
              src={orTruth}
              alt="nor-truth-table"
              className="truth-img"
            />
          )}
          {img === "AND" && (
            <img
              width={1080}
              height={700}
              src={andTruth}
              alt="nor-truth-table"
              className="truth-img"
            />
          )}
          {img === "NAND" && (
            <img
              width={1080}
              height={700}
              src={nandTruth}
              alt="nor-truth-table"
              className="truth-img"
            />
          )}
          {img === "XNOR" && (
            <img
              width={1080}
              height={700}
              src={xnorTruth}
              alt="nor-truth-table"
              className="truth-img"
            />
          )}
          {img === "XOR" && (
            <img
              width={1080}
              height={700}
              src={xorTruth}
              alt="nor-truth-table"
              className="truth-img"
            />
          )}
        </div>
      </div>
      {/*  */}
    </div>
  );
}
