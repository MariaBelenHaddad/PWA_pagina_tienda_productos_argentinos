//IMPORTAMOS LA CONECCIÓN A LA DB

import {db} from "../dbConnection.js"

export class ItemsModel {
    static async getAll() {
        const [items, _info] = await db.query(`SELECT * FROM products`);
        console.log(items, _info);
        return items.length ? items : null;
    }
    static async getById(id) {
        const [items, _info] = await db.query(
            `SELECT * FROM products WHERE id = ?`, [id]);
        console.log(items, _info);
        return items.length ? items : null;
    }
    static async getByCategory(category) {
        const [items, _info] = await db.query(
            `SELECT * FROM products WHERE category = ?`, [category]);
        console.log(items, _info);
        return items.length ? items : null;
    }
    static async newItem(productName, stock, price, category, image){
        const [items, _info] = await db.query();

    }
    static async updateById(productId, validatePartialItem){
        const [items, _info] = await db.query();

    }

}
