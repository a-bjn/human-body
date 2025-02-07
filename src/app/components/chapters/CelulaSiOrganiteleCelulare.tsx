import Image from "next/image";
import Link from "next/link";
import { scrollToSection } from "../../utils/scrollToSection";

const CelulaSiOrganiteleCelulare = () => {
  return (
    <section className="flex flex-col space-y-8 font-light">
      <h1 className="text-3xl font-bold">1. Celula și Organitele Celulare</h1>
			<div className="text-lg space-y-1">
				<h3 className="text-xl"> Cuprins: </h3>
				<ol className="text-blue-500 ml-4">
          <li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="#celula" onClick={(e) => { e.preventDefault(); scrollToSection("celula"); }}>
              1.1 Celula
            </Link>
          </li>
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="dimensiunile-celulelor" onClick={(e) => { e.preventDefault(); scrollToSection("dimensiunile-celulelor"); }}>
              1.2 Dimensiunile Celulelor
            </Link>
          </li>
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="structura-celulei" onClick={(e) => { e.preventDefault(); scrollToSection("structura-celulei"); }}>
              1.3 Structura Celulei
            </Link>
          </li>
				</ol>
			</div>
			<div id="celula" className="space-y-4">
        <h2 className="text-2xl font-semibold"> 1.1 Celula </h2>
        <div className="ml-4">
          <p className="text-xl">
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
          <div className="text-lg space-y-8">
            <p>
              <span className="font-semibold">Celula</span> reprezintă <span className="font-semibold">unitatea morfo-funcțională și genetică</span> a organizării materiei vii. 
              Ca formă de existență, aceasta poate funcționa individual sau în grup, atunci când contribuie la formarea țesuturilor.
            </p>
            <p>
              <span className="font-semibold">Forma celulelor</span> este în strânsă legătură cu funcțiile îndeplinite de fiecare dintre acestea. În stadiu incipient de dezvoltare, toate celulele prezintă o formă globuloasă, care în unele cazuri se poate menține constantă (celulele sanguine, celulele adipoase sau cartilaginoase, ovulul). În alte cazuri, celulele pot căpăta forme stelate, cubice, fusiforme, cilindrice, etc.
            </p>
          </div>
        </div>
			</div>
      <div id="dimensiunile-celulelor" className="space-y-4">
        <h2 className="text-2xl font-semibold"> 1.2 Dimensiunea Celulelor </h2>
        <div className="ml-4 space-y-4 text-xl">
          <div className="space-y-4">
            <p>
              Stabilirea dimensiunilor celulelor este dependentă de mulți factori, printre care:
            </p>
            <ul className="list-disc list-inside">
              <li>specializarea lor</li>
              <li>starea fiziologică a organismului</li>
              <li>conditiile de mdeiu extern</li>
              <li>varsta</li>
            </ul>
          </div>
          <div className="space-y-4">
            <p>
              Câteva exemple celule și dimensiunile lor:
            </p>
            <ul className="list-disc list-inside">
              <li>hematia: 7,5 μ (1 μ = 0,001 mm)</li>
              <li>ovulul: 150 – 200 μ</li>
              <li>fibra musculară striată: 5 – 15 cm</li>
              <li>dar media celulară variază între 20 – 30 μ</li>
            </ul>
          </div>
        </div>
			</div>
      <div id="structura-celulei">
        <h2 className="text-2xl font-semibold mb-8"> 1.3 Structura Celulei </h2>
        <div className="ml-4 space-y-8 text-xl">
          <div className="space-y-4">
            <p>
              Cele 3 componente principale care intră în alcătuirea unei celule sunt:
            </p>
            <ol className="list-decimal list-inside">
              <li>Membrana celulară</li>
              <li>Citoplasma</li>
              <li>Nucleul</li>
            </ol>
          </div>
          <div className="space-y-12">
            <p>
              1. <span className="font-semibold">Membrana celulară</span> cunoscută și sub denumirea de 
              <span className="font-semibold"> membrană plasmatică</span> sau <span className="font-semibold">plasmalema</span>, 
              înconjoară conținutul celular, separă structurile interne de mediul extracelular, 
              contribuind la asigurarea formei celulei. Principalele componente din structura sa sunt: 
              proteine și fosfolipide. Acestea din urmă sunt alcătuite dintr-o componentă hidrofilă și 
              una hidrofobă. <span className="font-semibold">Orientarea porțiunii hidrofile este către margini și a celei hidrofobe 
              în interior</span>. Prin dispunerea lor, <span className="font-semibold">porțiunea hidrofilă formează un strat dublu (bistrat) </span>
              care la interior cuprinde porțiunea hidrofobă a fosfolipidelor. Această componentă 
              hidrofobă intervine în restricționarea accesului transmembranar a ionilor și moleculelor 
              solubile în apă (hidrosolubile). 
            </p>
            <p>
              Pe de altă parte, proteinele sunt cele care sunt responsabile de funcțiile specializate 
              ale membranei și intervin în funcționarea mecanismelor de transport transmembranar. 
              Acestea pot fi dispuse pe fața internă sau externă a membranei, dar și înglobate în 
              membrană (dispunere transmembranară). Ca urmare a acestei distribuții neuniforme a 
              proteinelor în structura lipidică membranară, modelul structural generat este denumit 
              <span className="font-semibold"> mozaic fluid</span>. 
            </p>
            <div className="flex flex-col items-center">
              <Image
                src="/c1-2.webp"
                alt="Spatiu Extracelular"
                width={1000}
                height={100}
                className="w-full rounded-lg mb-6"
              />
              <p className="text-lg"><span className="font-semibold">Figura 1.2</span> Modelul mozaic fluid al membranei celulare.</p>
            </div>
            <p>
              Pe lângă componentele menționate anterior, membrana celulară prezintă pe fața externă și 
              glucide puternic încărcate negativ, de tip glicoproteine și glicolipide. 
              Colesterolul se află doar la interiorul stratului fosfolipidic hidrofob.
            </p>
            <p>
              În cazul unor celule, citoplasma poate prezenta anumite prelungiri care sunt acoperite de membrana plasmatică. Acestea pot fi:
            </p>
            <ul className="list-disc list-inside">
              <li><span className="font-semibold">Temporare și neordonate</span>: pseudopodele, în cazul leucocitelor</li>
              <li><span className="font-semibold">Permanente: microvilii</span> de la nivelul mucoasei intestinale și a 
              epiteliului tubilor renali (la polul apical al nefrocitelor); polul apical al celulelor senzoriale gustative; 
              <span className="font-semibold">cilii</span> din epiteliul mucoasei traheei; butonii olfactivi prezină cili; 
              celulele epiteliale senzoriale auditive și vestibulare prezintă cili.</li>
              <li><span className="font-semibold">Desmozomi</span>, acei corpusculi de legătură care solidarizează celulele epiteliale.</li>
            </ul>
          </div>
          <div className="space-y-12">
            <p>
              2. <span className="font-semibold">Citoplasma</span> prezintă o structură complexă cu implicații în
              desfășurarea principalelor funcții vitale. În esență, citoplasma este un <span className="font-semibold">sistem coloidal </span> 
              în care apa este mediul de dispersie, iar faza dispersată este reprezentată de un ansamblu de micelii 
              coloidale care se găsesc într-o mișcare browniană. Din punct de vedere funcțional, 
              citoplasma prezintă o <span className="font-semibold">componentă nestructurată (hialoplasma) </span> 
              și o componentă structurată, reprezentată de <span className="font-semibold">organitele celulare</span>. Acestea din urmă pot intra 
              în alcătuirea tuturor celulelor sau pot fi specifice, fiind prezente doar în cazul anumitor celulele și la nivelul cărora îndeplinesc anumite funcții.
            </p>
            <div className="flex flex-col items-center">
              <Image
                src="/c1-3.webp"
                alt="Organizarea generală a unei celule. "
                width={1000}
                height={100}
                className="w-3/4 rounded-lg mb-4"
              />
              <p className="text-lg"><span className="font-semibold">Figura 1.3</span> Organizarea generală a unei celule.</p>
            </div>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Organitele comune</span> sunt:
              </p>
              <ul className="list-disc list-inside">
                <li>Reticul endoplasmatic (RE) neted</li>
                <li>Reticul endoplasmatic rugos (ergastoplasma)</li>
                <li>Ribozomi (corpusculii lui Palade)</li>
                <li>AparatulGolgi (dictiozomi)</li>
                <li>Mitocondria</li>
                <li>Lizozomi</li>
                <li>Centrozomul</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Reticulul endoplasmatic (RE)</span>
              </p>
              <p>
                <span>Structura:</span> RE se prezintă sub forma unui sistem canalicular care face legătura între membrana plasmatică și membrana nucleară (cea externă). RE neted este o rețea de citomembrane care prezintă un aspect variat, dependent de activitatea celulară. Forma diferențiată a RE este RE rugos (ergastoplasma) care prezintă ribozomi pe partea externă a peretelui membranar.     
              </p>
              <p>
                <span>Functii:</span> Din punct de vedere funcțional, RE este un sistem circulator intracitoplasmatic. RE neted are un rol important în metabolismul glicogenului. RE rugos, prin prezența la nivelul său a ribozomilor, intervine în sinteza proteică.
              </p>
            </div>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Ribozomii (corpusculii lui Palade)</span>
              </p>
              <p>
                <span className="font-semibold">Structura:</span> Ribozomii prezintă numeroase ribonucleoproteine cu forme de granule ovale sau rotunde, având dimensiuni între 150 – 250 Å. În matricea citoplasmatică ribozomii există liberi și asociați RE neted, formând astfel ergastoplasma (RE rugos).     
              </p>
              <p>
                <span className="font-semibold">Functii:</span> Ribozomii sunt sediul principal al sintezei proteice. 
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/c1-4.webp"
                alt="Dispunerea unor organite celulare."
                width={1000}
                height={100}
                className="w-1/3 rounded-lg mb-4"
              />
              <p className="text-lg"><span className="font-semibold">Figura 1.4</span> Dispunerea unor organite celulare.</p>
            </div>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Aparatul Golgi (dictiozomi)</span>
              </p>
              <p>
                <span className="font-semibold">Structura:</span>  Aparatul Golgi este un sistem membranar alcătuit din micro- și macrovezicule și cisterne alungite, aflat în apropierea nucleului, în zona cea mai activă a citoplasmei.      
              </p>
              <p>
                <span className="font-semibold">Functii:</span> Aparatul Golgi intervine în excreția anumitor substanțe celulare.
              </p>
              <div className="flex flex-col items-center">
                <Image
                  src="/c1-5.webp"
                  alt="Structura aparatului Golgi."
                  width={1000}
                  height={100}
                  className="w-1/3 rounded-lg mb-4"
                />
                <p className="text-lg"><span className="font-semibold">Figura 1.5</span> Structura aparatului Golgi.</p>
              </div>
            </div>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Mitocondriile</span>
              </p>
              <p>
                <span className="font-semibold">Structura:</span> Mitocondriile prezintă o formă ovală, rotundă, având 
                <span className="font-semibold"> un perete de structură trilaminară lipoproteică</span> (membrană internă - spațiu - membrană externă). 
                Între membrana externă (învelișul extern) și cea internă există un interspațiu. 
                Membrana internă este plicaturată (prezintă numeroase pliuri) care contribuie la 
                formarea de <span className="font-semibold">creste mitocondriale</span>. La interior se adăpostește 
                <span className="font-semibold"> matricea mitocondrială</span> 
                la nivelul căreia se găsesc sisteme enzimatice care sunt responsabile de 
                <span className="font-semibold"> fosforilarea oxidativă</span> (sinteza ATP - adenozin-trifosfat).      
              </p>
              <p>
                <span className="font-semibold">Functii:</span> Aparatul Golgi intervine în excreția anumitor substanțe celulare.
              </p>
              <div className="flex flex-col items-center">
                <Image
                  src="/c1-6.webp"
                  alt=" Structura mitocondriei."
                  width={1000}
                  height={100}
                  className="w-2/4 rounded-lg mb-4"
                />
                <p className="text-lg"><span className="font-semibold">Figura 1.6</span> Structura mitocondriei.</p>
              </div>
            </div>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Lizozomii</span>
              </p>
              <p>
                <span className="font-semibold">Structura:</span> Lizozomii sunt corpusculi sferici distribuiți în întreaga hialoplasmă. Aceștia conțin enzime hidrolitice care au rol important în celulele fagocitare, cum ar fi leucocitele, macrofagele.
              </p>
              <p>
                <span className="font-semibold">Functii:</span>  Lizozomii intervin în digestia substanțelor și a particulelor care pătrund în celulă, dar și a fragmentelor de celule sau țesuturi.
              </p>
            </div>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Centrozomul</span>
              </p>
              <p>
                <span className="font-semibold">Structura:</span> 
                Centrozomul este situat în apropierea nucleului și se manifestă în timpul diviziunii celulare. Aceste este alcătuit din 
                <span className="font-semibold"> 2 centrioli cilindrici, perpendiculari unul pe celălalt</span>, în jurul cărora se află 
                o zonă de citoplasmă vâscoasă denumită centrosferă.
              </p>
              <p>
                <span className="font-semibold">Functii:</span> Având în vedere manifestarea sa în timpul diviziunii celulare, se deduce rolul său în diviziunea celulară. Este absent în neuroni.
              </p>
            </div>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Organitele specifice</span> sunt:
              </p>
              <ul className="list-disc list-inside">
                <li><span className="font-semibold">Miofibrilele</span> - elemente contractile din sarcoplasma (este citoplasma celulelor musculare) fibrelor musculare</li>
                <li><span className="font-semibold">Neurofibrele</span> - reprezintă o rețea localizată în citoplasma neuronului, în axoplasmă și în dendrite</li>
                <li><span className="font-semibold">Corpii Nissl</span> sau <span className="font-semibold">corpii tigroizi</span> – sunt un echivalent al ergastoplasmei însă pentru celula nervoasă</li>
              </ul>
              <p>
                Pe lângă organitele comune și specifice menționate, citoplasma mai prezintă și incluziuni citoplasmatice, cu caracter temporar și care sunt reprezentate prin: granule de substanțe de rezervă, produși de secreție, pigmenți.
              </p>
            </div>
          </div>
          <div className="space-y-12">
            <p>
             3. <span className="font-semibold">Nucleul</span> este o componentă constitutivă principală în structura celulei. 
             Acesta intervine în coordonarea proceselor biologice celulare fundamentale
             pentru care: conține materialul genetic, are rol în controlarea 
             metabolismului celular, în transmiterea informației genetice. 
             În celulă, nu are o poziție fixă, acesta poate fi dispus central 
             sau excentric (în cazul celulelor adipoase, mucoase). 
             <span className="font-semibold"> În general, are forma similară celulei (NU întotdeauna!)</span>.
            </p>
            <div className="space-y-2">
              <p>
                Din punct de vedere al numarului nucleilor, celulele pot fi:
              </p>
              <ul className="list-disc list-inside">
                <li><span className="font-semibold">Mononucleate</span> - majoritatea celulelor</li>
                <li><span className="font-semibold">Binucleate</span> - hepatociale (sunt celulele ficatului)</li>
                <li><span className="font-semibold">Polinucleate</span> - fibra musculară striată</li>
                <li><span className="font-semibold">Anucleate (fără nucleu)</span> - hematia adultă</li>
              </ul>
            </div>
            <p>
              Valorile dimensiunilor nucleului pot varia între 3 – 20 μ, care corespund ciclului funcțional al celulei și se găsesc într-un raport de 1/3 – 1/4 cu citoplasma.
            </p>
            <div className="space-y-2">
              <p>
                Din structura nucleului fac parte:
              </p>
              <ul className="list-disc list-inside">
                <li>Membrana nucleara</li>
                <li>Carioplasma</li>
                <li>Nucleoli</li>
              </ul>
            </div>
            <p>
              Membrana nucleară este <span className="font-semibold">poroasă, dublă</span>, prezintă o 
              <span className="font-semibold"> structură trilaminată</span> (membrană internă - spațiu - membrană externă), alcătuită din două foițe. 
              Cea spre matricea citoplasmatică (externă) prezintă ribozomi în continuarea 
              căreia se găsesc citomembranele RE și o altă foiță internă care aderă de 
              miezul nuclear. Cele două membrane sunt separate de un <span className="font-semibold">spațiu perinuclear</span>.
            </p>
            <div className="space-y-2">
              <p>
                Imediat sub membrana internă se află <span className="font-semibold">carioplasma</span>. 
                Aceasta este o soluție coloidală cu <span className="font-semibold">aspect omogen</span>, 
                la nivelul căreia se află o rețea de filamente subțiri, 
                formate din <span className="font-semibold">granulații fine de cromatină</span>. 
                Din acestea, la începutul diviziunii celulare se vor forma 
                <span className="font-semibold"> cromozomii</span> care sunt alcătuiți din:
              </p>
              <ul className="list-disc list-inside">
                <li>ADN și ARN cromozomal</li>
                <li>Proteine histonice și nonhistonice</li>
                <li>Cantități mici de lipide</li>
                <li>Ioni de calciu și magneziu</li>
              </ul>
            </div>
          </div>
        </div>
			</div>
    </section>
  );
};

export default CelulaSiOrganiteleCelulare;
