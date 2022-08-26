import { Footer, Header, Section } from "./Components";
import "./App.css";

const products = [
  {
    name: "chilli&chips",
    image: "/src/public/chilli-chips.jpg",
    prepareTime: "00:05",
    price: 25.99,
    desc: "Uma porção de nachos acompanhada de molho chilli",
    category: "aperitivo",
  },
];

function App() {
  return (
    <>
      <Header />
      <Section
        title="Aperitivos"
        products={products.filter(
          (product) => product.category === "aperitivo"
        )}
      />
      <Section
        title="Bebidas"
        products={products.filter((product) => product.category === "bebida")}
      />
      <Section
        title="Bebidas alcoólicas"
        products={products.filter(
          (product) => product.category === "Bebuda alcoólica"
        )}
      />
      <Footer />
    </>
  );
}

export default App;
