const funcAsync = async () => {
    try {
        const albums = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos', {
            mode: 'no-cors' // se puso está linea porque en la consola nos marcaba error y buscando en la documentación con esto se solucionó
        });
        const fotos = await albums.json();
        let {AlbumID, ID, Title, Url, thumbnailURL} = fotos;
        console.log(AlbumID, ID, Title, Url, thumbnailURL);
    } catch (error) {
        console.warn(error);
    }
}

funcAsync();