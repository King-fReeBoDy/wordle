const qwerty = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const homeRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const bottomRow = ["enter", "z", "x", "c", "v", "b", "n", "m", "del"];

interface IKeyboard {
  secreteWord: string;
  listOfWords: string[][];
  setListOfWords: (list: string[][]) => void;
  index: number;
  setIndex: (id: number) => void;
  currentInput: string;
  setCurrentInput: (word: string) => void;
  isGameOver: boolean;
  setIsGameOver: (bool: boolean) => void;
}

const Keyboard = ({
  secreteWord,
  listOfWords,
  setListOfWords,
  index,
  setIndex,
  currentInput,
  setCurrentInput,
  isGameOver,
  setIsGameOver,
}: IKeyboard) => {
  // const [keyboardInput, setKeyboardInput] = useState("");

  const keyboardHandle = (key: string) => {
    if (isGameOver) {
      return;
    }
    if (key === "enter") {
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

    if (key === "del") {
      const key = currentInput.length - 1;
      const idx = listOfWords[index].map((letter, i) => {
        if (i === key) {
          return "";
        }
        return letter;
      });
      const newListOfWords = listOfWords.map((list, i) => {
        if (i === index) {
          return idx;
        }
        return list;
      });
      setListOfWords(newListOfWords);
      const newWord = [...currentInput].slice(0, -1);
      setCurrentInput(newWord.join(""));
      return;
    }

    if (currentInput.length !== 5) {
      const idx = listOfWords[index].findIndex((letter) => letter === "");
      const curr = listOfWords[index].map((letter, index) => {
        if (index === idx) {
          return key;
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
    setCurrentInput(currentInput + key);
  };

  return (
    <>
      <footer className="grid justify-center items-center font-semibold uppercase mt-3">
        <section className="flex justify-center items-center mb-1 [&>*]:ml-1">
          {qwerty.map((key, idx) => {
            return (
              <button
                onClick={() => keyboardHandle(key)}
                key={idx}
                className={`text-sm py-3 px-2 md:py-4 md:px-3 bg-gray-300 rounded-md shadow-md border-0`}
              >
                {key}
              </button>
            );
          })}
        </section>

        <section className="flex justify-center items-center mb-1 [&>*]:ml-1">
          {homeRow.map((key, idx) => {
            return (
              <button
                key={idx}
                onClick={() => keyboardHandle(key)}
                className="text-sm py-3 px-2 md:py-4 md:px-3 bg-gray-300 rounded-md shadow-md border-0"
              >
                {key}
              </button>
            );
          })}
        </section>

        <section className="flex justify-center items-center [&>*]:ml-1">
          {bottomRow.map((key, idx) => {
            return (
              <button
                key={idx}
                onClick={() => keyboardHandle(key)}
                className="text-sm py-3 px-2 md:py-4 md:px-3 bg-gray-300 rounded-md shadow-md border-0"
              >
                {key}
              </button>
            );
          })}
        </section>
      </footer>
    </>
  );
};

export default Keyboard;
