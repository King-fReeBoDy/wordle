import Word from "./Word";

interface IBody {
  secreteWord: string;
  listOfWords: string[][];
  setListOfWords: (list: string[][]) => void;
}

const Body = ({ secreteWord, listOfWords, setListOfWords }: IBody) => {
  return (
    <>
      <main className="my-3">
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
              />
            );
          })}
        </section>
      </main>
    </>
  );
};

export default Body;
