# GreenLeaf Haven - Houseplant E-commerce Store

A React-based e-commerce website for houseplants with full shopping cart functionality and Redux state management.

## 🚀 Live Demo

**Netlify Deployment:** [https://statuesque-caramel-5d9d78.netlify.app/](https://statuesque-caramel-5d9d78.netlify.app/)

**GitHub Pages:** [https://sahazadalam.github.io/greenleaf-haven](https://sahazadalam.github.io/greenleaf-haven)

## 📋 Project Overview

This project is part of the **Coursera Full Stack Software Development** course - Front End module using React. The assignment demonstrates building a complete e-commerce website with React, Redux, and modern web development practices.

## ✨ Features

- **🏪 Product Catalog** - 6 unique houseplants across multiple categories
- **🛒 Shopping Cart** - Add, remove, and manage items with real-time updates
- **🔄 Redux State Management** - Centralized state for cart and products
- **📱 Responsive Design** - Mobile-friendly interface
- **🧭 React Router** - Navigation between pages
- **🏷️ Category Filtering** - Filter plants by type (Low Light, Flowering, Air Purifying, etc.)
- **🎯 Real-time Updates** - Cart counter updates instantly

## 🛠️ Technologies Used

- **Frontend:** React 18
- **State Management:** Redux Toolkit
- **Routing:** React Router DOM
- **Styling:** CSS3 with responsive design
- **Deployment:** Netlify & GitHub Pages
- **Version Control:** Git & GitHub

## 📁 Project Structure
greenleaf-haven/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── Header.js # Navigation header with cart icon
│ │ ├── LandingPage.js # Homepage with company info
│ │ ├── ProductListing.js # Product catalog with categories
│ │ ├── ProductCard.js # Individual product display
│ │ └── ShoppingCart.js # Cart management page
│ ├── redux/
│ │ ├── store.js # Redux store configuration
│ │ ├── cartSlice.js # Cart actions and reducers
│ │ └── productsSlice.js # Product data and categories
│ ├── styles/
│ │ └── App.css # Main stylesheet
│ ├── App.js # Main application component
│ └── index.js # Application entry point
├── package.json
└── README.md

text

## 🎯 Coursera Assignment Requirements

### ✅ GitHub (6/6 points)
- ✅ Public GitHub repository
- ✅ Redux-related files and code implemented

### ✅ Landing Page (5/5 points)
- ✅ Background image with overlay
- ✅ Paragraph about the company
- ✅ Company name "GreenLeaf Haven"
- ✅ Get Started button linking to products page

### ✅ Product Listing Page (9/9 points)
- ✅ Six unique houseplants with thumbnails, names, and prices
- ✅ Grouped into at least three categories (5 categories implemented)
- ✅ Add to Cart buttons that:
  - Increase cart count
  - Become disabled after clicking
  - Add plant to cart

### ✅ Header (7/7 points)
- ✅ Displays on all pages
- ✅ Shopping cart icon with real-time item count
- ✅ Navigation between all pages

### ✅ Shopping Cart Page (23/23 points)
- ✅ Total number of plants in cart
- ✅ Total cost calculation
- ✅ Each plant displays thumbnail, name, and unit price
- ✅ Increase quantity buttons with proper functionality
- ✅ Decrease quantity buttons with proper functionality
- ✅ Delete button for removing items
- ✅ Checkout button with "Coming Soon" message
- ✅ Continue shopping button linking to products page

## 🌿 Available Houseplants

| Plant | Category | Price | Emoji |
|-------|----------|--------|--------|
| Snake Plant | Low Light | $25.99 | 🌱 |
| Peace Lily | Flowering | $32.50 | 🌸 |
| Spider Plant | Air Purifying | $18.75 | 🕷️ |
| Fiddle Leaf Fig | Statement | $45.00 | 🌿 |
| Aloe Vera | Succulent | $15.99 | 🌵 |
| Monstera Deliciosa | Statement | $38.25 | 🍃 |

## 📦 Installation & Local Development

```bash
# Clone the repository
git clone https://github.com/sahazadalam/greenleaf-haven.git

# Navigate to project directory
cd greenleaf-haven

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to Netlify
npm run build && drag build folder to Netlify
🚀 Deployment
This project is deployed on multiple platforms:

Netlify
URL: https://statuesque-caramel-5d9d78.netlify.app/

Method: Manual deployment via drag-and-drop

Status: ✅ Live and fully functional

GitHub Pages
URL: https://sahazadalam.github.io/greenleaf-haven

Method: Automated deployment via GitHub Actions
https://chatgpt.com/share/694b2b00-55b0-8001-9b19-821020788409
Status: ✅ Live and fully functional

👨‍💻 Developer
Sahazad Alam

Coursera Full Stack Software Development Student

GitHub: sahazadalam

Project: GreenLeaf Haven

📄 License
This project was created for educational purposes as part of the Coursera Full Stack Software Development curriculum.

🔗 Links
GitHub Repository: https://github.com/sahazadalam/greenleaf-haven

Netlify Deployment: https://statuesque-caramel-5d9d78.netlify.app/

GitHub Pages: https://sahazadalam.github.io/greenleaf-haven
