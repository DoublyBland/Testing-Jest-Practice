function capitalize(name){
    let first = name[0];
    first = first.toUpperCase();
    let newName = first + name.slice(1, name.length)
    return newName;
}

module.exports = capitalize;