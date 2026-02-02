import { api } from "@/lib/api";
import type { singInRequest, singUpRequest } from "./authType";

export const singInAuth = async (data: singInRequest): Promise<void> => {
    await api.post('/auth/singin', data)
}

export const singUpAuth = async (data: singUpRequest): Promise<void> => {
    await api.post('/auth/singup', data)
}

export const singOutAuth = async (): Promise<void> => {
    await api.post('/auth/singout')
}

export const meAuth = async (): Promise<void> => {
    await api.get('/auth/me')
}