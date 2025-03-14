import Link from "next/link";
import Image from "next/image";
import { scrollToSection } from "../../utils/scrollToSection";

const MaduvaSpinariiChapter = () => {
  return (
    <section className="flex flex-col justify-between space-y-8 font-light">
      <h1 className="text-3xl font-bold">4. Maduva Spinarii</h1>
      <div className="text-lg space-y-1">
				<h3 className="text-xl"> Cuprins: </h3>
				<ol className="text-blue-500 ml-4">
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="maduva-spinarii" onClick={(e) => { e.preventDefault(); scrollToSection("maduva-spinarii"); }}>
              4.1 Maduva spinarii
            </Link>
          </li>
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="caile-ascendente-ale-sensibilitatii" onClick={(e) => { e.preventDefault(); scrollToSection("caile-ascendente-ale-sensibilitatii"); }}>
              4.2 Caile ascendente ale sensibilitatii
            </Link>
          </li>
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="caile-descendente-ale-motricitatii" onClick={(e) => { e.preventDefault(); scrollToSection("caile-descendente-ale-motricitatii"); }}>
              4.3 Caile descendente ale motricitatii
            </Link>
          </li>
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="nervi-spinali" onClick={(e) => { e.preventDefault(); scrollToSection("nervi-spinali"); }}>
              4.4 Nervi spinali
            </Link>  
          </li>
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="functiile-maduvei-spinarii" onClick={(e) => { e.preventDefault(); scrollToSection("functiile-maduvei-spinarii"); }}>
              4.5 Functiile maduvei spinarii
            </Link>
          </li>
				</ol>
			</div>
      <div id="celula" className="space-y-4">
        <h2 className="text-2xl font-semibold"> 4.1 Maduva Spinarii (MS)</h2>
        <div className="ml-4 space-y-8 text-xl">
          <div className="space-y-8">
            <p>
              Măduva spinării, alături de encefal, constituie SNC.
              Prin suprapunerea orificiilor vertebrale se formează canalul vertebral în interiorul căruia se află MS. Aceasta nu îl ocupă în întregime.
            </p>
            <div className="flex flex-col items-center">
              <Image
                  src="/c4-1.webp"
                  alt="Secțiune sagitală prin măduva spinării și creier"
                  width={1000}
                  height={100}
                  className="w-1/4 rounded-lg mb-6"
              />
              <p className="text-lg mb-20"><span className="font-semibold">Figura 4.1</span> Secțiune sagitală prin măduva spinării și creier.</p>
            </div>
            <ul className="list-disc list-inside">
              <li>Limita superioară a MS: Gaura occipitală/ emergența primului nerv spinal (C1).</li>
              <li>Limita inferioară a MS: în dreptul vertebrei L2.</li>
            </ul>
            <div className="flex flex-col items-center">
              <Image
                  src="/c4-2.webp"
                  alt="Vertebră toracică"
                  width={1000}
                  height={100}
                  className="w-1/2 rounded-lg mb-6"
              />
              <p className="text-lg mb-20"><span className="font-semibold">Figura 4.2</span> Vertebră toracică.</p>
            </div>
            <p>
              Sub vertebra L2, MS se prelungește cu <span className="text-semibold">conul medular</span> și acesta cu <span className="text-semibold">filum terminale</span>. De o parte și de alta a acestor structuri (conul medular și filum terminale), nervii lombari și sacrali, având o direcție aproape verticală formează „coada de cal”.
            </p>
            <div className="flex flex-col items-center">
              <Image
                  src="/c4-3.webp"
                  alt="Secțiune prin măduva spinării"
                  width={1000}
                  height={100}
                  className="w-1/4 rounded-lg mb-6"
              />
              <p className="text-lg mb-20"><span className="font-semibold">Figura 4.3</span> Secțiune prin măduva spinării.</p>
            </div>
            <p>
              Privită din exterior, la nivelul regiunilor cervicală și lombară, MS prezintă două porțiuni mai voluminoase. Acestea corespund membrelor și se numesc <span className="font-semibold">dilatările (intumescențele) cervicală și lombară</span>.
            </p>
            <p>
              Nutriția și protecția MS este asigurată prin prezența a 3 membrane ale meningelor vertebrale (spinale) între peretele osos al vertebrelor și MS. De la exterior la interior, cele 3 membrane sunt:
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li><span className="font-semibold">Dura mater</span>: structură fibroasă, rezistentă, separată prin canalul epidural de pereții canalului vertebral.</li>
              <li><span className="font-semibold">Arahnoida</span>: structură conjunctivă. Între arahnoida și pia mater se află un spațiu care conține lichid cefalorahidian (LCR).</li>
              <li><span className="font-semibold">Pia mater</span>: membrană conjunctivo-vasculară, asigură nutriția, învelește MS, pătrunde în șanțuri și fisuri. În grosimea ei se află vase arteriale.</li>
            </ul>
            <div className="flex flex-col items-center">
              <Image
                  src="/c4-4.webp"
                  alt="Meningele spinale"
                  width={1000}
                  height={100}
                  className="w-full rounded-lg mb-6"
              />
              <p className="text-lg mb-20"><span className="font-semibold">Figura 4.3</span> Meningele spinale.</p>
            </div>
            <p>
              MS este formată din două tipuri de substanțe:
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li><span className="font-semibold">Substanța cenușie</span>: dispusă în centru, sub formă de coloane. </li>
              <li><span className="font-semibold">Substanța albă</span>: dispusă la periferie, sub formă de cordoane.</li>
            </ul>
            <div className="flex flex-col items-center">
              <Image
                  src="/c4-5.webp"
                  alt="Secțiune transversală prin măduva spinării"
                  width={1000}
                  height={100}
                  className="w-full rounded-lg mb-6"
              />
              <p className="text-lg mb-20"><span className="font-semibold">Figura 4.3</span> Secțiune transversală prin măduva spinării.</p>
            </div>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Substanța cenușie</span> se constituie din corpul neuronilor. În secțiune transversală are aspectul literei „H”. Bara transversală a literei formează <span className="font-semibold">comisura cenușie</span> a MS, care în centru prezintă canalul ependimar cu LCR. Anterior de comisura cenușie se află comisura albă. Porțiunile laterale ale literei „H” sunt subdivizate în <span className="font-semibold">coarne</span>:
              </p>
              <ul className="list-disc list-inside space-y-4">
                <li>anterioare</li>
                <li>posterioare</li>
                <li>laterale</li>
              </ul>
            </div>
            <p><span className="font-semibold">Coarnele anterioare sau ventrale</span> conțin motoneuroni (sau dispozitivul somatomotor), mai dezvoltat în zonele dilatărilor. Comparativ cu cele posterioare, acestea sunt mai late și conțin două tipuri de neuroni somatomotori ai căror axoni formează rădăcina ventrală (anterioară) a nervilor spinali.</p>
            <p><span className="font-semibold">Coarnele posterioare sau dorsale</span> conțin neuroni ai căilor senzitive care au semnificația de al II-lea neuron (deutoneuron). Primul neuron (protoneuronul) este situat în ganglionii spinali.</p>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Coarnele laterale</span> sunt vizibile în regiunile:
              </p>
              <ul className="list-disc list-inside space-y-4">
                <li>cervicală inferioară</li>
                <li>toracală</li>
                <li>lombară superioară</li>
              </ul>
            </div>
            <p>
              La nivelul coarnelor laterale se află neuroni vegetativi simpatici preganglionari ai căror axoni părăsesc MS pe calea rădăcinii ventrale a nervului spinal și formează fibrele preganglionare ale SN simpatic.
            </p>
            <p>
              <span className="font-semibold">Substanța reticulată a MS</span> se află în substanța albă, dispusă între coarnele laterale și posterioare. Aceasta este <span className="font-semibold">mai bine individualizată în regiunea cervicală</span>, formată din neuroni dispuși în rețea, prezenți și în jurul canalului ependimar pe toată lungimea sa.     
            </p>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Substanța albă</span>, la nivelul ei se găsesc:
              </p>
              <ul className="list-disc list-inside space-y-4">
                <li><span className="font-semibold">Fascicule ascendente</span>, distribuite, în general, periferic.</li>
                <li><span className="font-semibold">Fascicule descendente</span>, situate mai spre interior față de cele ascendente.</li>
                <li><span className="font-semibold">Fascicule de asociație</span>, situate profund, în imediata apropiere a substanței cenușii.</li>
              </ul>
            </div>
          </div>
          <div id="celula" className="space-y-4">
            <h2 className="text-2xl font-semibold"> 4.1 Maduva Spinarii (MS)</h2>
            <div className="ml-4 space-y-8 text-xl">
              <div className="space-y-8">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaduvaSpinariiChapter;
