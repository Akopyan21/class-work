const myFruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

const unique = {};

myFruits.forEach(item => {
    unique[item] = true;
});

console.log(unique);

const uniqueArray = Object.keys(unique);

console.log(uniqueArray);

const uniqueItems = (list) => {
    const unique = {};

    list.forEach(item => {
        unique[item] = true;
    });

    return Object.keys(unique);
}



