import React from "react";

const Dropdown = ({ changeGen }) => {
    const getDropdownValue = (event) => {
        changeGen(event.target.value);
    }
    return (
        <div className="flex justify-end items-center mr-10 mt-5">
            <p className="text-gray-400 dark:text-gray-300 mr-3">Select generation</p>
            <div className="w-fit rounded-md bg-gradient-to-r from-green-500 via-blue-500 to-indigo-500 
            dark:bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 p-0.5">
                <select 
                    className="w-36 p-1 text-gray-500 dark:text-gray-100 rounded-md shadow-sm outline-none appearance-none 
                    focus:border-indigo-600 dark:bg-[#181A1B]"
                    onChange={getDropdownValue}
                >
                    <option value="all">All generatios</option>
                    <option value={1}>Generation 1</option>
                    <option value={2}>Generation 2</option>
                    <option value={3}>Generation 3</option>
                    <option value={4}>Generation 4</option>
                    <option value={5}>Generation 5</option>
                    <option value={6}>Generation 6</option>
                    <option value={7}>Generation 7</option>
                    <option value={8}>Generation 8</option>
                </select>
            </div>
        </div>
    );
}

export default Dropdown;