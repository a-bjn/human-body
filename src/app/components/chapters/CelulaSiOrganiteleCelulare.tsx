import Image from "next/image";

const CelulaSiOrganiteleCelulare = () => {
  return (
    <section className="flex flex-col space-y-8 font-light">
      <h1 className="text-3xl font-bold">1. Celula și Organitele Celulare</h1>
			<div className="text-lg space-y-1">
				<h3 className="text-xl"> Cuprins: </h3>
				<ol className="text-blue-500 ml-4">
					<li className="hover:text-blue-700 transition cursor-pointer">1.1 Celula</li>
					<li className="hover:text-blue-700 transition cursor-pointer">1.2 Dimensiunea Celulelor</li>
					<li className="hover:text-blue-700 transition cursor-pointer">1.3 Structura Celulei</li>
				</ol>
			</div>
			<div id="#1-1-celula" className="space-y-2">
				<h2 className="text-2xl font-semibold"> 1.1 Celula </h2>
				<p className="text-xl ml-4">
					Toate nivelurile de organizare ale corpului omenesc 
					(atom, moleculă, macromoleculă, organit, celulă, țesut, 
					organ, sistem de organe, organism) contribuie la baza 
					morfo-funcțională a întregului organism.
				</p>
				<div className="flex flex-col items-center">
					<Image
							src="/c1-1.webp"
							alt="Nivelurile de organizare ale corpului"
							width={1000}
							height={100}
							className="w-full rounded-lg mb-6"
						/>
						<p className="text-lg mb-20"><span className="font-semibold">Figura 1.1</span> Niveluri de organizare a corpului uman.</p>
				</div>
				<div className="text-lg space-y-4 ">
					<p>
						<span className="font-semibold">Celula</span> reprezintă <span className="font-semibold">unitatea morfo-funcțională și genetică</span> a organizării materiei vii. 
						Ca formă de existență, aceasta poate funcționa individual sau în grup, atunci când contribuie la formarea țesuturilor.
					</p>
					<p>
						Forma celulelor este în strânsă legătură cu funcțiile îndeplinite de fiecare dintre acestea. În stadiu incipient de dezvoltare, toate celulele prezintă o formă globuloasă, care în unele cazuri se poate menține constantă (celulele sanguine, celulele adipoase sau cartilaginoase, ovulul). În alte cazuri, celulele pot căpăta forme stelate, cubice, fusiforme, cilindrice, etc.
					</p>
				</div>
			</div>
    </section>
  );
};

export default CelulaSiOrganiteleCelulare;
