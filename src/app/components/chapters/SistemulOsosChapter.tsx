import Link from "next/link";
import Image from "next/image"
import { scrollToSection } from "../../utils/scrollToSection";


const SistemulOsosChapter = () => {
  return (
    <section className="flex flex-col justify-between space-y-8 font-normal">
      <h1 className="text-3xl font-bold">5. Sistemul Osos</h1>
      <div className="text-lg space-y-1">
				<h3 className="text-xl"> Cuprins: </h3>
				<ol className="text-blue-500 ml-4">
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="#introducere" onClick={(e) => { e.preventDefault(); scrollToSection("introducere"); }}>
              5.1 Introducere
            </Link>
          </li>
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="#sistemul-osos-informatii-generale" onClick={(e) => { e.preventDefault(); scrollToSection("sistemul-osos-informatii-generale"); }}>
              5.2 Sistemul osos
            </Link>
          </li>
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="#scheletul" onClick={(e) => { e.preventDefault(); scrollToSection("scheletul"); }}>
              5.3 Scheletul
            </Link>
          </li>
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="#scheletul-capului" onClick={(e) => { e.preventDefault(); scrollToSection("scheletul-capului"); }}>
              5.4 Scheletul capului
            </Link>  
          </li>
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="#scheletul-trunchiului" onClick={(e) => { e.preventDefault(); scrollToSection("scheletul-trunchiului"); }}>
              5.5 Scheletul trunchiului
            </Link>
          </li>
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="#scheletul-membrelor" onClick={(e) => { e.preventDefault(); scrollToSection("scheletul-membrelor"); }}>
              5.6 Scheletul membrelor
            </Link>
          </li>
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="#rolurile-functionale-ale-oaselor" onClick={(e) => { e.preventDefault(); scrollToSection("rolurile-functionale-ale-oaselor"); }}>
              5.7 Rolurile functionale ale oaselor
            </Link>
          </li>
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="#compozitia-chimica-a-oaselor" onClick={(e) => { e.preventDefault(); scrollToSection("compozitia-chimica-a-oaselor"); }}>
              5.8 Compozitia chimica a oaselor
            </Link>
          </li>
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="#articulatiile" onClick={(e) => { e.preventDefault(); scrollToSection("articulatiile"); }}>
              5.9 Articulatiile
            </Link>
          </li>
				</ol>
			</div>
      <div id="introducere" className="space-y-4">
        <h2 className="text-2xl font-semibold"> 5.1 Introducere </h2>
        <div className="ml-4 space-y-8 text-lg">
          <div className="space-y-8">
            <p>
              Mișcarea, una dintre însușirile specifice organismelor vii, prezintă două componente prin intermediul cărora se poate realiza locomoția, mișcarea corpului, a unor segmente, și anume:
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li><span className="font-semibold">sistemul osteoarticular</span> - cu rol pasiv</li>
              <li><span className="font-semibold">sistemul muscular</span> – cu rol activ</li>
            </ul>
          </div>

        </div>
      </div>
      <div id="sistemul-osos-informatii-generale" className="space-y-4">
        <h2 className="text-2xl font-semibold"> 5.2 Sistemul Osos </h2>
        <div className="ml-4 space-y-8 text-lg">
          <div className="space-y-8">
            <p>
              <span className="font-semibold">Osteogeneză</span> – procesul de dezvoltare a oaselor. Acesta se realizează prin transformarea <span className="font-semibold">țesutului cartilaginos</span> (prin osificare encondrală) sau <span className="font-semibold">conjunctivo-fibros</span> (prin osificare desmală sau endoconjunctivă) al embrionului, în scheletul osos al adultului.
            </p>
            <div className="flex flex-col items-center">
              <Image
                  src="/c5-1.webp"
                  alt="Osteogeneza"
                  width={1000}
                  height={100}
                  className="w-2/3 rounded-lg mb-6"
              />
              <p className="text-lg mb-10"><span className="font-semibold">Figura 5.1</span> Osteogeneza.</p>
            </div>
            <p>În funcție de originea lor, oasele se clasifică în:</p>
            <ul className="list-disc list-inside space-y-4">
              <li><span className="font-semibold">oase de membrană</span> - dezvoltate prin osificare desmală (endoconjuctivă).</li>
              <p><span className="font-semibold">Osificarea desmală/ de membrană</span>: determină formarea oaselor bolții cutiei craniene și parțial: claviculelor și mandibulei. Totodată, susține creșterea în grosime a oaselor lungi (datorită periostului).</p>
              <li><span className="font-semibold">oase de cartilaj </span> – dezvoltate prin osificare encondrală</li>
            </ul>
            <p>
              <span className="font-semibold">Osificarea encondrală</span>: determină formarea oaselor membrelor, oaselor scurte și oaselor bazei craniului. Totodată, susține creșterea în lungime a osului la nivelul cartilajului de creștere – <span className="font-semibold">cartilajul diafizo-epifizar</span>. În modelul cartilaginos al unui os lung apar centre de osificare. <span className="font-semibold">Inițial apar în diafiză</span> și ulterior în epifize și poartă numele de <span className="font-semibold">puncte de osificare primitivă (primară)</span>.
            </p>
            <p>
              Procesul de osificare al epifizelor începe mai târziu, atunci când acestea aproape au atins dimensiunile finale. <span className="font-semibold">Până în jurul vârstei de 20 de ani, cartilajele de conjugare diafizo-epifizare sau de creștere, își păstrează structura cartilaginoasă</span>. Celulele acestora se reproduc doar spre diafiză, favorizând astfel creșterea în lungime a osului. Zona internă, osteogenă a periostului este cea care asigură creșterea în grosime.
            </p>
            <p>
              Atunci când creșterea încetează, epifizele rămân acoperite cu un strat subțire de cartilaj hialin, denumit <span className="font-semibold">cartilaj articular</span>. În jurul vârstei de 20-25 de ani, cartilajele de creștere sunt înlocuite de țestul osos și epifizele se sudează la diafize.
            </p>
            <div className="flex flex-col items-center">
              <Image
                  src="/c5-2.webp"
                  alt="Osteogeneza oaselor lungi"
                  width={1000}
                  height={100}
                  className="w-2/3 rounded-lg mb-6"
              />
              <p className="text-lg mb-10"><span className="font-semibold">Figura 5.2</span> Osteogeneza oaselor lungi.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="scheletul" className="space-y-4">
        <h2 className="text-2xl font-semibold"> 5.3 Scheletul</h2>
        <div className="ml-4 space-y-8 text-lg">
          <div className="space-y-8">
            <p>Scheletul constituie totalitatea oaselor așezate în poziție anatomică.</p>
            <div className="flex flex-col items-center">
              <Image
                  src="/c5-3.webp"
                  alt="Scheletul"
                  width={1000}
                  height={100}
                  className="w-1/2 rounded-lg mb-6"
              />
              <p className="text-lg mb-10"><span className="font-semibold">Figura 5.3</span> Scheletul.</p>
            </div>
            <p>Clasificarea oaselor după formă se face în:</p>
            <ul className="list-disc list-inside space-y-4">
              <li><span className="font-semibold">oase lungi</span> (predomină lungimea): humerus, radius, ulna, femur, tibie, fibulă</li>
              <li><span className="font-semibold">oase late</span> (predomină lățimea și înălțimea): parietal, frontal, occipital, stern, scapulă, coxal</li>
              <li><span className="font-semibold">oase scurte</span> (cele 3 dimensiuni sunt aproximativ egale): carpiene, tarsiene</li>
            </ul>
            <p>
              Unele oase se află în grosimea unui tendon și se numesc <span className="font-semibold">sesamoide</span>. Un exemplu ar fi rotula care se găsește în grosimea tendonului cvadriceps femural.
            </p>
            <p>
             <span className="font-semibold">Unele oase alungite, la care predomină lungimea, sunt lipsite de diafiză și epifiză – coastele și clavicula.</span>
            </p>
          </div>
        </div>
      </div>
      <div id="scheletul-capului" className="space-y-4">
        <h2 className="text-2xl font-semibold"> 5.4 Scheletul capului</h2>
        <div className="ml-4 space-y-8 text-lg">
          <div className="space-y-8">
            <p><span className="font-semibold">Scheletul capului</span> - alcătuire:</p>
            <ul className="list-disc list-inside space-y-4">
              <li><span className="font-semibold">Neurocraniu</span> – în interiorul său se află encefalul</li>
              <p>
                Prezintă <span className="font-semibold">4 oase nepereche</span>: frontal, etmoid, sfenoid (se articulează cu oasele temporal, parietal, frontal, zigomatic), occipital.
              </p>
              <p>
              Prezintă <span className="font-semibold">2 oase perechi</span>: temporale (nu se articulează cu osul frontal) și parietale.
              </p>
              <li><span className="font-semibold">Viscerocraniu</span> – în interiorul său se află segmente periferice ale organelor de simț, dar include și primele segmente ale aparatelor respirator și digestiv</li>
              <p>
                Prezintă <span className="font-semibold">2 oase nepereche</span>: vomerul și mandibula.
              </p>
              <p>
                Prezintă <span className="font-semibold">6 oase perechi</span>: maxilare, palatine, nazale, lacrimale, zigomatice, cornetele nazale inferioare.
              </p>
            </ul>
            <div className="flex flex-col items-center">
              <Image
                  src="/c5-4.webp"
                  alt="Craniul"
                  width={1000}
                  height={100}
                  className="w-1/3 rounded-lg mb-6"
              />
              <p className="text-lg mb-10"><span className="font-semibold">Figura 5.4</span> Craniul.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="scheletul-trunchiului" className="space-y-4">
        <h2 className="text-2xl font-semibold"> 5.5 Scheletul trunchiului</h2>
        <div className="ml-4 space-y-8 text-lg">
          <div className="space-y-8">
            <p><span className="font-semibold">Scheletul trunchiului</span> - alcătuire:</p>
            <ul>
              <li><span className="font-semibold">Coloana vertebrala</span></li>
              <li><span className="font-semibold">Stern</span></li>
              <li><span className="font-semibold">Coaste</span></li>
              <li><span className="font-semibold">Bazin: osul sacru si doua oase coxale</span></li>
            </ul>
            <p>Sternul si coastele fac parte din scheletul toracelui.</p>
          </div>
        </div>
        <p><span className="font-semibold text-xl">Coloana vertebrala</span></p>
        <div className="ml-4 space-y-8 text-lg">
          <p>
            Coloana vertebrală constituie <span className="font-semibold">scheletul axial</span>, fiind dispusă în partea mediană și posterioară a corpului. Roluri:
          </p>
          <ul className="list-disc list-inside space-y-4">
            <li>ax de sustinere a corpului</li>
            <li>protejeaza MS</li>
            <li>sustine efectuarea diferitelor miscari ale trunchiului si capului</li>
          </ul>
          <p>
            Coloana vertebrală este împărțită în 5 regiuni:
          </p>
          <ul className="list-disc list-inside space-y-4">
            <li><span className="font-semibold">cervicala</span> - 7 vertebre cervicale</li>
            <li><span className="font-semibold">toracala (dorsala)</span> - 12 vertebre toracale</li>
            <li><span className="font-semibold">lombara</span> - 5 vertebre lombare</li>
            <li><span className="font-semibold">sacrala</span> - 5 vertebre sacrale</li>
            <li><span className="font-semibold">coccigiana</span> - 4-5 vertebre sacrale</li>
          </ul>
          <div className="flex flex-col items-center">
            <Image
                src="/c5-5.webp"
                alt="Coloana vertebrala"
                width={1000}
                height={100}
                className="w-1/4 rounded-lg mb-6"
            />
            <p className="text-lg mb-10"><span className="font-semibold">Figura 5.5</span> Coloana vertebrala.</p>
          </div>
          <p>
            Prima vertebră din regiunea cervicală se numește <span className="font-semibold">atlas</span> și a doua <span className="font-semibold">axis</span>.
          </p>
          <p>
            O vertebră tip prezintă anterior – <span className="font-semibold">corpul vertebral</span>, posterior – <span className="font-semibold">arcul vertebral</span>, iar cele două formațiuni sunt unite prin <span className="font-semibold">2 pediculi vertebrali</span>. Prin suprapunerea acestora din urmă se delimitează <span className="font-semibold">orificiile intervertebrale (de conjugare)</span> care reprezintă locurile de ieșire ale nervilor spinali. Între cele 3 structuri (corp, pediculi și arc), se află <span className="font-semibold">orificiul vertebral</span>, care prin suprapunere rezultă <span className="font-semibold">canalul vertebral</span> în care se află MS.
          </p>
          <div className="flex flex-col items-center">
            <Image
                src="/c5-6.webp"
                alt="Vertebră lombară"
                width={1000}
                height={100}
                className="w-1/3 rounded-lg mb-6"
            />
            <p className="text-lg mb-10"><span className="font-semibold">Figura 5.6</span> O vertebră lombară.</p>
          </div>
          <p>
            Sudarea celor 5 vertebre sacrale formează osul sacru. Acesta este un os nepereche, median, de forma unui triunghi, cu baza în sus. Vârful său orientat în jos se unește cu baza coccisului. Fețele laterale ale osului sacru au o suprafața de articulare pentru osul coxal.
          </p>
          <p>
            Prin fuzionarea celor 4-5 vertebre coccigiene duc la formarea coccigelui.
          </p>
          <p>
            Coloana vertebrală prezintă curburi:
          </p>
          <ul className="list-disc list-inside space-y-4">
            <li>în <span className="font-semibold">plan sagital</span> – se numesc <span className="font-semibold">lordoze</span> (când concavitatea este posterior, convexitatea este anterior), în regiunile cervicală și lombară; și <span className="font-semibold">cifoze</span> (când concavitatea este anterior, convexitatea posterior), în regiunile toracală și sacrală.</li>
            <li>în <span className="font-semibold">plan frontal</span> – se numesc <span className="font-semibold">scolioze</span> și pot fi cu convexitatea la stânga sau la dreapta.</li>
          </ul>
          <div className="flex flex-col items-center">
            <Image
                src="/c5-7.webp"
                alt="Coloana vertebrală"
                width={1000}
                height={100}
                className="w-1/2 rounded-lg mb-6"
            />
            <p className="text-lg mb-10"><span className="font-semibold">Figura 5.7</span> Coloana vertebrală.</p>
          </div>
          <p><span className="font-semibold text-xl">Scheletul toracelui</span></p>
          <p>
            Scheletul toracelui/ toracele osos se compune din stern (anterior), coloana vertebrală (posterior) – prin cele 12 vertebre toracale – și coaste (în lateral).
          </p>
          <p>
            <span className="font-semibold">Sternul</span> – anterior, dispus pe linia mediană a toracelui. Este un os lat, format din: manubriu, corp și apendicele xifoid (își păstrează consistența cartilaginoasă până în jurul vârstei de 40 de ani).
          </p>
          <div className="flex flex-col items-center">
            <Image
                src="/c5-8.webp"
                alt="Structura sternului"
                width={1000}
                height={100}
                className="w-1/4 rounded-lg mb-6"
            />
            <p className="text-lg mb-10"><span className="font-semibold">Figura 5.8</span> Structura sternului.</p>
          </div>
          <p>
            <span className="font-semibold">Coastele</span> – arcuri osteocartilaginoase care se întind de la regiunea toracală a coloanei vertebrale și până la stern. Se află în partea laterală a toracelui. Sunt 12 perechi de coaste. Posterior, acestea sunt formate dintr-un arc osos care se articulează cu vertebrele toracale și anterior din cartilajul costal.
          </p>
          <p>
          În cazul primelor 7 perechi de coaste, cartilajul lor se articulează direct cu sternul și sunt încadrate ca fiind coaste adevărate. Perechile următoare, VIII, IX și X, se articulează cu sternul prin intermediul cartilajului coastei VII și se numesc coaste false. Ultimele două coaste sunt lipsite de cartilaj și nu mai ajung la stern. Acestea sunt coaste flotante (libere).
          </p>
        </div>
      </div>
      <div id="scheletul-membrelor" className="space-y-4">
        <h2 className="text-2xl font-semibold"> 5.6 Scheletul membrelor</h2>
        <div className="ml-4 space-y-8 text-lg">
          <div className="space-y-8">
            <p><span className="font-semibold">Scheletul membrelor superioare</span>- alcătuire:</p>
            <ul className="list-disc list-inside space-y-4">
              <li><span className="font-semibold">scheletul centurii scapulare</span>: claviculă și scapulă (omoplat). Centura scapulară (clavicula + omoplat) leagă membrul superior de torace.</li>
              <p>
                <span className="font-semibold">Clavicula</span> – os alungit, are forma literei „S” culcată. Lateral se articulează cu scapula și medial cu manubriul sternal.
              </p>
              <p>
                <span className="font-semibold">Scapula</span> – os lat, de formă triunghiulară, dispus cu baza în sus. Se articulează lateral cu humerusul.
              </p>
              <li><span className="font-semibold">scheletul membrului superior liber</span>: scheletul brațului, antebrațului și mâinii.</li>
              <p>
                <span className="font-semibold">Scheletul brațului</span> – format din osul humerus.
              </p>
              <p>
                <span className="font-semibold">Scheletul antebrațului</span> – format din două oase lungi: radius și ulna.
              </p>
              <p>
                <span className="font-semibold">Scheletul mâinii</span> – format din: 8 oase carpiene, 5 metacarpiene, 14 falange (în cazul degetului I (police), se află doar două falange).
              </p>
            </ul>
            <p><span className="font-semibold">Scheletul membrelor inferioare</span>- alcătuire:</p>
            <ul className="list-disc list-inside space-y-4">
              <li><span className="font-semibold">centura pelvină</span> – leagă membrul inferior de scheletul trunchiului. Este formată din oasele coxale. Acestea se articulează anterior între ele și formează simfiza pubiană. Posterior se articulează cu sacrul și formează bazinul – pelvisul osos.</li>
              <p>
                Prin sudarea a 3 oase (ilion, ischion, pubis) se obține osul coxal. Sudarea acestora survine ca un mecanism de adaptare la stațiunea bipedă, membrele inferioare fiind diferențiate tocmai pentru a prelua din greutatea corpului și a susține funcția locomotorie.
              </p>
              <li><span className="font-semibold">scheletul membrului inferior propriu-zisă</span> – scheletul coapsei, gambei, piciorului și rotula.</li>
              <p>
                <span className="font-semibold">Scheletul gambei</span> – este format din două oase: tibia – dispusă medial, mai voluminoasă și fibula – lateral.
              </p>
              <p>
                <span className="font-semibold">Rotula</span> – os triunghiular, așezat cu baza în sus, așezat în tendonul mușchiului cvadriceps. Partea posterioară se articulează cu epifiza distală a femurului.
              </p>
              <p>
                <span className="font-semibold">Scheletul piciorului</span> – este alcătuit din: 7 oase tarsiene, 5 oase metatarsiene, 14 falange (pentru degetul I (haluce) sunt doar două).
              </p>
            </ul>
          </div>
        </div>
      </div>
      <div id="rolurile-functionale-ale-oaselor" className="space-y-4">
        <h2 className="text-2xl font-semibold"> 5.7 Rolurile functionale ale oaselor</h2>
        <div className="ml-4 space-y-8 text-lg">
          <div className="space-y-8">
            <p>rolurile functionale ale oaselor sunt:</p>
            <ul className="list-disc list-inside space-y-4">
              <li><span className="font-semibold">De parghii ale aparatului locomotor</span></li>
              <p>
                Asupra acestora acționează mușchii care asigură susținerea corpului și locomoția. Pârghiile formate sunt de cele 3 ordine:
              </p>
              <ul>
                <li className="gap-2">I – articulația craniului cu coloana vertebrală.</li>
                <li className="gap-2">II – articulația dintre oasele gambei și picior.</li>
                <li className="gap-2">III – articulația dintre osul brațului și cele ale antebrațului.</li>
              </ul>
            </ul>
            <div className="flex flex-col items-center">
              <Image
                  src="/c5-9.webp"
                  alt="Pârghie osteo-musculară de ordinul I"
                  width={1000}
                  height={100}
                  className="w-1/3 rounded-lg mb-6"
              />
              <p className="text-lg mb-10"><span className="font-semibold">Figura 5.9</span> Pârghie osteo-musculară de ordinul I – articulația craniului cu coloana vertebrală.</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                  src="/c5-10.webp"
                  alt="Pârghie osteo-musculară de ordinul II"
                  width={1000}
                  height={100}
                  className="w-1/3 rounded-lg mb-6"
              />
              <p className="text-lg mb-10"><span className="font-semibold">Figura 5.10</span> Pârghie osteo-musculară de ordinul II – articulația dintre oasele gambei și picior.</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                  src="/c5-11.webp"
                  alt="Pârghie osteo-musculară de ordinul III"
                  width={1000}
                  height={100}
                  className="w-1/3 rounded-lg mb-6"
              />
              <p className="text-lg mb-10"><span className="font-semibold">Figura 5.11</span> Pârghie osteo-musculară de ordinul III – articulația dintre osul brațului și cele ale antebrațului.</p>
            </div>
            <ul className="list-disc list-inside space-y-4">
              <li className="font-semibold">De protecție a unor organe de importanță vitală</li>
              <ul>
                <li>Cutia craniană – pentru encefal.</li>
                <li>Canalul rahidian – pentru MS.</li>
                <li>Cutia toracică – pentru inimă și plămâni.</li>
                <li>Bazinul osos – pentru organele pelvine.</li>
              </ul>
              <li className="font-semibold">Antitoxic</li>
              <p>
                Oasele au capacitatea de a reține numeroase substanțe toxice (de exemplu: F, Hg, Pb) care pătrund accidental în organism, după care le eliberează treptat și ulterior se elimină renal. Astfel, concentrația toxicului în sânge nu are o valoare crescută, în felul acesta prevenindu-se efectele toxice asupra altor organe.  
              </p>
              <li className="font-semibold">De sediu principal al organelor hematopoetice</li>
              <p>
                Toate oasele copiilor și în cazul adulților doar cele late, prezintă măduva roșie hematogenă (din care se formează elementele figurate ale sângelui - proces de hematopoieză). La adult, măduva din canalul central al diafizelor oaselor lungi este galbenă (țesut adipos cu rol de rezervă). La vârstnici aceasta este cenușie, nefuncțională.
              </p>
              <li className="font-semibold">În metabolismul calciului, fosforului și electroliților</li>
              <p>
                Oasele constituie rezervorul principal de substanțe minerale al organismului.
              </p>
            </ul>
          </div>
        </div>
      </div>
      <div id="compozitia-chimica-a-oaselor" className="space-y-4">
        <h2 className="text-2xl font-semibold"> 5.8 Compoziția chimică a oaselor</h2>
        <div className="ml-4 space-y-8 text-lg">
          <div className="space-y-8">
            <p>
              <span className="font-semibold">Osul conține: 20% apă și 80% reziduu uscat</span>. Din procentul de reziduu uscat, osul este format dintr-o matrice organică solidă care este foarte mult întărită de depozitele de săruri de calciu. Deci reziduul uscat al osului este format din matrice organică și săruri minerale.
            </p>
            <p>
              <span className="font-semibold">Matricea organică a osului</span>: 90 – 95% fibre de colagen. Acestea se extind în principal de-a lungul liniilor de forță de tensiune și conferă osului marea sa rezistență la tensiune. Restul conținutului din matricea organică a osului (5 - 10 %) este reprezentat de un mediu omogen, denumit substanță fundamentală. O particularitate metabolică o reprezintă afinitatea mare a substanței fundamentale față de sărurile minerale.
            </p>
            <p>
              Fibrele de colagen și substanța fundamentală formează împreună oseina.
            </p>
            <p>
              <span className="font-semibold">Sărurile minerale</span> au ca reprezentant principal: <span className="font-semibold">fosfatul de calciu</span>. Substanța cristalină de cea mai mare importanță din structura osului: <span className="font-semibold">hidroxiapatita</span>.
            </p>
            <p>
              La nivelul <span className="font-semibold">oaselor se desfășoară procese metabolice identice celorlalte organe</span>. Însă, în mod particular, din punct de vedere metabolic, <span className="font-semibold">substanța fundamentală manifestă o afinitate mare față de sărurile minerale</span>.
            </p>
          </div>
        </div>
      </div>
      <div id="articulatiile" className="space-y-4">
        <h2 className="text-2xl font-semibold"> 5.9 Articulatiile</h2>
        <div className="ml-4 space-y-8 text-lg">
          <div className="space-y-8">
            <p>
              Articulațiile <span className="font-semibold">sunt organe de legătură</span> între oase. Reprezintă <span className="font-semibold">sediul mișcărilor</span>.
            </p>
            <div className="flex flex-col items-center">
              <Image
                  src="/c5-12.webp"
                  alt="Articulația genunchiului"
                  width={1000}
                  height={100}
                  className="w-1/3 rounded-lg mb-6"
              />
              <p className="text-lg mb-10"><span className="font-semibold">Figura 5.11</span> Articulația genunchiului.</p>
            </div>
            <p>
              În funcție de gradul de mobilitate, acestea se clasifică în: sinartroze și diartroze.
            </p>
            <p>
              <span className="font-semibold">SINARTROZE</span> – articulații fixe, imobile. Nu au cavitate articulară. Mișcările executate sunt foarte reduse. Între cele două oase se interpune un țesut care în funcție de tipul acestuia, sinartrozele se împart în:
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li><span className="font-semibold">sindesmoze</span> – între oase se află țesut fibros (suturile craniene)</li>
              <li><span className="font-semibold">sincondroze</span> – între oase se află țesut cartilaginos (simfizele)</li>
              <li><span className="font-semibold">sinostoze</span> – între oase se află țesut osos (în cazul sindesmozelor și sincondrozelor osificate cu înaintarea în vârstă).</li>
            </ul>
            <p>
              <span className="font-semibold">DIARTROZE</span> – articulații ce prezintă un grad variabil de mobilitate. Acestea se clasifică în:
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li><span className="font-semibold">amfiartroze</span> – articulații semimobile. Prezintă suprafețe articulare plane/ ușor concave. De exemplu, articulațiile dintre corpurile vertebrale care rezultă prin interpunerea discurilor intervertebrale.</li>
              <li><span className="font-semibold">artrodii</span> – articulații mobile, sinoviale, cu mobilitate mare. De exemplu: articulația genunchiului. Mișcările în artrodii sunt dependente de forma suprafețelor articulare. Acestea pot avea loc în jurul unui ax, a două sau 3 axe. Elementele structurale care intră în alcătuirea unui artrodii sunt: suprafețele articulare, capsula articulară, membrana sinovială, cavitatea articulară, ligamentele articulare.     </li>
            </ul>
            <div className="flex flex-col items-center">
              <Image
                  src="/c5-13.webp"
                  alt="Articulația genunchiului"
                  width={1000}
                  height={100}
                  className="w-1/2 rounded-lg mb-6"
              />
              <p className="text-lg mb-10"><span className="font-semibold">Figura 5.13</span> Articulația genunchiului (imagine mai detaliată).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SistemulOsosChapter;
