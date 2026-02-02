import { api } from "@/lib/api";
import type { getProductsBrandResponse, getProductRequest, getProductResponse, product, getProductsFeaturedResponse, getProductsCategoryResponse } from "./productTypes";

export const getProducts = async ({name, category, brand, page, size}: getProductRequest): Promise<getProductResponse> => {
    return (await api.get(`/product?name=${name}&category=${category}&brand=${brand}&page=${page}&size=${size}`)).data
}

export const getProductsFeatured = async (): Promise<getProductsFeaturedResponse> => {
    return (await api.get('/product/featured')).data
}

export const getProductsBrand = async (): Promise<getProductsBrandResponse> => {
    return (await api.get('/product/brand')).data
}

export const getCategoryInfo = async (): Promise<getProductsCategoryResponse> => {
    return (await api.get('/product/category')).data
}

export const getProductByName = async (name: string): Promise<product> => {
    return (await api.get(`product/name?name=${name}`)).data
}

