const qwerty = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const homeRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const bottomRow = ["enter", "z", "x", "c", "v", "b", "n", "m", "del"];

interface IKeyboard {
  secreteWord: string;
  listOfWords: string[][];
  setListOfWords: (list: string[][]) => void;
}

const Keyboard = ({ secreteWord, listOfWords, setListOfWords }: IKeyboard) => {
  return (
    <>
      <footer className="grid justify-center items-center font-semibold uppercase">
        <section className="flex justify-center items-center mb-1 [&>*]:ml-1">
          {qwerty.map((key, idx) => {
            return (
              <div
                onClick={() => console.log(key)}
                key={idx}
                className="py-4 px-3 border bg-gray-300 rounded-md"
              >
                {key}
              </div>
            );
          })}
        </section>

        <section className="flex justify-center items-center mb-1 [&>*]:ml-1">
          {homeRow.map((key, idx) => {
            return (
              <div
                key={idx}
                className="py-4 px-3 border bg-gray-300 rounded-md"
              >
                {key}
              </div>
            );
          })}
        </section>

        <section className="flex justify-center items-center [&>*]:ml-1">
          {bottomRow.map((key, idx) => {
            return (
              <div
                key={idx}
                className="py-4 px-3 border bg-gray-300 rounded-md"
              >
                {key}
              </div>
            );
          })}
        </section>
      </footer>
    </>
  );
};

export default Keyboard;
