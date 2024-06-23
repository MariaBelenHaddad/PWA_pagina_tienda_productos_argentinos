//EN ESTE ARCHIVO: QUERIES A BASE DE DATOS
import {db} from "../dbConnection.js" //Importamos la conexión a la DB

export class ItemsModel {

    //GET - All products
    static async getAll() {
        const [items, _info] = await db.query(`SELECT * FROM products`);
        console.log(items, _info);
        return items.length ? items : null;
    }

    //GET - Get by Id
    static async getById(productId) {
        const [items, _info] = await db.query(
            `SELECT * FROM products WHERE id = (?)`, [productId]);
        console.log(items, _info);
        return items.length ? items : null;
    }

    //GET - Get by Category
    static async getByCategory(category) {
        const [items, _info] = await db.query(
            `SELECT * FROM products 
            WHERE category = ?`, [category]);
        console.log(items, _info);
        return items.length ? items : null;
    }
    
    //POST - New product
    static async newItem(item){
        const { productId, productName, stock, price, category, image } = item;
        const [result, _info] = await db.query(`INSERT INTO products (id, productName, stock, price, category, image) VALUES (?, ?, ?, ?, ?, ?)`,
            [productId, productName, stock, price, category, image]
        );
        return result ? result : null;
    }

    //POST - Suscribe to newsletter
    static async newEmail(email){
        const [result, _info] = await db.query(`INSERT INTO newsletter (email) VALUES (?)`,
            [email]
        );
        return result ? result : null;
    }

    //PATCH - Update product (partial update of an existing product)
    static async updateById(productId, partialItem){
        let partialQuery = "";
        for (const key in partialItem) {
            partialQuery += `${key} = '${partialItem[key]}', `;
          } 
        partialQuery = partialQuery.slice(0, -2); //Elimino el espacio y el ; del final para no tener errores en SQL

        const [result, _info] = await db.query(`UPDATE products SET ${partialQuery} WHERE id = (?)`,
        [productId]);
        return result    
    }

    //DELETE - Delete product
    static async deleteById(productId){
        const [result] = await db.query(`DELETE FROM products WHERE id = (?)`, [productId]);
        console.log(result) //Muestra el resultado de la operación en la db
        return result.affectedRows; //Si affectedRows = 1 (borró el item), si es = 0 (no consiguió borrar el item)
    }

}
