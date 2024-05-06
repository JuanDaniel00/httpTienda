import Carrito from "../models/carrito.js"
import bcryptjs from "bcryptjs";
// router.get("/listarCarritoId/:id", [
//     check("id", "El id es obligatorio").not().isEmpty(),
//     check("id", "El id debe ser un número").isNumeric(),
//     check("id").custom(carritoHelper.existeCarritoIdValido),
//     validarCampos
// ], httpCarrito.listarCarritoId);
// router.post("/insertarCarrito", [
//     check("idUsuario", "El idUsuario es obligatorio").not().isEmpty(),
//     check("idProducto", "El idProducto es obligatorio").not().isEmpty(),
//     check("cantidad", "La cantidad es obligatoria").not().isEmpty(),
//     check("cantidad", "La cantidad debe ser un número").isNumeric(),
//     validarCampos,
//     validarJWT
// ], httpCarrito.insertarCarrito);
// router.delete("/eliminarCarrito/:id", [
//     check("id", "El id es obligatorio").not().isEmpty(),
//     check("id", "El id debe ser un número").isNumeric(),
//     check("id").custom(carritoHelper.existeCarritoIdValido),
//     validarCampos,
//     validarJWT
// ], httpCarrito.eliminarCarrito);
const httpCarrito = {
    listarCarritoId: async (req, res) => {
        try {
            const { id } = req.params
            const result = await Carrito.listarCarritoId(id)
            res.json(result)
        } catch (error) {
            res.json({ error: error.message })
        }
    },
    insertarCarrito: async (req, res) => {
        try {
            const { idUsuario, idProducto, cantidad } = req.body
            const result = await Carrito.insertarCarrito(idUsuario, idProducto, cantidad)
            res.json(result)
        } catch (error) {
            res.json({ error: error.message })
        }
    },
    eliminarCarrito: async (req, res) => {
        try {
            const { idUsuario, idProducto } = req.body
            const result = await Carrito.eliminarCarrito(idUsuario, idProducto)
            res.json(result)
        } catch (error) {
            res.json({ error: error.message })
        }
    }
}

export default httpCarrito