import { useMutation } from "@tanstack/react-query";
import { singInAuth, singOutAuth, singUpAuth } from "./auth.services";
import type { singInRequest, singUpRequest } from "./authType";
import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/stores/auth.store";

export function useSingIn() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: singInRequest) => singInAuth(data),
    onSuccess: () => {
      useAuth.getState().setIsUserLogin(true);
      navigate({ to: "/" });
    },
  });
}

export function useSingUp() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: singUpRequest) => singUpAuth(data),
    onSuccess: () => {
      navigate({ to: "/sing-in" });
    },
  });
}

export function useSingOut() {
  return useMutation({
    mutationFn: () => singOutAuth(),
    onSuccess: () => {
      useAuth.getState().setIsUserLogin(false);
    },
  });
}
