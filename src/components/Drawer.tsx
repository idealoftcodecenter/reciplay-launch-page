"use client";

import { ReactNode, Dispatch, SetStateAction } from 'react'

type propTypes = {
    children: ReactNode,
    isActive: boolean,
    setIsActive: Dispatch<SetStateAction<boolean>>
}

const Drawer = ({children, isActive, setIsActive}:propTypes) => {
    if (!isActive) return null;

    const handleClosePopup = () => {
        setIsActive(false);
    };

    return (
        <>
            <div className={`fixed left-0 top-0 right-0 bottom-0 z-10 ${ isActive ? "bg-black/[.8]" : "bg-black/[0.0]" } backdrop-blur-sm transition-all duration-100`} onClick={handleClosePopup} />
            <article className={`w-full px-[14px] fixed bottom-0 top-auto left-0 right-0 z-20 transition-all duration-500 delay-100 ${ isActive ? "translate-y-0" : "translate-y-[100%]" }`}>
                <section className='max-w-[364px] mx-auto bg-white shadow-md h-auto px-[20px] pt-[42px] rounded-tl-xl rounded-tr-xl relative'>
                    <button className="absolute -top-12 right-0 w-8 h-8 bg-white rounded-full border-2 border-[#6D50E8] flex items-center justify-center" onClick={handleClosePopup}>
                        <span className="text-[#6D50E8] text-[18px] -mt-1">&times;</span>
                    </button>
                    {children}
                </section>
            </article>
        </>
    );
}

export default Drawer;
