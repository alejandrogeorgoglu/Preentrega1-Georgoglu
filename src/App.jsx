import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <ItemListContainer greetings="Gracias por su compra" />
    </>
  );
}

export default App;
