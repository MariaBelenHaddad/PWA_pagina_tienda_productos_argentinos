
//EN ESTE ARCHIVO: FUNCIONES QUE RESPONDEN A LAS PETICIONES
// import products from "../model/products.json" //Importamos los datos (ya no lo necesito ahora voy a usar la db)

import { validateItem, validatePartialItem } from "../validators/ItemSchema.js"; //Importamos la función para validar 
import { ItemsModel } from "../model/products.js"

//Exportamos la clase
export class itemsController { 

    //GET - All products (Ingreso por endpoint "/products")
    static async getAll (req,res) {
        //res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500") 
        //Resuelve el problema de CORS (Cross-Origin-Resource-Sharing) , http:front-end (para peticiones GET, HEAD, POST)
        const products = await ItemsModel.getAll();
        if (products != null){
            res
        .status(200)
        .json({info:{status:200, message: "Request: Get all products"}, data: products})
        }
        else {
            res
        .status(404)
        .json({info:{status:404, message: "No products in database"}})
        }
    };

    //GET - Health check (Ingreso por endpoint "/health")
    static healthCheck (req,res) {
        res.json({status:200, message: "Server is running ok"})
    };

    //GET - Get by Id (Ingreso por endpoint "/products/search/:productId")
    static async getById (req, res) {
        const search = await ItemsModel.getById(req.params.productId);
        if (search != null){
            res
        .status(200)
        .json({info:{status:200, message: "Product founded"}, data: search})
        }
        else {
            res
        .status(404)
        .json({info:{status:404, message: "We didn´t find your product"}})
        }
    };

    //GET - Get by Category (Ingreso por endpoint "/products/search" + query)
    static async getByCategory (req, res) {
        const search = await ItemsModel.getByCategory(req.query.category);
        if (search != null){
            res
        .status(200)
        .json({info:{status:200, message: "Products by category: "+req.query.category}, data: search})
        }
        else {
            res
        .status(404)
        .json({info:{status:404, message: "No products"}})
        }
    };

    //POST - New product (Ingreso por endpoint "/products/new")
    static async newItem (req,res) {
        const validationResult = validateItem(req.body); 

        if (validationResult.error) {
            res
            .status(422)
            .json({info: {status:422, message: "Validation errors"}, errors: validationResult.error.issues });
        }
        else{
            const productId = crypto.randomUUID();
            validationResult.data.productId = productId
            const newItem = await ItemsModel.newItem(validationResult.data);
            //console.log(validationResult)
            //products.push(validationResult.data);
            newItem
            ? 
            res
            .status(201)
            .json({info: {status:201, message: "New item added to products"}, data: {...validationResult.data} })
            : res
            .status(500)
            .json({ info: {status:500, message: "Internal Server Error"}})

        }

        /*const {id, productName, stock, price, category} = req.body
        const newItem = {
            id, productName, stock, price, category
        }
        console.log(newItem)
        products.push(newItem);*/   
    };

    //POST - Suscribe to newsletter (Ingreso por endpoint "/sendEmail") 
    static async newEmail (req,res) {
        //res.header("Access-Control-Allow-Origin", "http://192.168.1.6"); //"http://127.0.0.1:5500"
        //res.header("Access-Control-Allow-Methods", "POST"); 
        const newEmail = req.body; 
        const newItem = await ItemsModel.newEmail(newEmail);
        
        newItem
        ? 
        res
        .status(201)
        .json({info: {status:201, message: "Email suscribed"}})
        : res
        .status(500)
        .json({ info: {status:500, message: "Internal Server Error"}})
};

    //PATCH - Update product (Ingreso por endpoint "/products/:productId")
    static async updateItem (req,res) {
        const { productId } = req.params;

        const isItem = await ItemsModel.getById(productId);
        if (isItem === null) {
            return res
            .status(404)
            .json({ info: { status: 404, message: "Product not founded" }});
        }

        const validationResult = validatePartialItem(req.body);
        if (validationResult.error) { //Si tengo errores de validación
            res
            .status(422)
            .json({info: {status:422, message: "Validation errors"}, errors: validationResult.error.issues });
        }

        if(!Object.keys(validationResult.data).length == true){ //Evalúa si me envian un objeto vacío
            return res
            .status(422)
            .json({
                info: { status:422, message: "You must include at least one valid field to modify"}
            })
        }

        else{
        const updatedItem = await ItemsModel.updateById(productId, validationResult.data);
        updatedItem 
        ? res
        .status(200)
        .json({info: {status:200, message: "Item updated"}, data: updatedItem })
        : res
        .status(500)
        .json({ info: { status: 500, message: "Internal Server Error" } })
        }

        //FUNCIÓN ANTIGUA CON UN ARRAY DE OBJETOS:
        /*const itemIndex = products.findIndex( (m) => m.id == productId);
        if (itemIndex === -1) {
            return res
            .status(404)
            .json({info: { status: 404, message: "Item not found"}})
        }
        const updatedItem = {
            ...products[itemIndex],
            ...validationResult.data 
        };
        products[itemIndex] = updatedItem;*/
        
        
    };

    //DELETE - Delete product (Ingreso por endpoint "/products/:productId")
    static async deleteById (req, res) {
        //res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500"); --> Para resolver CORS
        //res.header("Access-Control-Allow-Methods", "DELETE"); 
        const { productId } = req.params;
        const result = await ItemsModel.deleteById(productId);
        if (result > 0){ 
            res
            .status(200)
            .json({ info: {status: 200, message: "Product deleted" }});
        } else {
        res
        .status(404)
        .json({ info: {status: 404, message: "Product not found" }});
        }
    };

        //FUNCIÓN ANTIGUA CON UN ARRAY DE OBJETOS:
        /*const searchId = products.findIndex((s) => s.id === productId);

        if ( searchId === -1 ) {
            return res
            .status(404)
            .json({info: {status:404, message: "Product not found"}})
        }
        products.splice(searchId, 1);
        return res
        .status(204)
        .json({info: {status:204, message: "Movie deleted: "+products.id(searchId)}});
    };*/

}
