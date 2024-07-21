import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Page1DetailB = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const sampleProducts = {
        id: 1,
        name: "water bottle",
        price: "$2",
        description: "sample text"
    };

    useEffect(() => {
        // 実際のアプリケーションでは、ここでAPIリクエストを行います
        const fetchProduct = async () => {
            try {
                setLoading(true);
                // 仮のAPI呼び出しをシミュレート
                const response = await fetch(`https://api.example.com/products/${productId}`);
                if (!response.ok) {
                    throw new Error('Product not found');
                }
                const data = await response.json();
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!product) return <div>Product not found</div>;

    return (
        <div>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={() => navigate('/products')}>Back to Products</button>
        </div>
    );
};