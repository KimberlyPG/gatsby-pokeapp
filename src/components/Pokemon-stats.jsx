import React from "react";

const PokemonStats = ({ stats }) => {
    return (
        <div className="text-xs mt-2">
            <div className="bg-green-400 text-white w-4/5 font-semibold">BASE STATS</div>
            <span className="flex">
                <p className="text-gray-400 w-36">Attack</p>
                <p className="text-gray-700">{stats.attack}</p>
            </span>
            <span className="flex">
                <p className="text-gray-400 w-36">Defense</p>
                <p className="text-gray-700">{stats.defense}</p>
            </span>
            <span className="flex">
                <p className="text-gray-400 w-36">Hp</p>
                <p className="text-gray-700">{stats.hp}</p>
            </span>
            <span className="flex">
                <p className="text-gray-400 w-36">Special_attack</p>
                <p className="text-gray-700">{stats.special_attack}</p>
            </span>
            <span className="flex">
                <p className="text-gray-400 w-36">Special_attack</p>
                <p className="text-gray-700">{stats.special_defense}</p>
            </span>
            <span className="flex">
                <p className="text-gray-400 w-36">Speed</p>
                <p className="text-gray-700">{stats.speed}</p>
            </span>
        </div>
    )
}

export default PokemonStats;