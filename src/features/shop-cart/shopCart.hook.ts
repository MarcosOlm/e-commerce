import { queryOptions, useMutation } from "@tanstack/react-query";
import { type deleteShopCartItemRequest, type postShopCarItemRequest, type putShopCartItemRequest } from "./shopCartTypes";
import { insertShopCartItem, updateShopCartItem, deleteShopCartItem, getShopCart } from "./shopCart.services";
import { useEffect, useState } from "react";

export function useInsertCartItem() {
    return useMutation({
        mutationFn: (data: postShopCarItemRequest) => insertShopCartItem(data),
    })
}

export function useUpdateCartItem() {
    return useMutation({
        mutationFn: (data: putShopCartItemRequest) => updateShopCartItem(data),
    })
}

export function useDeleteCartItem() {
    return useMutation({
        mutationFn: (data: deleteShopCartItemRequest) => deleteShopCartItem(data),
    })
}

export function useGetShopCart() {
    return queryOptions({
        queryKey: ['shop-cart'],
        queryFn: () => getShopCart(),
    })
}

export const debounce = (
  fn: (data: putShopCartItemRequest) => void,
  delay = 800
) => {
  let timeout: ReturnType<typeof setTimeout>;

  return (data: putShopCartItemRequest) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn(data);
    }, delay);
  };
}