import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Page1DetailB = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const sampleProducts = [
        {
            id: 1,
            name: "water bottle",
            price: "2",
            description: "sample text1"
        },
        {
            id: 2,
            name: "cheeze",
            price: "3",
            description: "sample text2"
        },
        {
            id: 3,
            name: "Docker",
            price: "4",
            description: "sample text3"
        },
    ];

    useEffect(() => {
        // 実際のアプリケーションでは、ここでAPIリクエストを行います
        const fetchProduct = () => {
            try {
                setLoading(true);
                const productIndex = parseInt(productId, 10) - 1;
                const data = sampleProducts[productIndex];
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
            <button onClick={() => navigate('/page1')}>Back to Products</button>
        </div>
    );
};