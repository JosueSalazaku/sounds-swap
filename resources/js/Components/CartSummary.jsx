import React from 'react';

function CartSummary({ cartItems }) {
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
                                <td>
                                    <div className="product-info">
                                        <img src={item.image} alt={item.name} />
                                        <div>
                                            <h3>{item.name}</h3>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.quantity}</td>
                                <td>${item.price.toFixed(2)}</td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3">Total:</td>
                            <td>
                                ${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}
                            </td>
                        </tr>
                    </tfoot>
                </table>
                        )} 
        </div>
    );
}

export default CartSummary;
