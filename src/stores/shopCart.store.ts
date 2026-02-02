import type { product } from "@/features/products/productTypes";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface shopCartItem {
  product: product;
  cartQuantity: number;
}

interface shopCartState {
  productsItems: shopCartItem[];
  oneMoreQuant: (item: shopCartItem) => void;
  oneLessQuant: (item: shopCartItem) => void;
  addShopCartItem: (item: shopCartItem) => void;
  removeShopCartItem: (item: shopCartItem) => void;
}

export const useShopCart = create<shopCartState>()(
  persist(
    (set) => ({
      productsItems: [],
      oneMoreQuant: (item) => {
        set((state) => ({
          productsItems: state.productsItems.map((cartItem) =>
            cartItem.product.name === item.product.name
              ? { ...cartItem, cartQuantity: item.cartQuantity + 1 }
              : cartItem,
          ),
        }))
      },
      oneLessQuant: (item) => {
        set((state) => ({
          productsItems: state.productsItems.map((cartItem) =>
            cartItem.product.name === item.product.name
              ? { ...cartItem, cartQuantity: item.cartQuantity - 1 }
              : cartItem,
          ),
        }))
      },
      addShopCartItem: (item) =>{
        set((state) => ({
          productsItems: [...state.productsItems, item],
        }))
      },
      removeShopCartItem: (item) => {
        set((state) => ({
          productsItems: state.productsItems.filter(
            (cartItem) => cartItem.product.name !== item.product.name,
          ),
        }));
      },
    }),
    { name: "shop-cart" },
  ),
);


