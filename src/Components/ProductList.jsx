import ProductCard from "./ProductCard";

function ProductList() {
    const products = [
        {
            id: 1,
            name: "Notebook", 
            price: 4900.99 ,
            imagem: "https://placehold.co/200x150?text=Notebook",
        },
        {
            id: 2,
            name: "Smartphone", 
            price: 2900.99 ,
            imagem: "https://placehold.co/200x150?text=Smartphone",
        
}
];
    return (
        <>
            {products.map(product => (
                <ProductCard  key={product.id}
                    name={product.name} 
                    price={product.price}
                    image={product.imagem} />
            ))}
        </>
    );
}
export default ProductList;