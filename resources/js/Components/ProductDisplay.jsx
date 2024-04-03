import { usePage } from '@inertiajs/inertia-react';

const ProductDisplay = () => {
    // Access the products data using the usePage hook
    const { products } = usePage().props;

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                  <li key={product.id}>
                    <img className='h-20' src={product.imgURL}  />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>€ {product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductDisplay;
