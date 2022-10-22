export const typeColor = (item: string) => {
    let color = '';

    switch(item) {
        case 'flying': 
            color = 'PowderBlue'
            break;
        case 'normal':
            color = 'RosyBrown'
            break;
        case 'fire':
            color = 'Tomato'
            break;
        case 'bug':
            color = 'SeaGreen'
            break;
        case 'electric':
            color = 'Gold'
            break;
        case 'dark':
            color = 'Black'
            break;
        case'dragon':
            color = 'CornflowerBlue'
            break;
        case 'fairy':
            color = 'DeepPink'
            break;
        case 'fighting':
            color = 'Chocolate'
            break;
        case 'ghost':
            color = 'DarkSlateBlue'
            break;
        case 'grass':
            color = 'ForestGreen'
            break;
        case 'ground':
            color = 'SaddleBrown'
            break;
        case 'poison':
            color = 'RebeccaPurple'
            break;
        case 'psychic':
            color = 'Magenta'
            break;
        case 'rock':
            color = 'SaddleBrown'
            break;
        case 'steal':
            color = 'SlateGray'
            break;
        case 'water':
            color = 'RoyalBlue'
            break;
    }
    return color;
}