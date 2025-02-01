export default function HeroSection() {
  return (
  <section className="relative w-full h-[86vh]">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-fill"
    >
      <source src="/hb-background-gif.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

    <div className="relative z-10 flex flex-col items-start p-12 text-gray-200 h-full w-full justify-end">
      <div className="flex flex-col gap-2 w-2/3 p-16">
        <h1 className="text-6xl font-bold mb-4">
          Biologia Corpului Uman
        </h1>
        <h2 className="text-4xl font-regular text-gray-400 pt-4">
          Bun venit pe platforma noastră educațională dedicată biologiei umane, 
          care oferă conținut captivant, pentru a îmbunătăți experiența ta de 
          învățare despre incredibilul corp uman.
        </h2>
        <button className="w-1/3 py-6 bg-teal-600 rounded-full font-medium text-2xl mt-12">
          Aflati mai multe!
        </button>
      </div>
    </div>
  </section>
  );
}