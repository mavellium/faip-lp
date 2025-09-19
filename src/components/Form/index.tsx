"use client";

export default function Form() {
    return (
        <>
            <section id="form" className="relative h-screen flex justify-center items-center text-center overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <img
                        src="/faip-bg.png"
                        alt="FAIP"
                        className="hero-image w-full h-full object-cover grayscale-[80%]"
                    />
                    <div className="hero-overlay-dark absolute top-0 left-0 w-full h-full bg-[#012C00]/90"></div>
                </div>
                <div className="z-10 flex">
                    <div className=" font-bold text-wrap">
                        <h1 className="text-[36px]">100% PRESENCIAL</h1>
                        <h1 className="text-[52px]">100% FAIP</h1>
                        <h1 className="text-[36px]">100% VOCÊ!</h1>
                        <img src="selo-mec.png" alt="" />
                    </div>
                    <div className="flex w-[50em] bg-black/65">
                        <div className="flex flex-col">
                            <input className="bg-white text-black placeholder:text-[#353535] placeholder:pl-[10px]" type="text" placeholder="Qual seu nome?" />
                            <input className="bg-white text-black placeholder:text-[#353535] placeholder:pl-[10px]" type="text" />
                            <input className="bg-white text-black placeholder:text-[#353535] placeholder:pl-[10px]" type="email" />
                            <input className="bg-white text-black placeholder:text-[#353535] placeholder:pl-[10px]" type="text" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}