import { useState } from "react";
import "./App.css";
import ListItem from "./ListItem";
import List from "./List";

function App() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState<number[]>([]);
  const [characters, setCharacters] = useState<
    {
      imgUrl: string;
      name: string;
    }[]
  >([]);

  let characterNames = [
    {
      imgUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      name: "Rick Sanchez",
    },
    {
      imgUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      name: "Morty Smith",
    },
    {
      imgUrl: "https://rickandmortyapi.com/api/character/avatar/183.jpeg",
      name: "Johnny Depp",
    },
  ];

  const addCharacter = () => {
    if (characterNames[characters?.length])
      setCharacters([...characters, characterNames[characters.length]]);
  };

  const addItem = (itemNumber: number) => {
    if (count < 7) {
      const newArray = [...list, itemNumber];
      setList(newArray);
      setCount(count + 1);
    }
  };

  return (
    <>
      <div className="card">
        <button
          className="btn"
          onClick={addCharacter}
          disabled={!characterNames[characters.length]}
        >
          {characterNames[characters.length]
            ? "Añadir personaje"
            : "No puedes añadir más personajes"}
        </button>
        <List items={characters} />

        <button
          onClick={() => addItem(count + 1)}
          disabled={!(count < 7 )}
        >
          {count < 7 ? "Añadir articulo" : "¡ No puedes añadir más artículos !"}
        </button>
        {list.map((item) => (
          <ListItem key={item} item={item} />
        ))}
      </div>
    </>
  );
}

export default App;
