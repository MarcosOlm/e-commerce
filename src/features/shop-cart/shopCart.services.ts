import { api } from "@/lib/api"
import type { deleteShopCartItemRequest, getShopCartResponse, postShopCarItemRequest, putShopCartItemRequest } from "./shopCartTypes"

export const insertShopCartItem = async (data: postShopCarItemRequest): Promise<void> => {
    await api.post('/shopcart', data)
}

export const updateShopCartItem = async (data: putShopCartItemRequest): Promise<void> => {
    await api.put('/shopcart', data)
}

export const deleteShopCartItem = async (data: deleteShopCartItemRequest): Promise<void> => {
    await api.delete('/shopcart', { data })
}

export const getShopCart = async (): Promise<getShopCartResponse> => {
    return (await api.get('/shopcart')).data
}