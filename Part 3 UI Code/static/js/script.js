
document.addEventListener("DOMContentLoaded", () => {
    // Function to update the cart list and total amount
  
    // Function to add product to the cart
    async function addToCart(event) {
      const productId = event.target.dataset.productId;
  
      try {
        const response = await fetch("/add_to_cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: "user1",
            product_id: parseInt(productId),
            quantity: 1,
          }),
        });
  
        if (!response.ok) {
          throw new Error("Failed to add the product to the cart.");
        }
  
        const cartData = await response.json();
        updateCart(cartData);
      } catch (error) {
        console.error(error.message);
      }
    }
  
    // Function to delete product from the cart
    async function deleteFromCart(event) {
      const productId = event.target.dataset.productId;
  
      try {
        const response = await fetch("/delete_from_cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: "user1",
            product_id: parseInt(productId),
          }),
        });
  
        if (!response.ok) {
          throw new Error("Failed to delete the product from the cart.");
        }
  
        const cartData = await response.json();
        updateCart(cartData);
      } catch (error) {
        console.error(error.message);
      }
    }
  
    // Add event listeners to the "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", addToCart);
    });
  
    // Add event listeners to the "Delete from Cart" buttons
    const deleteFromCartButtons = document.querySelectorAll(
      ".delete-from-cart-btn"
    );
    deleteFromCartButtons.forEach((button) => {
      button.addEventListener("click", deleteFromCart);
    });
  
    // Initially update the cart display
    async function getCart() {
      try {
        const response = await fetch("/cart?user_id=user1");
        if (!response.ok) {
          throw new Error("Failed to fetch the cart data.");
        }
  
        const cartData = await response.json();
        updateCart(cartData);
      } catch (error) {
        console.error(error.message);
      }
    }
  
    getCart();
  });
  
  // Function to create the "Delete from Cart" button
  function createDeleteFromCartButton(productId) {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete from Cart";
    deleteButton.classList.add("delete-from-cart-btn");
    deleteButton.setAttribute("data-product-id", productId);
    deleteButton.addEventListener("click", deleteFromCart);
    return deleteButton;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("search-form");
    const searchResults = document.getElementById("search-results");
  
    // Function to handle search form submission
    async function searchProducts(event) {
      event.preventDefault();
  
      const searchInput = document.getElementById("search").value.trim();
      if (!searchInput) return;
  
      try {
        const response = await fetch(`/search_products?keyword=${searchInput}`);
        if (!response.ok) {
          throw new Error("Failed to search for products.");
        }
  
        const data = await response.json();
        displaySearchResults(data);
      } catch (error) {
        console.error(error.message);
      }
    }
  
    // Function to display search results
    function displaySearchResults(products) {
      searchResults.innerHTML = "";
  
      if (products.length === 0) {
        searchResults.innerHTML = "<li>No products found.</li>";
      } else {
        products.forEach((product) => {
          const listItem = document.createElement("li");
          listItem.textContent = `${product.name} - Price: $${product.price} - ${product.description}`;
          searchResults.appendChild(listItem);
        });
      }
    }
  
    searchForm.addEventListener("submit", searchProducts);
  });
  
  async function getProducts() {
    try {
      const response = await fetch("/");
      if (!response.ok) {
        throw new Error("Failed to fetch products.");
      }
  
      const data = await response.json();
      updateProductsList(data.products);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("search-form");
    const searchResults = document.getElementById("search-results");
  
    // Function to handle search form submission
    async function searchProducts(event) {
      event.preventDefault();
  
      const searchInput = document.getElementById("search").value.trim();
      if (!searchInput) return;
  
      try {
        const response = await fetch(`/search_products?keyword=${searchInput}`);
        if (!response.ok) {
          throw new Error("Failed to search for products.");
        }
  
        const data = await response.json();
        displaySearchResults(data);
      } catch (error) {
        console.error(error.message);
      }
    }
  
    // Function to display search results
    function displaySearchResults(products) {
      searchResults.innerHTML = "";
  
      if (products.length === 0) {
        searchResults.innerHTML = "<li>No products found.</li>";
      } else {
        products.forEach((product) => {
          const listItem = document.createElement("li");
          listItem.textContent = `${product.name} - Price: $${product.price} - ${product.description}`;
          searchResults.appendChild(listItem);
        });
      }
    }
  
    searchForm.addEventListener("submit", searchProducts);
  });
  
  async function addProduct(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const price = parseFloat(document.getElementById("price").value);
    const description = document.getElementById("description").value;
  
    try {
      const response = await fetch("/add_product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, price, description }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to add the product.");
      }
  
      // Fetch the updated product list after adding a new product
      await getProducts();
  
      // Clear the form after successful product addition
      document.getElementById("product-form").reset();
    } catch (error) {
      console.error(error.message);
    }
  }
  
  getProducts();
  // Function to update the products list
  function updateProductsList(products) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
  
    products.forEach((product) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${product.name} - Price: $${product.price} - ${product.description}`;
      listItem.appendChild(createAddToCartButton(product.id));
      productList.appendChild(listItem);
    });
  }
  // Function to view the cart
  async function viewCart(event) {
    try {
      const response = await fetch("/cart?user_id=user1");
      if (!response.ok) {
        throw new Error("Failed to fetch the cart data.");
      }
  
      const cartData = await response.json();
  
      const cartList = document.getElementById("cart-list");
      const totalAmountElement = document.getElementById("total-amount");
  
      cartList.innerHTML = "";
      cartData.cart_items.forEach((cartItem) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${cartItem.name} - Price: $${cartItem.price} - Quantity: ${cartItem.quantity} - Subtotal: $${cartItem.item_total}`;
        listItem.appendChild(createDeleteFromCartButton(cartItem.product_id));
        cartList.appendChild(listItem);
      });
  
      totalAmountElement.textContent = `Total: $${cartData.total_amount.toFixed(
        2
      )}`;
  
      // Show the cart list and total amount
      cartList.style.display = "block";
      totalAmountElement.style.display = "block";
    } catch (error) {
      console.error(error.message);
    }
  }
  
  async function deleteFromCart(event) {
    const productId = event.target.dataset.productId;
  
    try {
      const response = await fetch("/delete_from_cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: "user1",
          product_id: parseInt(productId),
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to delete the product from the cart.");
      }
  
      const cartData = await response.json();
      updateCart(cartData);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  // Function to update the cart list and total amount
  async function updateCart(data) {
    const cartList = document.getElementById("cart-list");
    const totalAmountElement = document.getElementById("total-amount");
    let totalAmount = 0;
  
    cartList.innerHTML = "";
    data.cart_items.forEach((cartItem) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${cartItem.name} - Price: $${cartItem.price} - Quantity: ${cartItem.quantity} - Subtotal: $${cartItem.item_total}`;
      listItem.appendChild(createDeleteFromCartButton(cartItem.product_id));
      cartList.appendChild(listItem);
      totalAmount += cartItem.item_total;
    });
  
    totalAmountElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
  
    // Show the cart list and total amount
    cartList.style.display = "block";
    totalAmountElement.style.display = "block";
  }
  
  // Function to create a "Delete from Cart" button
  function createDeleteFromCartButton(productId) {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete from Cart";
    deleteButton.classList.add("delete-from-cart-btn");
    deleteButton.setAttribute("data-product-id", productId);
    deleteButton.addEventListener("click", deleteFromCart);
    return deleteButton;
  }
  
  // Function to handle product addition
  async function addProduct(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const price = parseFloat(document.getElementById("price").value);
    const description = document.getElementById("description").value;
  
    try {
      const response = await fetch("/add_product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, price, description }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to add the product.");
      }
  
      // Fetch the updated product list after adding a new product
      await getProducts();
  
      // Clear the form after successful product addition
      document.getElementById("product-form").reset();
    } catch (error) {
      console.error(error.message);
    }
  }
  
  // Function to handle viewing the cart
  async function viewCart(event) {
    try {
      const response = await fetch("/cart?user_id=user1");
      if (!response.ok) {
        throw new Error("Failed to fetch the cart data.");
      }
  
      const cartData = await response.json();
      updateCart(cartData);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  // Add event listener to the product form for submitting new products
  document.addEventListener("DOMContentLoaded", () => {
    const productForm = document.getElementById("product-form");
    productForm.addEventListener("submit", addProduct);
  });
  
  // Add event listener to the view cart button
  document.addEventListener("DOMContentLoaded", () => {
    const viewCartButton = document.getElementById("view-cart-btn");
    viewCartButton.addEventListener("click", viewCart);
  });