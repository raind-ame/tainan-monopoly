function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function roll()
{
    let randomInt = getRandomInt(1, 6);
    console.log(randomInt)
}