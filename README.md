# **ShopHub Frontend**

## **1. Project Description**

ShopHub is a single-page application built using React.js as part of a full-stack MERN project. The frontend provides users with an intuitive interface to browse, search, filter, sort, and paginate through a list of products. Users can also log in using Google or email/password authentication, ensuring a personalized experience.

---

## **2. Features**

- **Responsive Design**: Fully responsive design with a mobile-first approach.
- **Product Display**: Displays products with their image, name, brand, description, ratings, price, and date added.
- **Search Functionality**: Allows users to search for products by name.
- **Filter Options**: Users can filter products based on category, brand, and price range.
- **Sorting Options**: Products can be sorted by price (low to high, high to low) and by date added (newest first).
- **Pagination**: Efficient pagination to navigate through multiple pages of products.
- **User Authentication**: Google and email/password authentication powered by Firebase.

---

## **3. Setup Instructions**

### **3.1. Prerequisites**

- **Node.js** (v14 or above)
- **npm** (v6 or above)
- **React.js** (v17 or above)
- **Firebase** (for authentication)
- **An active internet connection**

### **3.2. Installation Steps**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/shopHub-frontend.git
   cd shopHub-frontend
### **3.2. Installation Steps**

2. **Install Dependencies**:  
   Run the command to install all necessary dependencies.

3. **Create a `.env` file** in the root directory:  
   Add your Firebase configuration:
   - `REACT_APP_FIREBASE_API_KEY=your_api_key`
   - `REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain`
   - `REACT_APP_FIREBASE_PROJECT_ID=your_project_id`

4. **Start the Development Server**:  
   Run the command to start the development server. The app will be running on `http://localhost:3000`.

---

## **4. Usage Details**

### **4.1. Browsing Products**

- Navigate through the product list to view different products. Each product card displays its image, name, brand, description, ratings, price, and the date it was added.

### **4.2. Searching**

- Use the search bar at the top to find products by name. As you type, products matching the search query will be displayed.

### **4.3. Filtering**

- Select options from the filter dropdowns (category, brand, price range) to narrow down the product list.

### **4.4. Sorting**

- Use the sorting buttons to arrange products by price or date added. The order can be toggled between ascending and descending.

### **4.5. Pagination**

- Use the pagination controls at the bottom to navigate through multiple pages of products.

### **4.6. User Authentication**

- Sign in using Google or email/password to access personalized features.

---

## **5. Project Structure**

- **/src**
  - **/components**: Reusable components like `ProductCard`, `Navbar`, `Footer`, etc.
  - **/pages**: Main pages of the application (e.g., `Home`, `ProductList`, etc.).
  - **/styles**: Global and component-specific styles.
  - **App.js**: Main application component.
  - **index.js**: Entry point of the application.

---

## **6. Future Improvements**

- Add more filters (e.g., by ratings).
- Implement a product recommendation system.
- Integrate with a payment gateway for purchases.

---

## **7. Contributing**

If you would like to contribute to this project, feel free to fork the repository and submit a pull request.

---

## **8. License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
