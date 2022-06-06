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
        grid-template-columns: repeat(19, 70px);
      }
      .maingrid > div {
        width: 75px;
      }
      .maingrid > div > img {
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
      }
    `,
  };
  return (
    <div className="App">
      <div css={styles.wrapper}>
        <div className="maingrid">
          <div className="kunimitsu">
            <img src="images/chars/kunimitsu_portrait.webp"></img>
          </div>
          <div className="ganryu">
            <img src="images/chars/ganryu_portrait.webp"></img>
          </div>
          <div className="zafina">
            <img src="images/chars/zafina_portrait.webp"></img>
          </div>
          <div className="julia">
            <img src="images/chars/julia_portrait.webp"></img>
          </div>
          <div className="marduk">
            <img src="images/chars/marduk_portrait.webp"></img>
          </div>
          <div className="anna">
            <img src="images/chars/anna_portrait.webp"></img>
          </div>
          <div className="geese">
            <img src="images/chars/geese_portrait.webp"></img>
          </div>
          <div className="eliza">
            <img src="images/chars/eliza_portrait.webp"></img>
          </div>
          <div className="noctis">
            <img src="images/chars/noctis_portrait.webp"></img>
          </div>
          <div className="lei">
            <img src="images/chars/lei_portrait.webp"></img>
          </div>
          <div className="armorking">
            <img src="images/chars/armorking_portrait.webp"></img>
          </div>
          <div className="negan">
            <img src="images/chars/negan_portrait.webp"></img>
          </div>
          <div className="leroy">
            <img src="images/chars/leroy_portrait.webp"></img>
          </div>
          <div className="fahk">
            <img src="images/chars/fahk_portrait.webp"></img>
          </div>
          <div className="lidia">
            <img src="images/chars/lidia_portrait.webp"></img>
          </div>
          <div className="raven">
            <img src="images/chars/raven_portrait.webp"></img>
          </div>
          <div className="nina">
            <img src="images/chars/nina_portrait.webp"></img>
          </div>
          <div className="yoshimitsu">
            <img src="images/chars/yoshimitsu_portrait.webp"></img>
          </div>
          <div className="dragunov">
            <img src="images/chars/dragunov_portrait.webp"></img>
          </div>
          <div className="hwoarang">
            <img src="images/chars/hwoarang_portrait.webp"></img>
          </div>
          <div className="law">
            <img src="images/chars/law_portrait.webp"></img>
          </div>
          <div className="shaheen">
            <img src="images/chars/shaheen_portrait.webp"></img>
          </div>
          <div className="akuma">
            <img src="images/chars/akuma_portrait.webp"></img>
          </div>
          <div className="kazuya">
            <img src="images/chars/kazuya_portrait.webp"></img>
          </div>
          <div className="rbutton">{/* future random button */}</div>
          <div className="heihachi">
            <img src="images/chars/heihachi_portrait.webp"></img>
          </div>
          <div className="kazumi">
            <img src="images/chars/kazumi_portrait.webp"></img>
          </div>
          <div className="chloe">
            <img src="images/chars/chloe_portrait.webp"></img>
          </div>
          <div className="lili">
            <img src="images/chars/lili_portrait.webp"></img>
          </div>
          <div className="lars">
            <img src="images/chars/lars_portrait.webp"></img>
          </div>
          <div className="ling">
            <img src="images/chars/ling_portrait.webp"></img>
          </div>
          <div className="jack">
            <img src="images/chars/jack_portrait.webp"></img>
          </div>
          <div className="lee">
            <img src="images/chars/lee_portrait.webp"></img>
          </div>
          <div className="kuma">
            <img src="images/chars/kuma_portrait.webp"></img>
          </div>
          <div className="miguel">
            <img src="images/chars/miguel_portrait.webp"></img>
          </div>
          <div className="bob">
            <img src="images/chars/bob_portrait.webp"></img>
          </div>
          <div className="bryan">
            <img src="images/chars/bryan_portrait.webp"></img>
          </div>
          <div className="king">
            <img src="images/chars/king_portrait.webp"></img>
          </div>
          <div className="steve">
            <img src="images/chars/steve_portrait.webp"></img>
          </div>
          <div className="paul">
            <img src="images/chars/paul_portrait.webp"></img>
          </div>
          <div className="josie">
            <img src="images/chars/josie_portrait.webp"></img>
          </div>
          <div className="katarina">
            <img src="images/chars/katarina_portrait.webp"></img>
          </div>
          <div className="jin">
            <img src="images/chars/jin_portrait.webp"></img>
          </div>
          <div className="djin">
            <img src="images/chars/djin_portrait.webp"></img>
          </div>
          <div className="claudio">
            <img src="images/chars/claudio_portrait.webp"></img>
          </div>
          <div className="gigas">
            <img src="images/chars/gigas_portrait.webp"></img>
          </div>
          <div className="asuka">
            <img src="images/chars/asuka_portrait.webp"></img>
          </div>
          <div className="alisa">
            <img src="images/chars/alisa_portrait.webp"></img>
          </div>
          <div className="leo">
            <img src="images/chars/leo_portrait.webp"></img>
          </div>
          <div className="feng">
            <img src="images/chars/feng_portrait.webp"></img>
          </div>
          <div className="eddy">
            <img src="images/chars/eddy_portrait.webp"></img>
          </div>
          <div className="panda">
            <img src="images/chars/panda_portrait.webp"></img>
          </div>
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
