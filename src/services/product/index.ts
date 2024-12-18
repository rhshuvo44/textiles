

export const getProducts = async () => {


    const res = await fetch(
        'https://dummyjson.com/products',

    );
    return res.json();
};