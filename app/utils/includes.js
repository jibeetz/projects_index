module.exports = {
    check: function (array, term) {

        let isIncluded = false;

        const attributesToSearch = ['name', 'slug', 'environment', 'url', 'group']

        for (let attribute of attributesToSearch) {

            if (array[attribute].toLowerCase().includes(term.toLowerCase()))
                isIncluded = true
        }

        for (let tag of array.tags) {
            if (tag.toLowerCase().includes(term.toLowerCase()))
                isIncluded = true;
        }

        return isIncluded

    }
}