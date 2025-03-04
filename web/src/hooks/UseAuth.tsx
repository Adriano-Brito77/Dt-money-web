import { useEffect, useState } from "react";

import api from "../utils/api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const register = async (user: any) => {
    try {
      const data = await api
        .post("user/register", user)
        .then((response) => response.data);
      toast.success(`${data.message}`);
      await navigate("/auth");
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        "Erro ao realizar cadastro. Tente novamente.";
      toast.error(errorMessage);
    }
  };
  const login = async (user: any) => {
    try {
      const data = await api.post("/auth/login", user).then((response) => {
        return response.data;
      });
      await authUser(data);
      toast.success("Login realizado com sucesso!");
    } catch (err: any) {
      const errorMessage =
        err.response.data.message ||
        "Erro ao realizar cadastro. Tente novamente.";
      toast.error(errorMessage);
    }
  };

  const authUser = async (data: any) => {
    setAuthenticated(true);
    console.log(data);
    // Armazenando o token no cookie com um tempo de expiração
    Cookies.set("token", data.acess_token);

    navigate("/");
  };

  const logout = async () => {
    setAuthenticated(false);

    // Removendo o cookie ao fazer logout
    Cookies.remove("token");

    delete api.defaults.headers.Authorization;

    navigate("/register");
  };

  return { register, login, logout, authenticated, loading };
};
