export interface HomeProps {
    allPokemons: AllPokemons;
}

export interface AllPokemons {
    nodes: Node[];
}

export interface Node {
    name:            string;
    id:              string;
    total:           number;
    hp:              number;
    sp_def:          number;
    sp_atk:          number;
    defense:         number;
    attack:          number;
    type:            string[];
    speed:           number;
    national_number: string;
    natl_num:        number;
    sprites:         Sprites;
}

export interface Sprites {
    normal: string;
    large: string;
}

export interface Stats {
    attack:          number;
    defense:         number;
    special_attack:  number;
    hp:              number;
    special_defense: number;
    speed:           number;
}

export interface PokemonData {
    abilities?:                Ability[];
    base_experience?:          number;
    forms?:                    Species[];
    game_indices?:             GameIndex[];
    height?:                   number;
    held_items?:               HeldItem[];
    id:                       number;
    is_default?:               boolean;
    location_area_encounters?: string;
    moves?:                    Move[];
    name?:                     string;
    order?:                    number;
    past_types?:               PastType[];
    species?:                  Species;
    sprites:                  PokemonDataSprites;
    stats:                    Stat[];
    types:                    Type[];
    weight?:                   number;
}

export interface Ability {
    ability:   Species;
    is_hidden: boolean;
    slot:      number;
}

export interface GameIndex {
    game_index: number;
    version:    Species;
}

export interface HeldItem {
    item:            Species;
    version_details: VersionDetail[];
}

export interface VersionDetail {
    rarity:  number;
    version: Species;
}

export interface Move {
    move:                  Species;
    version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
    level_learned_at:  number;
    move_learn_method: Species;
    version_group:     Species;
}

export interface PastType {
    generation: Species;
    types:      Type[];
}

export interface Type {
    slot: number;
    type: Species;
}

export interface GenerationV {
    "black-white": Sprites;
}

export interface GenerationIv {
    "diamond-pearl":        Sprites;
    "heartgold-soulsilver": Sprites;
    platinum:               Sprites;
}

export interface Versions {
    "generation-i":    GenerationI;
    "generation-ii":   GenerationIi;
    "generation-iii":  GenerationIii;
    "generation-iv":   GenerationIv;
    "generation-v":    GenerationV;
    "generation-vi":   { [key: string]: Home };
    "generation-vii":  GenerationVii;
    "generation-viii": GenerationViii;
}

export interface  PokemonDataSprites {
    back_default?:       string;
    back_female?:        null;
    back_shiny?:         string;
    back_shiny_female?:  null;
    front_default?:      string;
    front_female?:       null;
    front_shiny?:        string;
    front_shiny_female?: null;
    other:             Other;
    versions?:          Versions;
    animated?:          Sprites;
}

export interface GenerationI {
    "red-blue": RedBlue;
    yellow:     RedBlue;
}

export interface RedBlue {
    back_default:      string;
    back_gray:         string;
    back_transparent:  string;
    front_default:     string;
    front_gray:        string;
    front_transparent: string;
}

export interface GenerationIi {
    crystal: Crystal;
    gold:    Gold;
    silver:  Gold;
}

export interface Crystal {
    back_default:            string;
    back_shiny:              string;
    back_shiny_transparent:  string;
    back_transparent:        string;
    front_default:           string;
    front_shiny:             string;
    front_shiny_transparent: string;
    front_transparent:       string;
}

export interface Gold {
    back_default:       string;
    back_shiny:         string;
    front_default:      string;
    front_shiny:        string;
    front_transparent?: string;
}

export interface GenerationIii {
    emerald:             OfficialArtwork;
    "firered-leafgreen": Gold;
    "ruby-sapphire":     Gold;
}

export interface OfficialArtwork {
    front_default: string;
    front_shiny:   string;
}

export interface Home {
    front_default:      string;
    front_female?:       null;
    front_shiny?:        string;
    front_shiny_female?: null;
}

