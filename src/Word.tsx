import { useEffect, useState } from "react";

interface Word {
  word: string[];
  secreteWord: string;
  listOfWords: string[][];
  setListOfWords: (list: string[][]) => void;
  id: number;
}

const Word = ({ word, secreteWord, listOfWords, setListOfWords, id }: Word) => {
  const [currentInput, setCurrentInput] = useState("");
  const [index, setIndex] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleInputs = (event: KeyboardEvent) => {
    if (isGameOver) {
      return;
    }
    if (event.key === "Enter") {
      if (currentInput.length !== 5) return;

      if (secreteWord === listOfWords[index]?.join("")) {
        setIsGameOver(true);
        setIndex(0);
        setCurrentInput("");
      }

      setIndex(index + 1);
      setCurrentInput("");
      return;
    }

    if (currentInput.length !== 5) {
      const idx = listOfWords[index].findIndex((letter) => letter === "");
      const curr = listOfWords[index].map((letter, index) => {
        if (index === idx) {
          return event.key;
        }
        return letter;
      });
      const newListOfWords = listOfWords.map((list, idx) => {
        if (idx === index) {
          return curr;
        }
        return list;
      });
      setListOfWords(newListOfWords);
    }
    if (currentInput.length === 5) return;
    setCurrentInput(currentInput + event.key);
  };

  useEffect(() => {
    document.addEventListener("keypress", handleInputs);
    return () => document.removeEventListener("keypress", handleInputs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentInput]);
  return (
    <section className="flex [&>*]:ml-2 [&>*]:mb-2 uppercase">
      {word.map((letter, idx) => {
        return (
          <div
            className={`${
              index !== id && secreteWord === word.join("")
                ? "bg-green-600 text-white"
                : index !== id && letter === secreteWord[idx] && letter !== ""
                ? "bg-green-600 text-white"
                : index !== id && secreteWord.includes(letter) && letter !== ""
                ? "bg-yellow-400 text-white"
                : index !== id && !secreteWord.includes(letter) && letter !== ""
                ? "bg-gray-300"
                : ""
            } border-4 px-5 py-3 h-14 w-14 font-bold text-xl`}
          >
            {letter}
          </div>
        );
      })}
    </section>
  );
};

export default Word;
