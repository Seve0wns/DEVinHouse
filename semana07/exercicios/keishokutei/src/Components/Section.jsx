import { Card } from "./Card";
import PropType, { object } from "prop-types";

export function Section({ title, products }) {
  const torender = products.map((product) => {
    return (
      <Card
        name={product.name}
        image={product.image}
        desc={product.desc}
        prepareTime={product.prepareTime}
        price={product.price}
        key={product.image}
      />
    );
  });
  return (
    <div>
      <h2>{title}</h2>
      <hr></hr>
      {torender}
    </div>
  );
}
Section.propTypes = {
  title: PropType.string.isRequired,
  products: PropType.arrayOf(object),
};
