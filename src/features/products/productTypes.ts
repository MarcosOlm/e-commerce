export interface product {
    name: string,
    description: string,
    category: "roupas" | "calçados" | "acessórios" | "beleza";
    brand: "nike" | "adidas" | "zara" | "gucci";
    quantity: number,
    price: number,
    imgPath: string,
}

export interface getProductResponse {
    content: product[],
    first?: boolean,
    last?: boolean,
    number?: number,
    totalElements?: number,
    totalPages?: number,
}

export interface getProductRequest {
    name?: string | null,
    category?: string | null,
    brand?: string | null,
    page?: number | null,
    size?: number | null,
}

export type getProductsBrandResponse = product[];
