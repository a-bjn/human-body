import Link from "next/link";
import Image from "next/image"
import { scrollToSection } from "../../utils/scrollToSection";


const SistemulMuscularChapter = () => {
  return (
    <section className="flex flex-col justify-between space-y-8 font-normal">
      <h1 className="text-3xl font-bold">6. Sistemul muscular</h1>
      <div className="text-base space-y-1">
				<h3 className="text-xl"> Cuprins: </h3>
				<ol className="text-blue-500 ml-4">
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="#introducere" onClick={(e) => { e.preventDefault(); scrollToSection("introducere"); }}>
              6.1 Introducere
            </Link>
          </li>
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="#sistemul-muscular" onClick={(e) => { e.preventDefault(); scrollToSection("sistemul-muscular"); }}>
              6.2 Structura muschiului
            </Link>
          </li>
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="#principalele-grupe-de-muschi-scheletici" onClick={(e) => { e.preventDefault(); scrollToSection("principalele-grupe-de-muschi-scheletici"); }}>
              6.3 Principalele grupe de muschi scheletici
            </Link>
          </li>
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="#muschii-membrelor" onClick={(e) => { e.preventDefault(); scrollToSection("muschii-membrelor"); }}>
              6.4 Muschii membrelor
            </Link>  
          </li>
				</ol>
			</div>
      <div id="introducere" className="space-y-4">
        <h2 className="text-2xl font-semibold"> 6.1 Introducere </h2>
        <div className="ml-4 space-y-8 text-base">
          <div className="space-y-8">
            <p>
              Muschii sunt <span className="font-semibold">organe active ale mișcării</span> care formează sistemul muscular. Rolul se atribuie musculaturii scheletice – somatice – care prezintă în alcătuirea sa țesut muscular striat.
            </p>
            <p>
              Din punct de vedere al formei, mușchii pot fi:
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li><span className="font-semibold">fusiformi</span>: biceps, triceps</li>
              <li><span className="font-semibold">triunghiulari</span>: muschiul piramidal al abdomenului</li>
              <li><span className="font-semibold">patrulateri</span>: marele drept abdominal, marele dorsal</li>
              <li><span className="font-semibold">in forma de cupola</span>: diafragma</li>
              <li><span className="font-semibold">trapezi</span>: muschiul trapez</li>
              <li><span className="font-semibold">circulari</span>: orbicularul buzelor si al pleoapelor, sfincterele</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="structura-muschiului" className="space-y-4">
        <h2 className="text-2xl font-semibold"> 6.2 Structura muschiului</h2>
        <div className="ml-4 space-y-8 text-base">
          <div className="space-y-8">
            <p>
              Mușchii scheletici sunt alcătuiți dintr-o porțiune centrală musculară, voluminoasă – <span className="font-semibold">corpul mușchiului</span> – și două extremități albe-sidefii, din țesut fibros – <span className="font-semibold">tendoane</span>. Unul se inseră pe osul fix (se numește <span className="font-semibold">originea mușchiului</span>), iar celălalt se prinde de osul mobil (se numește <span className="font-semibold">inserția mușchiului</span>). În majoritatea cazurilor, originea mușchiului este unică, însă sunt și mușchi care au mai multe origini: biceps, triceps, cvadriceps.
            </p>
            <p>
              Corpul mușchiului este alcătuit din fibre musculare striate. Mai multe fibre formează un <span className="font-semibold">fascicul</span>. Fiecare fibră este învelită de o teacă fină de țesut conjunctiv – <span className="font-semibold">endomisium</span>. În exterior, corpul mușchiului prezintă o membrană conjunctivă – <span className="font-semibold">fascia mușchiului (fascie)</span>. Sub ea se găsește o lamă de țesut conjunctiv – <span className="font-semibold">epimisium</span> – de la nivelul căreia pornesc în interior septuri conjunctive – <span className="font-semibold">perimisium</span>.
            </p>
            <div className="flex flex-col items-center">
              <Image
                  src="/c6-1.webp"
                  alt="Structura muschiului"
                  width={1000}
                  height={100}
                  className="w-1/3 rounded-lg mb-6"
              />
              <p className="text-lg mb-10"><span className="font-semibold">Figura 6.1</span> Structura muschiului.</p>
            </div>
            <p>
              Mușchiul este bogat vascularizat și prezintă inervație dublă: somatică și vegetativă. <span className="font-semibold">Cea de tip vegetativ determină reacții vasomotorii</span>.
            </p>
          </div>
        </div>
      </div>
      <div id="principalele-grupe-de-muschi-scheletici" className="space-y-4">
        <h2 className="text-2xl font-semibold"> 6.3 Principalele grupe de muschi scheletici</h2>
        <div className="ml-4 space-y-8 text-base">
          <div className="space-y-8">
            <div className="flex flex-col items-center">
              <Image
                  src="/c6-2.webp"
                  alt="Structura muschiului"
                  width={1000}
                  height={100}
                  className="w-1/2 rounded-lg mb-6"
              />
              <p className="text-lg mb-10"><span className="font-semibold">Figura 6.2</span> Muschii scheletici - partea anterioara.</p>
            </div>
            <p>
              Mușchii scheletici se împart în: mușchii capului, gâtului, trunchiului și membrelor.
            </p>
          </div>
        </div>
        <p className="text-xl font-bold">
          Mușchii capului
        </p>
        <div className="ml-4 space-y-8 text-base">
          <div className="space-y-8">
            <span className="font-semibold">Muschii capului</span> – prezinta 2 grupe de muschi:
            <ul className="list-disc list-inside space-y-4">
              <li><span className="font-semibold">muschii mimicii</span>: expresii variate ale feței prin contracția lor - mușchiul orbicular al ochiului, mușchiul orbicular al buzelor, mușchiul frontal, mușchiul occipital, mușchiul temporal</li>
              <li><span className="font-semibold">mușchii maseteri</span>: contribuie la executarea procesului de masticație - mușchiul maseter (zona mandibulei)</li>
            </ul>
          </div>
        </div>
        <p className="text-xl font-bold">
          Mușchii gâtului
        </p>
        <div className="ml-4 space-y-8 text-base">
          <div className="space-y-8">
            <span className="font-semibold">Mușchii gâtului</span> – dispuși în regiunea antero-laterală a gâtului, distribuiți pe mai multe planuri. De la suprafață spre profunzime se numără:
            <ul className="list-disc list-inside space-y-4">
              <li><span className="font-semibold">mușchiul pielos al gâtului</span>:  încrețește pielea gâtului</li>
              <li><span className="font-semibold">mușchii maseteri</span>: dispus sub mușchiul pielos al gâtului</li>
            </ul>
          </div>
        </div>
        <div className="ml-4 space-y-8 text-base">
          <div className="space-y-8">
            <p>
             <span className="font-semibold">Mușchii trunchiului</span> – grupeaza:
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li><span className="font-semibold">muschii spatelui si ai cefei</span>: mușchii trapezi (în plan superficial superior), mușchiul romboid și inferior de mușchii trapezi se află, marii dorsali; (Completare: Mușchiul trapez are originea pe osul occipital pe apofizele mai multor vertebre cervicale și torcale; inserția sa este pe claviculă și scapulă. Mușchiul mare dorsal are originea pe apofizele a numeroase vertebre toracice, osul coxal, aponevroza lombară.)</li>
              <li><span className="font-semibold">mușchii anterolaterali ai toracelui</span>: muschiul piramidal al abdomenului</li>
              <p>
                2 mușchi pectorali (micul și marele pectoral) – în partea anterioară a toracelui. (Completare: Mușchiul mare pectoral are originea pe stern și cartilajele costale toracale ale coastelor adevărate și pe claviculă; inserția sa este pe humerus.)
              </p>
              <p>
                Profund, mușchiul subclavicular și dințatul mare, dispus lateral. (Completare: Mușchiul dințat mare are originea pe coaste (primele 8 sau 9), iar inserția sa este pe scapulă.)
              </p>
              <p>
                Mușchii intercostali externi și interni – în spațiile intercostale.
              </p>
              <p>
                Diafragma – mușchi lat dispus la baza cutiei toracice, prezintă o parte boltită spre torace, iar cealaltă spre abdomen. Separă cutia toracică de cavitatea abdominală.
              </p>
              <li><span className="font-semibold">mușchii anterolaterali ai abdomenului</span>: muschi lati</li>
            </ul>
            <p>
              De ambele părți ale liniei mediane se dispun mușchii drepți abdominali. Anterior față de fiecare dintre aceștia se găsește mușchiul piramidal. În lateralul lor se află: mușchii oblic extern, oblic intern și transvers al abdomenului. (Completare: Mușchiul drept abdominal are originea pe osul coxal și inserția pe stern;)
            </p>
            <div className="flex flex-col items-center">
              <Image
                  src="/c6-3.webp"
                  alt="Structura muschiului"
                  width={1000}
                  height={100}
                  className="w-1/2 rounded-lg mb-6"
              />
              <p className="text-lg mb-10"><span className="font-semibold">Figura 6.3</span> Mușchii scheletici - partea posterioară.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="principalele-grupe-de-muschi-scheletici" className="space-y-4">
        <h2 className="text-2xl font-semibold"> 6.4 Mușchii membrelor</h2>
        <p className="text-xl font-bold">
          Mușchii membrului superior
        </p>
        <div className="ml-4 space-y-8 text-base">
          <div className="space-y-8">
            <p>
             <span className="font-semibold">Mușchii membrului superior</span> – cuprind:
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li><span className="font-semibold">mușchii umărului</span>: deltoid – mușchiul principal, situat imediat sub piele. Aduce brațul superior în poziție orizontală – realizează abducția brațului; (Completare: Mușchiul deltoid are originea pe scapulă și claviculă, iar inserția este pe humerus.)</li>
              <li><span className="font-semibold">mușchii brațului</span>: anterior – mușchiul biceps brahial (două origini pe scapulă și inserția pe radius), mușchiul brahial și mușchiul coracobrahial. Posterior – mușchiul triceps (două origini pe humerus și una pe scapulă și inserția pe ulna)</li>
              <li><span className="font-semibold">mușchii brațului</span>: anterior – mușchiul biceps brahial (două origini pe scapulă și inserția pe radius), mușchiul brahial și mușchiul coracobrahial. Posterior – mușchiul triceps (două origini pe humerus și una pe scapulă și inserția pe ulna)</li>
              <li><span className="font-semibold">mușchii antebrațului</span>:</li>
              <p>
                Mușchii anteriori ai antebrațului sunt <span className="font-semibold">flexori ai antebrațului și ai mâinii</span> și pronatori ai mâinii. Unii sunt flexori ai degetelor.
              </p>
              <p>
                Mușchii posteriori și laterali ai antebrațului sunt <span className="font-semibold">extensori ai antebrațului, mâinii și degetelor</span>.
              </p>
              <li><span className="font-semibold">mușchii mâinii</span>: mâna deține un aparat muscular complex. Mușchii sunt dispuși doar pe fața sa palmară și în spațiile interosoase.</li>
            </ul>
          </div>
        </div>
        <p className="text-xl font-bold">
          Mușchii membrului superior
        </p>
        <div className="ml-4 space-y-8 text-base">
          <div className="space-y-8">
            <p>
             <span className="font-semibold">Mușchii membrului inferior</span> – cuprind:
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li><span className="font-semibold">mușchii bazinului</span>: mușchii fesieri (se află în jurul articulației șodulului). (Completare: Mușchii fesieri au originea pe osul coxal și se inseră pe femur.)</li>
              <li><span className="font-semibold">mușchii coapsei</span>: se grupează în 3 loje: loja anteromedială, posterioară și laterală.</li>
              <p>
                În loja anterioară: mușchiul croitor (cel mai lung mușchi din corp), iar sub el este cvadricepsul femural. (Completare: Mușchiul croitor are originea pe osul coxal, iar inserția sa este pe tibie; Cvadricepsul femural are originea pe coxal și femur, iar inserția este pe tibie.)
              </p>
              <p>
                În zona medială a coapsei: mușchiul drept medial și 3 mușchi adductori: mare, scurt, lung. Contracția acestor 4 mușchi apropie coapsele între ele (adducție). (Completare: Adductorii au originea pe osul coxal și inserția pe femur.)
              </p>
              <p>
                În loja posterioară: mușchii biceps femural, semitendinos și semimembranos. (Completare: Mușchiul biceps femural are originea pe osul coxal și femur, iar inserția este pe fibulă.)
              </p>
              <li><span className="font-semibold">mușchii gambei</span>: se grupează în 2 loje: anterolaterală și posterioară.</li>
              <p>
                În loja anterioară: mușchii tibial anterior și extensori ai degetelor.
              </p>
              <p>
                În loja posterioară: mușchiul gastrocnemian (în plan superficial). Alături de mușchiul solear (sub gastrocnemian) formează tricepsul sural. (Completare: Mușchiul gastrocnemian are originea pe femur și inserția pe calcaneu (os tarsian) prin tendonul lui Ahile; Mușchiul solear are originea pe tibie și fibulă, iar inserția tot pe calcaneu (os tarsian) prin tendonul lui Ahile.)
              </p>
              <p>
                În loja laterală se găsesc mușchii peronieri scurt și lung.
              </p>
              <p>
                Mușchii tibial posterior și mușchii flexori ai degetelor sunt distribuiți în plan profund. Aceștia susțin extensia labei piciorului și flexia degetelor.
              </p>
              <li><span className="font-semibold">mușchii piciorului</span>: se dispun pe fețele dorsală și plantară ale piciorului.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SistemulMuscularChapter;