export interface GenerationVii {
    icons:                  DreamWorld;
    "ultra-sun-ultra-moon": Home;
}

export interface DreamWorld {
    front_default: string;
    front_female?:  null;
}

export interface GenerationViii {
    icons: DreamWorld;
}

export interface Other {
    dream_world:        DreamWorld;
    home:               Home;
    "official-artwork"?: OfficialArtwork;
}

export interface Stat {
    base_stat: number;
    effort?:    number;
    stat:      Species;
}

export interface PokemonDescription {
    base_happiness?:        number;
    capture_rate?:          number;
    color:                  Color;
    egg_groups?:            Color[];
    evolution_chain?:       EvolutionChain;
    evolves_from_species?:  Color;
    flavor_text_entries:   FlavorTextEntry[];
    form_descriptions?:     any[];
    forms_switchable?:      boolean;
    gender_rate?:           number;
    genera?:                Genus[];
    generation?:            Color;
    growth_rate?:           Color;
    habitat?:               Color;
    has_gender_differences?:boolean;
    hatch_counter?:         number;
    id?:                     number;
    is_baby?:               boolean;
    is_legendary?:          boolean;
    is_mythical?:           boolean;
    name?:                  string;
    names?:                 Name[];
    order?:                 number;
    pal_park_encounters?:   PalParkEncounter[];
    pokedex_numbers?:       PokedexNumber[];
    shape?:                 Color;
    varieties?:             Variety[];
}

export interface Color {
    name: string;
    url:  string;
}

export interface EvolutionChain {
    url: string;
}

export interface FlavorTextEntry {
    flavor_text: string;
    language?:    Color;
    version?:     Color;
}

export interface Genus {
    genus:    string;
    language: Color;
}

export interface Name {
    language: Color;
    name:     string;
}

export interface PalParkEncounter {
    area:       Color;
    base_score: number;
    rate:       number;
}

export interface PokedexNumber {
    entry_number: number;
    pokedex:      Color;
}

export interface Variety {
    is_default: boolean;
    pokemon:    Color;
}

export interface Evolution {
    baby_trigger_item?: null;
    chain:             Chain;
    id?:                number;
}

export interface Chain {
    evolution_details?: EvolutionDetail[];
    evolves_to:        Chain[];
    is_baby?:           boolean;
    species:           Species;
}

export interface EvolutionDetail {
    gender:                  null;
    held_item:               null;
    item:                    null;
    known_move:              null;
    known_move_type:         null;
    location:                null;
    min_affection:           null;
    min_beauty:              null;
    min_happiness:           null;
    min_level:               number;
    needs_overworld_rain:    boolean;
    party_species:           null;
    party_type:              null;
    relative_physical_stats: null;
    time_of_day:             string;
    trade_species:           null;
    trigger:                 Species;
    turn_upside_down:        boolean;
}

export interface Species {
    name: string;
    url:  string;
}

export interface ResultsLocation {
    pathname: string;
    search:   string;
    hash:     string;
    href:     string;
    origin:   string;
    protocol: string;
    host:     string;
    hostname: string;
    port:     string;
    state:    State;
    key:      string;
}

export interface State {
    "0": Node[];
    key: string;
}

export interface Stats {
    attack:          number;
    defense:         number;
    special_attack:  number;
    hp:              number;
    special_defense: number;
    speed:           number;
}

export interface GraphCmsData {
    id:                  number;
    name:                string;
    generation_id:       number;
    pokemon_v2_pokemons: PokemonV2Pokemon[];
}

export interface PokemonV2Pokemon {
    pokemon_v2_pokemonsprites: PokemonV2Pokemonsprite[];
    pokemon_v2_pokemontypes: PokemonV2Type[];
}

export interface PokemonV2Pokemonsprite {
    sprites: string;
}

export interface PokemonV2Type {
    pokemon_v2_type: TypeName;
}

export interface TypeName {
    name: string;
}
