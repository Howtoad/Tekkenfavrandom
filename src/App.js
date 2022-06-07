import "./App.css";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

function App() {
  let [splash, setSplash] = useState("");
  const swapSplashOnClick = (e) => {
    setSplash("/images/chars/" + e.target.alt + "_splash.png");
    const splash = document.getElementById("splash");
    splash.classList.toggle("hidden");
    console.log(e.target.alt);
  };
  const arrayOfChars = [
    "kunimitsu",
    "ganryu",
    "zafina",
    "julia",
    "marduk",
    "anna",
    "geese",
    "eliza",
    "noctis",
    "lei",
    "armorking",
    "negan",
    "leroy",
    "fahkumram",
    "lidia",
    "raven",
    "nina",
    "yoshimitsu",
    "dragunov",
    "hwoarang",
    "law",
    "shaheen",
    "akuma",
    "kazuya",
    "rbutton",
    "heihachi",
    "kazumi",
    "chloe",
    "lili",
    "lars",
    "ling",
    "jack",
    "lee",
    "kuma",
    "miguel",
    "bob",
    "bryan",
    "king",
    "steve",
    "paul",
    "josie",
    "katarina",
    "jin",
    "deviljin",
    "claudio",
    "gigas",
    "asuka",
    "alisa",
    "leo",
    "feng",
    "eddy",
    "panda",
  ];

  const styles = {
    wrapper: css`
      width: 100vw;
      height: 100vh;
      margin: 0 auto;
      background-image: url("/images/chars/shatteredglass.jpg");
      background-repeat: round;
      & img {
        max-width: 100vw;
      }
      & .maingrid {
        display: grid;
        max-width: 1420px;
        max-height: 300px;
        position: absolute;
        left: 5%;
        top: 58%;
        grid-template-columns: repeat(19, 70px);
        z-index: 50;
      }
      & .maingrid > div {
        /* border-width: 4px;
        border-color: transparent;
        border-style: solid; */
        width: 75px;
      }
      & .maingrid > div:hover {
        /* border-width: 4px;
        border-style: inset;
        border-color: #00de0d;
        border-image: linear-gradient(#00de0d40, #00de0d) 1; */
        -webkit-box-shadow: 0px 0px 0px 5px #00de0d70;
        -moz-box-shadow: 0px 0px 0px 5px #00de0d70;
        box-shadow: 0px 0px 0px 5px #00de0d70;
        cursor: pointer;
      }
      & .maingrid > div > img {
        width: 100%;
      }
      & .kunimitsu {
        grid-column: 3 / 4;
      }
      & .raven {
        grid-column: 1/2;
      }
      & .rbutton {
        grid-row: 2/4;
        grid-column: 10/11;
        display: Grid;
        background-color: #182a2f;
        background: linear-gradient(
          90deg,
          rgba(24, 42, 47, 1) 0%,
          rgba(52, 71, 80, 1) 100%
        );
      }
      & .rbutton > h2 {
        color: #60858c;
        font-size: 64px;
        font-weight: bold;
        height: 64px;
        margin-top: -20px;
        justify-self: center;
        align-self: center;
      }
      & #splash {
        position: absolute;
        top: 15%;
        left: 20%;
      }
    `,
  };
  return (
    <div className="App">
      <div css={styles.wrapper}>
        <div id="splash">{splash && <img src={splash} alt="splash" />}</div>
        <div className="maingrid" onClick={swapSplashOnClick}>
          {arrayOfChars.map((char) => {
            return (
              <div className={char}>
                <img src={`/images/chars/${char}_portrait.webp`} alt={char} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
