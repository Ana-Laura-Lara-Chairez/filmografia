import { Filmografia } from '@/interfaces/Filmografia';
import { Movie } from './Movie';
import { useRef } from 'react';
interface Props {
    data: Filmografia[];
}

export const Movies = ({ data }: Props) => {
    const scroll = useRef<HTMLAnchorElement>(null)

    const handleButtonClick = () =>
        scroll.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });


    return (
        <>
            <div className="flex relative flex-wrap gap-3 overflow-y-scroll h-[90%]">
                {data.map(({ cartel_url, uid, titulo }, i) => (
                    <Movie
                        refScroll={i === 0 ? scroll : null}
                        key={uid}
                        cartel_url={cartel_url}
                        uid={uid}
                        titulo={titulo}
                    />
                ))}
                <div className="fixed bottom-20 right-10 cursor-pointer" onClick={handleButtonClick}>
                    <svg viewBox="0 0 64 64" width="32" height="32">
                        <path fill="black" d="M32,0L0,32h12v32h40V32h12L32,0z" />
                    </svg>
                </div>
            </div >
        </>
    )
}
