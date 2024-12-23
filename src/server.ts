import app, { startServer } from "./app";

const PORT: number = 3000;

const main = async () =>{
    await startServer();
    app.listen(PORT,()=>{console.log(`La aplicacion se esta ejecutando en el puerto ${PORT}`)});
}

main();
