import React, { FC, useState } from "react";
import Select from "react-tailwindcss-select";

interface DropdownProps {
    changeGen: (arg: string) => void;
}

const Dropdown: FC<DropdownProps> = ({ changeGen }) => {
    
    const options = [
        { value: "all", label: "All generations"},
        { value: "1", label: "Generation 1" },
        { value: "2", label: "Generation 2" },
        { value: "3", label: "Generation 3" },
        { value: "4", label: "Generation 4" },
        { value: "5", label: "Generation 5" },
        { value: "6", label: "Generation 6" },
        { value: "7", label: "Generation 7" },
        { value: "8", label: "Generation 8" },
    ];
    const [generation, setGeneration] = useState<{value: string, label: string}>(options[0]);

    const getDropdownValue = (value: {value: string, label: string}) => {
        setGeneration(value);
        changeGen(value.value);
    }

    return (
        <div className="flex xs:flex-col sm:flex-row justify-end items-center mr-10 mt-5">
            <p className="text-gray-400 dark:text-gray-300 mr-3">Select generation</p>
            <div className="w-48 right-0">
            <Select
                classNames={{
                    menuButton: ({ isDisabled }) => (
                        `dark:bg-[#181A1B] flex text-sm text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 outline-none ${
                            isDisabled ? 
                            "bg-gray-200 hover:bg-gray-500 dark:bg-[#181A1B]"
                            : 
                            "dark:text-gray-200 bg-white hover:border-blue-400 focus:ring focus:ring-yellow-500/20"
                        }`
                        ),
                    menu: "absolute z-10 w-full bg-white dark:bg-[#181A1B] shadow-lg border rounded py-1 mt-1.5 text-sm",
                    listItem: ({ isSelected }) => (
                    `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${
                        isSelected ? 
                        `text-black hover:bg-gray-200 dark:text-white dark:hover:bg-green-900`
                        : 
                        `text-gray-500 hover:bg-yellow-100 hover:text-gray-700 dark:text-gray-200 dark:hover:bg-green-700 dark:hover:text-gray-100`
                        }`
                        )
                    }}
                value={generation}
                onChange={getDropdownValue}
                options={options}
            />
            </div>
        </div>
    );
}

export default Dropdown;