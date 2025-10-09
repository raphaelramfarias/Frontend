/* receba as props name, price e image e exiba essas informações dentro de tags HTML apropriadas. */

function ProductCard({ name, price, image }) {
  return (
    <>
      <h2>{name}</h2>
      <h3>R$ {price}</h3>
      <img src={image} alt={name} />
    </>
  );
} 
export default ProductCard;
