import PropType from "prop-types";
export function Card({ name, image, desc, price, prepareTime }) {
  return (
    <div>
      <img src={image} alt={`imagem ilustrativa de ${name}`} />
      <h1>{name}</h1>
      <span>
        {price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
          maximumFractionDigits: 2,
        })}
      </span>
      <p>{prepareTime}</p>
      <p>{desc}</p>
    </div>
  );
}
Card.propTypes = {
  name: PropType.string.isRequired,
  image: PropType.string.isRequired,
  desc: PropType.string.isRequired,
  price: PropType.number.isRequired,
  prepareTime: PropType.string.isRequired,
};
