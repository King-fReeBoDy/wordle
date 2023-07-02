import Word from "./Word";

interface IBody {
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

const Body = ({
  secreteWord,
  listOfWords,
  setListOfWords,
  index,
  setIndex,
  currentInput,
  setCurrentInput,
  isGameOver,
  setIsGameOver,
}: IBody) => {
  return (
    <>
      <main className="mt-3">
        <section className="grid justify-center items-center">
          {listOfWords.map((word, i) => {
            return (
              <Word
                key={i}
                id={i}
                word={word}
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
            );
          })}
        </section>
      </main>
    </>
  );
};

export default Body;
