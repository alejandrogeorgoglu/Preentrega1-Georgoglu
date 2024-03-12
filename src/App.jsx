import { ItemListContainer } from "./components/ItemListContainer";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <ItemListContainer greetings="Gracias por su compra" />
    </>
  );
}

export default App;
