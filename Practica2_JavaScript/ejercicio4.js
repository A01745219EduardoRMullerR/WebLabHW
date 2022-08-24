const funcAsync = async () => {
    try {
        const toDo = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const pendiente = await toDo.json();
        let {userId, id, title, completed} = pendiente;
        console.log(userId, id, title, completed);
    } catch (error) {
        console.warn(error);
    }
}

funcAsync();