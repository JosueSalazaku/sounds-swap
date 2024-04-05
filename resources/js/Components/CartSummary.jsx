import React from 'react';

function CartSummary({ productData }) {
    // Check if productData is undefined or not an array
    if (!productData || !Array.isArray(productData)) {
        // Return null or any other fallback UI if productData is not valid
        return (
            <div className="text-center m-4">
                <h2 class="mb-4">Cart Summary</h2>
                <p class="mb-4">Your shopping cart is currently empty...</p>
            </div>
        );
    }

    const cartItems = calculateCartItems(productData);

    return (
        <div className="cart-summary">
            <h2>Cart Summary</h2>
            {cartItems.length === 0 ? (
                <p>Your shopping cart is currently empty...</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>${item.price.toFixed(2)}</td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                    {/* Add total calculation here */}
                </table>
            )}
        </div>
    );
}

export default CartSummary;

// Function to calculate cart items from product data
function calculateCartItems(productData) {
    // Example: Filter products with quantity greater than 0
    return productData.filter(product => product.quantity > 0);
}
