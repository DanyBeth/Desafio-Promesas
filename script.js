const emitter = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Información Enviada!");
        }, 3000);
    });
};

const albums = async () => {
    const url = "https://jsonplaceholder.typicode.com/albums/5/photos";

    try {
        const response = await fetch(url);
        const data = await response.json();
        const data20 = [];
        for (let i = 0; i < 20; i++) {
            data20.push(data[i]);
        }
        data20.map(a => console.log(`albumId: ${a.albumId}, id: ${a.id}, title: ${a.title}`));
    }   catch (error) {
        console.log(error);
    }
};

const main = async () => {
    await albums();
    const msg = await emitter();
    console.log(msg);
};

main();


