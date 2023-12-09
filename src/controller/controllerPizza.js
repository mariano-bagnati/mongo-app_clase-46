import { client } from "../database/mongodb.js";

export const getPizzasCollection = async () => {
    try {
        const database = client.db();
        const collection = database.collection("pizzas");
        return collection;
    } catch (error) {
        console.log(error.code, error.message);
    };
};

export const getPizzas = async () => {
    try {
       const collection = await getPizzasCollection();
       const pizzas = await collection.find().toArray();
       return pizzas;
    } catch (error) {
       console.log(error.code, error.message);
    };
};

export const getPizzaById = async (id) => {
    try {
        const collection = await getPizzasCollection();
        const pizza = await collection.findOne({ id: id });
        return pizza;
    } catch (error) {
        console.log(error.code, error.message);
    };
};

export const addPizza = async (pizza) => {
    try {
        const collection = await getPizzasCollection();
        const foundedPizza = await collection.findOne({ nombre: pizza.nombre });

        if(foundedPizza) {
            return "La pizza ya existe";
        } 
        await collection.insertOne(pizza);
        return "Pizza agregada con éxito";
    } catch (error) {
        console.log(error.code, error.message);
    };
};

export const deletePizza = async (id) => {
    try {
        const collection = await getPizzasCollection();
        const foundedPizza = await collection.findOne({ id: id });

        if(!foundedPizza) {
            return "La pizza no existe en la base de datos";
        }
        await collection.deleteOne({ id: id});
        return "La piza fue borrada con éxito";
    } catch (error) {
        console.log(error.code, error.message);
    };
};

