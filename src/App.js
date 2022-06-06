import "./App.css";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function App() {
  const topRowChars = [
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
  ];
  const LeftMiddleRowChars = [
    "raven",
    "nina",
    "yoshimitsu",
    "dragunov",
    "hwoarang",
    "law",
    "shaheen",
    "akuma",
    "kazuya",
  ];
  const RightMiddleRowChars = [
    "heihachi",
    "kazumi",
    "chloe",
    "lili",
    "lars",
    "ling",
    "jack",
    "lee",
    "kuma",
  ];
  const leftBottomRowChars = [
    "miguel",
    "bob",
    "bryan",
    "king",
    "steve",
    "paul",
    "josie",
    "katarina",
    "jin",
  ];
  const rightBottomRowChars = [
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
      & img {
        max-width: 100vw;
      }
      & .maingrid {
        display: grid;
        max-width: 1420px;
        max-height: 300px;
      }
    `,
  };
  return (
    <div className="App">
      <div css={styles.wrapper}>
        <div className="maingrid">
          {/* future top row chars */}
          {/* future left middle row chars */}
          {/* future right middle row chars */}
          {/* future left bottom row chars */}
          {/* future right bottom row chars */}
        </div>
        <img src="https://external-preview.redd.it/uKIgQzhXxG4Gw9E8wkPLgkMiDqdNI2tLhszKi_7oTuA.png?format=pjpg&auto=webp&s=e3cc0ead6e6f96e0053898bcd2e0816db5843bc3"></img>
      </div>
    </div>
  );
}

export default App;
