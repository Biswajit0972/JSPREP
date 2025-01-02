function solve(name) {
    return document.querySelector(`${name}`)
}

const childrenP = solve(".ul-parent")
console.log(childrenP.removeChild(childrenP.lastElementChild))