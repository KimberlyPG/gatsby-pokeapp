import React, {FC} from "react";
import { Stat } from "../types/types";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

interface PokemonStatsProps {
    stats: Stat[];
}

const PokemonStats: FC<PokemonStatsProps> = ({ stats }) => {
    return (
        <div className="text-xs mt-2">
            {stats?.map((item) => (
                <div className="flex items-center">
                    <p className="text-gray-400 w-36">{item.stat.name}</p>
                    <p className="text-gray-700 w-10 font-bold">{item.base_stat}</p>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={item.base_stat*100/255} />
                    </Box>
                </div>
            ))}
        </div>
    )
}

export default PokemonStats;