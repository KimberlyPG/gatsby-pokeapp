import React, {FC} from "react";
import { Stats } from "../types";

interface PokemonStatsProps {
    stats: Stats
}

const PokemonStats: FC<PokemonStatsProps> = ({ stats }) => {
    return (
        <div className="text-xs mt-2">
            {stats?.map((item) => (
                <div className="flex">
                    <p className="text-gray-400 w-36">{item.stat.name}</p>
                    <p className="text-gray-700">{item.base_stat}</p>
                </div>
            ))}
        </div>
    )
}

export default PokemonStats;