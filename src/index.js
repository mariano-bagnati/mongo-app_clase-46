import { createConnectionMongo, createDisconnectionMongo } from "./database/mongodb.js";
import { handleParams } from "./utils/handleParams.js"

const main = async () => {
    const params = process.argv.splice(2);
    await createConnectionMongo();
    const response = await handleParams(params);
    console.log(response);
    await createDisconnectionMongo();
};

main();

