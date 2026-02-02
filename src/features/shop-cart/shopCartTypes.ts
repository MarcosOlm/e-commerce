import type { product } from "../products/productTypes";

export interface postShopCarItemRequest {
    name: string,
    quantity: number,
}

export interface putShopCartItemRequest {
    name: string,
    quantity: number,
}

export interface deleteShopCartItemRequest {
    name: string,
}

export interface getShopCartResponse {
    product: product,
    cartQuantity: number
}