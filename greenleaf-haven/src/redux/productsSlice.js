import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      name: "Snake Plant",
      price: 25.99,
      category: "Low Light",
      image: "🌱",
      description: "Thrives in low light conditions"
    },
    {
      id: 2,
      name: "Peace Lily",
      price: 32.50,
      category: "Flowering",
      image: "🌸",
      description: "Beautiful white flowers"
    },
    {
      id: 3,
      name: "Spider Plant",
      price: 18.75,
      category: "Air Purifying",
      image: "🕷️",
      description: "Excellent air purifier"
    },
    {
      id: 4,
      name: "Fiddle Leaf Fig",
      price: 45.00,
      category: "Statement",
      image: "🌿",
      description: "Large statement plant"
    },
    {
      id: 5,
      name: "Aloe Vera",
      price: 15.99,
      category: "Succulent",
      image: "🌵",
      description: "Medicinal and easy to care for"
    },
    {
      id: 6,
      name: "Monstera Deliciosa",
      price: 38.25,
      category: "Statement",
      image: "🍃",
      description: "Tropical beauty with split leaves"
    }
  ],
  categories: ["All", "Low Light", "Flowering", "Air Purifying", "Statement", "Succulent"]
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}
});

export default productsSlice.reducer;
export const selectAllProducts = (state) => state.products.items;
export const selectCategories = (state) => state.products.categories;