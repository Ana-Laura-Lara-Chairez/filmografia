
export const MoviesLayout = ({ children, }: { children: React.ReactNode }) => {
    return (
        <div className="
                h-[45rem]
                flex
                flex-col
                gap-5   
                p-10     
                scroll-p-10	         
                md:m-5
                w-[95%]
                rounded-xl
                shadow-2xl
                bg-white	">
            <p className="
                text-2xl
                font-bold
                text-black"
            >Peliculas</p>
            {children}
        </div>
    )
}
