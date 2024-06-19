function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const locate = [
    [400, 470],
    [400, 320],
    [400, 150],
    [400, -10],
    [400, -180],
    [400, -370],
    [300, -370],
    [210, -370],
    [120, -370],
    [50, -370],
    [-40, -370],
    [-40, -180],
    [-40, -20],
    [-40, 180],
    [-40, 320],
    [-40, 470],
    [50, 470],
    [120, 470],
    [210, 470],
    [300, 470]
] // [top, left]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let isRolling = false

async function roll()
{

    if (isRolling) {
        return;
    }

    isRolling = true
    let guide = document.getElementById("guide")
    const player = document.getElementById("player")
    let step = document.getElementById("step")  
    let randomInt = getRandomInt(1, 6);
    guide.textContent = "你的點數是：" + randomInt
    V = parseInt(step.value, 10)
    console.log("randomInt is ", randomInt, "\nstep is ", V)
    for (let i = 1; i <= randomInt; i += 1) {
        player.style.marginTop = locate[(V+i)%20][0] + 'px'
        player.style.marginLeft = locate[(V+i)%20][1] + 'px'
        await sleep(200) 
    }

    V += randomInt
    V %= 20
    step.value = String(V)
    isRolling = false
}