
let mainPlayer = {
    name: "Walter White",
    level: 2
}

let enemies = [
    {
        name: "Tuco Salamanca",
        level: 1
    },
    {
        name: "Mike Ehrmantraut",
        level: 5
    },
    {
        name: "Gustavo Fring",
        level: 9
    },
    {
        name: "Todd Alquist",
        level: 15
    },
]

document.getElementById("displayLevel").innerText = mainPlayer.level
let nameButton = document.getElementById("nameButton")
nameButton.addEventListener("click", setName)
document.getElementById("displayNameEnemyOne").innerText = enemies[0].name
document.getElementById("displayNameEnemyTwo").innerText = enemies[1].name
document.getElementById("displayNameEnemyThree").innerText = enemies[2].name
document.getElementById("displayNameEnemyFour").innerText = enemies[3].name
document.getElementById("displayLevelEnemyOne").innerText = enemies[0].level
document.getElementById("displayLevelEnemyTwo").innerText = enemies[1].level
document.getElementById("displayLevelEnemyThree").innerText = enemies[2].level
document.getElementById("displayLevelEnemyFour").innerText = enemies[3].level

function setName() {
    let username = document.getElementById("name").value
    document.getElementById("displayName").innerText = username
}

function attackEnemy(enemyId) {
    const enemy = enemies[enemyId-1]
    const nextEnemy = enemies[enemyId]
    if (mainPlayer.level > enemy.level) {
        alert("Haz derrotado a " + enemy.name)
        mainPlayer.level = nextEnemy.level + 1
        document.getElementById("displayLevel").innerText = mainPlayer.level
    }else{
        alert("Tu nivel no es suficiente para derrotar a " + enemy.name)
    }
}