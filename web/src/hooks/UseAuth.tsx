import {  useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";

import api from "../utils/api";
import Cookies from "js-cookie";

import { toast } from "react-toastify";

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [Username, setUsername] = useState('')
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

 

  useEffect(() => {
    const token = Cookies.get("access_token");

    if (token) {
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
      
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        "Erro ao realizar cadastro. Tente novamente.";
      toast.error(errorMessage);
      return
    }
    navigate("/auth")
  };
  const login = async (user: any) => {
    setLoading(true)
    try {
      const data = await api.post("/auth/login", user).then((response) => {
        return response.data;
      });
      await authUser(data);
      setLoading(false)
      toast.success("Login realizado com sucesso!");
    } catch (err: any) {
      const errorMessage =
        err.response.data.message ||
        "Erro ao realizar cadastro. Tente novamente.";
      toast.error(errorMessage);
      setLoading(false)
      return
      
    }
    
  };

  const authUser = async (data: any) => {
    
    
    // Armazenando o token no cookie com um tempo de expiração
      Cookies.set("access_token", data.token);
      setUsername(data.user.name)
      setAuthenticated(true);
      navigate("/")

      console.log(Username)


  };

  const logout = async () => {
    setAuthenticated(false);

    // Removendo o cookie ao fazer logout
    Cookies.remove("access_token");

    toast.success("Até mais")

    navigate("/auth")


  };

  return { register, login, logout, authenticated, loading,Username };
};
