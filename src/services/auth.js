import api from "./api";

// Función para el registro
export const registerUser = async (userData) => {
    try {
        const response = await api.post("/register", userData);
        return response.data;
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        throw error;
    }
};

// Función para el inicio de sesión
export const loginUser = async (credentials) => {
    try {
        const response = await api.post("/login", credentials);
        return response.data;
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        throw error;
    }
};
