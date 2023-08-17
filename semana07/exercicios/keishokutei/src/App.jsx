import { Footer, Header, Section } from "./Components";
import "./App.css";
import products from "/products.json";

// const products = [
//   {
//     name: "chilli&chips",
//     image: "/src/public/chilli-chips.jpg",
//     prepareTime: "00:05",
//     price: 25.99,
//     desc: "Uma porção de nachos acompanhada de molho chilli",
//     category: "aperitivo",
//   },
// ];
function filterByCategory(array,category){
  return array.filter(el=>el.category===category)
}
function App() {
  return (
    <>
      <Header />
      <Section
        title="Aperitivos"
        products={filterByCategory(products,"aperitivo")}
      />
      <Section
        title="Bebidas"
        products={filterByCategory(products,"bebida")}
      />
      <Section
        title="Bebidas alcoólicas"
        products={filterByCategory(products,"bebida alc")}
      />
      <Section
      title="Saladas"
      products={filterByCategory(products,"salada")}
      />
      <Section
      title="Sobremesas"
      products={filterByCategory(products,"sobremesa")}
      />
      <Footer />
    </>
  );
}

export default App;
