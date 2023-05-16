import React, { ChangeEvent, FC } from "react";
import { Select, Option } from "@material-tailwind/react";
 

interface DropdownProps {
    changeGen: (arg: string) => void;
}

const Dropdown: FC<DropdownProps> = ({ changeGen }) => {

    const getDropdownValue = (value: string) => {
        changeGen(value);
    }

    return (
        <div className="flex justify-end items-center mr-10 mt-5">
            <div className="w-34">
                <Select label="Select generation" onChange={getDropdownValue} defaultValue={"all"}>
                    <Option value="all">All generations</Option>
                    <Option value="1">Generation 1</Option>
                    <Option value="2">Generation 2</Option>
                    <Option value="3">Generation 3</Option>
                    <Option value="4">Generation 4</Option>
                    <Option value="5">Generation 5</Option>
                    <Option value="6">Generation 6</Option>
                    <Option value="7">Generation 7</Option>
                    <Option value="8">Generation 8</Option>
                </Select>
            </div>
        </div>
    );
}

export default Dropdown;