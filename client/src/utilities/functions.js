export const dateType = (string) => {
    if (string) {
        let y = string.substr(0, 4);
        let m = string.substr(6, 2) - 1;
        let d = string.substr(4, 2);
        let date = new Date(y, m, d)

        return date.toLocaleDateString()
    }
    else {
        return "N/A"
    }
}

export const formatDate = (string) => {
    if (string) {
        const pos = string.search('T');
        const date = string.slice(0, pos);
        const [year, month, day] = date.split('-')
        const result = [month, day, year].join('/')
        
        return result
    }
}