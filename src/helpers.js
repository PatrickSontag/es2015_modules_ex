function choice(items) {
    const randomIdx = Math.floor((Math.random() * items.length) + 1)
    return items[randomIdx]
}

function remove(items, item) {
    const index = items.indexOf(item);
    if (index > -1) {
        items.splice(index, 1);
        return item;
    }
    return undefined;
}

export {choice, remove};