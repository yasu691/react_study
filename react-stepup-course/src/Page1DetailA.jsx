import { Link } from "react-router-dom";

export const Page1DetailA = () => {
    const products = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
    ];

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/page1/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};