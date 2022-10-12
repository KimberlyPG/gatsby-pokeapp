export const pokemonColor = (color) => {
    let newColor = '';

    switch(color) {
        case 'red': 
            newColor = '#EDC3C5'
            break;
        case 'blue':
            newColor = '#B9DAEC'
            break;
        case 'yellow':
            newColor = '#EDEBC3'
            break;
        case 'green':
            newColor = '#C3EDC7'
            break;
        case 'purple':
            newColor = '#E9DAF2'
            break;
        case 'brown':
            newColor = '#EDE0C3'
            break;
        case'pink':
            newColor = '#F2DAEC'
            break;
    }
    return newColor;
}