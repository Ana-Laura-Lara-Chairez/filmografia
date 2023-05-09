import { Filmografia } from '@/interfaces/Filmografia';
import { Movie } from './Movie';
import { useEffect, useRef, useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { SearchBar } from './SearchBar';
import { validateYearRange } from '@/helpers/validateYearRange';
interface Props {
    data: Filmografia[];
}

export const Movies = ({ data }: Props) => {
    const scroll = useRef<HTMLAnchorElement>(null)

    const [datas, setData] = useState<Filmografia[]>(data);
    const [term, setTerm] = useState<string>('');

    useEffect(() => {

        const filteredData = data.filter(
            (data) =>
                // (!country || filmografia.pais === country) &&  the api doesn't have the country field
                (!term || data.titulo.toLowerCase().includes(term.toLowerCase()))
        );
        setData(filteredData);

    }, [term, data])


    const handleButtonClick = () =>
        scroll.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });


    return (
        <>
            <SearchBar
                onDebounce={(value: string) => setTerm(value)}
            />
            <div className="flex relative flex-wrap gap-5 h-[80%]">
                {datas.map(({ cartel_url, uid, titulo }, i) => (
                    <Movie
                        refScroll={i === 0 ? scroll : null}
                        key={uid}
                        cartel_url={cartel_url}
                        uid={uid}
                        titulo={titulo}
                    />

                ))}
                <div style={{ marginTop: "100vh" }} />
                <ScrollToTop smooth color="#ff7b1c" width='40' height='30' />
            </div>
        </>
    )
}