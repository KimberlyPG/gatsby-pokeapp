export const capitalizeName = (name: string) =>  {
    if(name?.length > 0) {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }
}