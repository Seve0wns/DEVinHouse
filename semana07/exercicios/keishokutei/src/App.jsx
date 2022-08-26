import { Footer, Header, Card } from "./Components";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Card
        name={"chilli&chips"}
        image="/src/public/chilli-chips.jpg"
        prepareTime={"00:05"}
        price={25.99}
        desc={"Uma porção de nachos acompanhada com molho chilli."}
      />
      <Footer />
    </>
  );
}

export default App;
