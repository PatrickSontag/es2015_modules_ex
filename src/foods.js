function choice(items) {
    return items.random()
}

function remove(items, item) {
    const index = items.indexOf(item);
    if (index > -1) {
        items.splice(index, 1);
        return item;
    }
    return undefined;
}