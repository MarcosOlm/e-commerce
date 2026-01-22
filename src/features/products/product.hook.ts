import { queryOptions } from "@tanstack/react-query";
import type { getProductRequest } from "./productTypes";
import {
  getProductByName,
  getProducts,
  getProductsBrand,
} from "./product.services";

export function useSearchProduct({
  name = "",
  category = "",
  brand = "",
  page,
  size,
}: getProductRequest) {
  return queryOptions({
    queryKey: [
      "search",
      name === "" ? null : name,
      category === "" ? null : category,
      brand === "" ? null : brand,
      page,
      size,
    ],
    queryFn: () => getProducts({ name, category, brand, page, size }),
  });
}

export function useBrand() {
  return queryOptions({
    queryKey: ["brand"],
    queryFn: () => getProductsBrand(),
  });
}

export function useByName(name: string) {
  return queryOptions({
    queryKey: ["name", name],
    queryFn: () => getProductByName(name),
  });
}
