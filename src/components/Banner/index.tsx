"use client";

export default function Banner() {
  return (
    <section className="relative min-h-[50vh] min-w-[40vh] sm:min-h-[80vh] md:min-h-[80vh] lg:min-h-screen flex justify-center items-center text-center overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <a href="#form">
          <img
            src="/banner.jpeg"
            alt="FAIP"
            className="w-full h-full object-fill xl:object-cover cursor-pointer"
            srcSet="/banner-mb.png 800w, /banner.jpeg 1200w"
            sizes="(max-width: 600px) 100vw, 1200px"
          />
        </a>
      </div>
    </section>
  );
}
