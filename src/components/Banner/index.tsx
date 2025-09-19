"use client";

export default function Banner() {
  return (
    <section className="relative h-screen flex justify-center items-center text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <a href="#form">
          <img
            src="/banner.png"
            alt="FAIP"
            className="hero-image w-full h-full object-cover cursor-pointer"
          />
        </a>
      </div>
    </section>
  );
}
