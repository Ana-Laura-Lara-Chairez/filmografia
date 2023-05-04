import Image from 'next/image';
import Link from 'next/link'
import React, { FC } from 'react'

interface Props {
    uid: string;
    titulo: string;
    cartel_url: string;
    refScroll: any;
}

export const Movie: FC<Props> = ({ uid, cartel_url, titulo, refScroll }) => {
    return (
        <Link key={uid} href={uid} ref={refScroll} className="
            rounded-lg
            shadow-lg
            p-5
            flex
            flex-col 
            justify-center
            items-center
            hover:shadow-2xl
            transition
            duration-500
            ease-in-out
            transform
            hover:scale-105
            cursor-pointer
            w-60
            md:max-w-sm
            h-96		 
            ">
            <Image
                src={cartel_url
                    ? cartel_url
                    : '/images/placeholder.png'}
                alt={titulo}
                width={180}
                height={180}
            />
            <p className="mx-auto text-center text-black max-w-xs md:max-w-md">{titulo}</p>
        </Link>
    )
}
