import * as controller from "../controller/controllerPizza.js";
import { randomUUID } from "node:crypto";

const handleParams = (params) => {
    const action = params[0];
    switch (action) {
        case "get":
            if(params[1] === "all") {
                return controller.getPizzas();
            } else if (params[1] === "id") {
                return controller.getPizzaById(params[2]);
            } else {
                return "Petición Incorrecta";
            };
        case "add":
            const pizza = {
                id: randomUUID(),
                ingredientes: params[1].split("-"),
                nombre: params[2],
                precio: Number(params[3]),
                tamaño: params[4],
            };
            return controller.addPizza(pizza);
        case "delete":
            return controller.deletePizza(params[2]);
        default:
            return "Petición incorrecta";
    };
};

export { handleParams };
