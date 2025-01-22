import { Entry } from "./Entry";
import { Header } from "./Header";
import data from "../data";

function App() {
  const travelPlaces = data.map((place) => {
    return (
      <Entry
        key={place.id}
        entry={place}
        // // .img já é um objeto, então não dá erro
        // img={place.img}
        // // Outra forma de passar objeto dentro de objeto
        // // img={{
        // //   src: place.img.src,
        // //   alt: place.img.alt,
        // // }}
      />
    );
  });

  return (
    <>
      <Header />
      {travelPlaces}
    </>
  );
}

export default App;
