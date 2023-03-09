export const typeColor = (item: string) => {
    let color = '';

    switch(item) {
        case 'flying': 
            color = '#8899FF'
            break;
        case 'normal':
            color = '#AAAA99'
            break;
        case 'fire':
            color = '#FF4422'
            break;
        case 'bug':
            color = '#AABB22'
            break;
        case 'electric':
            color = '#FFCC33'
            break;
        case 'dark':
            color = '#775544'
            break;
        case'dragon':
            color = '#7766EE'
            break;
        case 'fairy':
            color = '#EE99EE'
            break;
        case 'fighting':
            color = '#BB5544'
            break;
        case 'ghost':
            color = '#6666BB'
            break;
        case 'grass':
            color = '#77CC55'
            break;
        case 'ground':
            color = '#DDBB55'
            break;
        case 'ice':
            color = '#66CCFF'
            break;
        case 'poison':
            color = '#AA5599'
            break;
        case 'psychic':
            color = '#FF5599'
            break;
        case 'rock':
            color = '#BBAA66'
            break;
        case 'steel':
            color = '#AAAABB'
            break;
        case 'water':
            color = '#3399FF'
            break;
    }
    return color;
}