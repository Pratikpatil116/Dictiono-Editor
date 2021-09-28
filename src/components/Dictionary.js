import { Container } from "@material-ui/core";
//import { grey } from "@material-ui/core/colors";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./Footer/Footer";
import Definitions from "./Definations/Definations";
import Header from "./Header/Header";

function App(props) {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [LightTheme] = useState(false);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meanings);

  useEffect(() => {
    dictionaryApi();
    // eslint-disable-next-line
  }, [word, category]);

  

  return (
    <div
      className="App"
      style={{color: props.mode==='dark'?'white':'#042743'}}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        {/* <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{LightTheme ? "Dark" : "Light"} Mode</span>
          
          />
        </div> */}
        <Header
          setWord={setWord}
          category={category}
          setCategory={setCategory}
          word={word}
          setMeanings={setMeanings}
          LightTheme={LightTheme}
        />
        {meanings && (
          <Definitions
            meanings={meanings}
            word={word}
            LightTheme={LightTheme}
            category={category}
          />
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default App;