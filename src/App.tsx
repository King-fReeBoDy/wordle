import { useState } from "react";
import Body from "./Body";
import Header from "./Header";
import Keyboard from "./Keyboard";

function App() {
  const [secreteWord] = useState("event");
  const [index, setIndex] = useState(0);
  const [currentInput, setCurrentInput] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
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
          index={index}
          setIndex={setIndex}
          currentInput={currentInput}
          setCurrentInput={setCurrentInput}
          isGameOver={isGameOver}
          setIsGameOver={setIsGameOver}
        />
        <Keyboard
          secreteWord={secreteWord}
          listOfWords={listOfWords}
          setListOfWords={setListOfWords}
          index={index}
          setIndex={setIndex}
          currentInput={currentInput}
          setCurrentInput={setCurrentInput}
          isGameOver={isGameOver}
          setIsGameOver={setIsGameOver}
        />
      </section>
    </>
  );
}

export default App;
