
//EN ESTE ARCHIVO: FUNCIONES QUE RESPONDEN A LAS PETICIONES

// import products from "../model/products.json" //Importamos los datos (ya no lo necesito ahora voy a usar la db)

import { validatePartialItem} from "../validators/ItemSchema.js"; //Importamos la función para validar 
import { ItemsModel } from "../model/products.js"

//Exportamos la clase
export class itemsController { 
    //Get all products
    static async getAll (req,res) {
        //res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500") 
        //Resuelve el problema de CORS (Cross-Origin-Resource-Sharing) , http:front-end (para peticiones GET, HEAD, POST)
        const products = await ItemsModel.getAll();
        if (products != null){
            res
        //.send("Ingreso por endpoint /products")
        .status(200)
        .json({info:{status:200, message: "Request: Get all products"}, data: products})
        }
        else {
            res
        .status(404)
        .json({info:{status:404, message: "No products in database"}})
        }
    };

    //Health check
    static healthCheck (req,res) {
        res.json({status:200, message: "Server is running ok"})
    };

    //Get by Id
    static async getById (req, res) {
        const search = await ItemsModel.getById(req.params.productId);
        if (search != null){
            res
        .status(200)
        .json({info:{status:200, message: "Product founded with id: "+req.params.productId}, data: search})
        }
        else {
            res
        .status(404)
        .json({info:{status:404, message: "We didn´t find your product"}})
        }
    };

    //Get by Category
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


    //Post new product
    static async newItem (req,res) {
        const validationResult = validatePartialItem(req.body);
        if (validationResult.error) {
            res.status(422).json({info: {status:422, message: "Validation errors"}, errors: validationResult.error.issues });
        }
        
        else{
            const newItem = await ItemsModel.newItem(req.query);
            //console.log(validationResult)
            //products.push(validationResult.data);
            res.status(201).json({info: {status:201, message: "New item added to products"}, data: validationResult })
        }

        /*const {id, productName, stock, price, category} = req.body
        const newItem = {
            id, productName, stock, price, category
        }
        console.log(newItem)
        products.push(newItem);*/
        
    };

    //Update product
    static async updateItem (req,res) {
        const validationResult = validatePartialItem(req.body);
        //Si tengo errores de validación
        if (validationResult.error) {
            res.status(422).json({info: {status:422, message: "Validation errors"}, errors: validationResult.error.issues });
        }
        //Si me envían un objeto vacío:
        if(!Object.keys(validationResult.data).length){ 
            return res.status(422).json({
                info: { status:422, message: "You must include at least one valid field to modify"},
                errors: validationResult.error.issues,
            })
        }
        const {productId} = req.params;
        const updatedItem = await ItemsModel.updateById(productId, validationResult);

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
        res.status(200).json({info: {status:200, message: "Item updated"}, data: updatedItem })
    };

    //Delete by Id
    static deleteById (req, res) {
        //res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500"); 
        //res.header("Access-Control-Allow-Methods", "DELETE"); 
        const { itemId } = req.params;
        const searchId = products.findIndex((s) => s.id === itemId);
        //console.log(search)
        if ( searchId === -1 ) {
            return res.status(404).json({info: {status:404, message: "Product not found"}})
        }
        products.splice(searchId, 1);
        return res.status(204).json({info: {status:204, message: "Movie deleted: "+products.id(searchId)}});
    };

}
