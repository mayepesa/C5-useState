import "./List.css";

const List = ({
  items,
}: {
  items: {
    imgUrl: string;
    name: string;
  }[];
}) => {
  console.log(items);
  return (
    <div style={{ display: "flex" }}>
      {items.map(
        (
          item: {
            imgUrl: string;
            name: string;
          },
          index: number
        ) => {
          return (
            <div key={index} className="character-container">
              <img className="img" src={item.imgUrl} alt={item.name} />
              <p>{item.name}</p>
            </div>
          );
        }
      )}
    </div>
  );
};

export default List;
