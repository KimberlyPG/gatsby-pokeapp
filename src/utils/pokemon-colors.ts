export const pokemonColor = (color: string) => {
    let newColor = '';

    switch(color) {
        case 'red': 
            newColor = '#EE8130'
            break;
        case 'blue':
            newColor = '#6390F0'
            break;
        case 'yellow':
            newColor = '#F7D02C'
            break;
        case 'green':
            newColor = '#7AC74C'
            break;
        case 'purple':
            newColor = '#A33EA1'
            break;
        case 'brown':
            newColor = '#A8A77A'
            break;
        case'pink':
            newColor = '#D685AD'
            break;
    }
    return newColor;
}