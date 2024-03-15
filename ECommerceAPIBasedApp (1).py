from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Temporary product data
products = [
    {
        'id': 1,
        'name': 'Mac Book Pro',
        'price': 45.55,
        'description': 'Amazing laptop with awesome security'
    }
]

# Temporary cart data stored in a Python dictionary for each user
carts = {}

# Routes for handling different API endpoints
@app.route('/display_products', methods=['GET'])
def get_products():
    return jsonify(products)

@app.route('/display_product/<int:product_id>', methods=['GET'])
def get_product(product_id):
    product = next((p for p in products if p['id'] == product_id), None)
    if product:
        return jsonify(product)
    else:
        return jsonify({'message': 'Product not found'}), 404

@app.route('/add_product', methods=['POST'])
def add_product():
    data = request.get_json()
    if not data:
        return jsonify({'error': 'Invalid JSON data'}), 400

    new_product = {
        'id': len(products) + 1,
        'name': data.get('name'),
        'price': data.get('price'),
        'description': data.get('description')
    }
    products.append(new_product)
    return jsonify(new_product), 201

from flask import request, jsonify

@app.route('/cart/view', methods=['GET'])
def view_cart():
    # Get the user_id from the query parameter
    user_id = request.args.get('user_id')
    print(user_id)
    
    # Check if user_id is provided
    if user_id is None:
        return jsonify({'error': 'user_id parameter is missing'}), 400

    # Get the user's cart from the carts dictionary
    cart = carts.get(user_id, {})
    print(cart)

    # Create a list to store cart items with additional details
    cart_items = []
    total_amount = 0

    # Iterate through the cart items
    for product_id, quantity in cart.items():
        # Try to find the product by its id in the products list
        product = next((p for p in products if p['id'] == product_id), None)
        if product:
            item_total = product['price'] * quantity
            total_amount += item_total
            cart_items.append({
                'product_id': product_id,
                'name': product['name'],
                'price': product['price'],
                'quantity': quantity,
                'item_total': item_total
            })
    
    print(cart_items)
    
    # Prepare the response
    response_data = {
        'cart_items': cart_items,
        'total_amount': total_amount
    }

    # Return the response as JSON
    return jsonify(response_data)

@app.route('/cart/add', methods=['POST'])
def add_to_cart():
    data = request.get_json()
    user_id = data.get('user_id')
    product_id = data.get('product_id')
    quantity = data.get('quantity', 1)

    product = next((p for p in products if p['id'] == product_id), None)
    if not product:
        return jsonify({'error': 'Product not found'}), 404

    # Add the product to the user's cart or update the quantity if it's already in the cart
    cart = carts.get(user_id, {})
    cart[product_id] = cart.get(product_id, 0) + quantity
    carts[user_id] = cart
    print(cart)
    print(carts)

    return jsonify(cart)

@app.route('/cart/delete', methods=['POST'])
def delete_from_cart():
    data = request.get_json()
    user_id = data.get('user_id')
    product_id = data.get('product_id')

    cart = carts.get(user_id, {})
    if product_id in cart:
        del cart[product_id]
        carts[user_id] = cart
        return jsonify({'message': 'Product removed from cart successfully'}), 200
    else:
        return jsonify({'error': 'Product not found in the cart'}), 404

print(carts)
if __name__ == '__main__':
    app.run(debug=True)

