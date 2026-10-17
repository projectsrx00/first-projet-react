import ProductCard from './ProductCard';

function ProductList() {
    const products = [
        { id: 1, name: "Clavier", price: 150, stock: true },
        { id: 2, name: "Souris", price: 80, stock: true },
        { id: 3, name: "Écran", price: 1200, stock: false },
        { id: 4, name: "Casque", price: 250, stock: true }
    ];

    return (
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prix</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                {products.map((p) => (
                    <ProductCard
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        price={p.price}
                        stock={p.stock}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default ProductList;