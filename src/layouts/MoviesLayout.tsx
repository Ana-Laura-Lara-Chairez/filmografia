import ScrollToTop from "react-scroll-to-top"

export const MoviesLayout = ({ children, }: { children: React.ReactNode }) => {
    return (
        <div className="
                flex
                flex-col
                gap-4   
                p-8     
                scroll-p-10	         
                md:m-5
                w-[90%]
                rounded-xl
                shadow-2xl
                bg-white
                sm: ml-3">
            {/* <p className="
                text-2xl
                font-bold
                text-black
                mb-3"
            >Películas</p> */}
            {children}
        </div>
    )
}
