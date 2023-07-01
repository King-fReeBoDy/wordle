import { useState } from "react";
import Body from "./Body";
import Header from "./Header";
import Keyboard from "./Keyboard";

function App() {
  const [secreteWord, setSecreteWord] = useState("event");
  const [listOfWords, setListOfWords] = useState<string[][]>(
    Array(6).fill(["", "", "", "", ""])
  );
  return (
    <>
      <section>
        <Header />
        <Body
          secreteWord={secreteWord}
          listOfWords={listOfWords}
          setListOfWords={setListOfWords}
        />
        <Keyboard
          secreteWord={secreteWord}
          listOfWords={listOfWords}
          setListOfWords={setListOfWords}
        />
      </section>
    </>
  );
}

export default App;
