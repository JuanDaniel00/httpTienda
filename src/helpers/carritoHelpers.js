import Carrito from "../models/carrito.js"

export const carritoHelper = {
    existeCarritoIdValido: async (idUsuario) => {
        const existe = await Carrito.findOne({ idUsuario: Number(idUsuario) });
        return !!existe;
    }
}