console.log("hola mundo");

const funcAsync = async () => {
    try {
        const peticion = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
        const informacion = await peticion.json();
        console.log(informacion);
    } catch (error) {
        console.warn(error);
    }
}

funcAsync();