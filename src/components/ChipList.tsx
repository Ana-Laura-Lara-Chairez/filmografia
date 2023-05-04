import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

interface ChipData {
    key: number;
    label: string;
}

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

interface Props {
    options: ChipData[];
    setYears: React.Dispatch<React.SetStateAction<number[]>>;
    years: number[];
    title: string;
}

export const ChipList: React.FC<Props> = ({ options, setYears, years, title }) => {
    const handleClick = (chipData: string) => () => {
        years.includes(+chipData) ? setYears(years.filter(item => item !== +chipData)) : setYears([...years, +chipData]);
    }


    return (
        <div
            className="flex flex-col md:gap-5 list-none mt-2"
        >
            <p>{title}</p>
            <div className=' flex flex-wrap'>
                {options.map((chip) => {
                    return (
                        <ListItem key={chip.key}
                        >
                            <Chip
                                label={chip.label}
                                onClick={handleClick(chip.label)}
                                color={years.includes(+chip.label) ? 'primary' : 'default'}
                            />
                        </ListItem>
                    );
                })}
            </div>

        </div>
    );
}
