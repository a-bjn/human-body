import Link from "next/link";
import { scrollToSection } from "../../utils/scrollToSection";

const RespiratiaChapter = () => {
  return (
    <section className="flex flex-col justify-between space-y-8 font-light">
      <h1 className="text-3xl font-bold">2. Respiratia</h1>
      <div className="text-lg space-y-1">
				<h3 className="text-xl"> Cuprins: </h3>
				<ol className="text-blue-500 ml-4">
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="#plamanii" onClick={(e) => { e.preventDefault(); scrollToSection("plamanii"); }}>
              2.1 Plamanii
            </Link>
          </li>
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="#ventilatia-pulmonara" onClick={(e) => { e.preventDefault(); scrollToSection("ventilatia-pulmonara"); }}>
              2.2 Ventilatia Pulmonara
            </Link>
          </li>
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="#volume-si-capacitati-pulmonare" onClick={(e) => { e.preventDefault(); scrollToSection("volume-si-capacitati-pulmonare"); }}>
              2.3 Volume si Capacitati Pulmonare
            </Link>
          </li>
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="#difuziunea" onClick={(e) => { e.preventDefault(); scrollToSection("difuziunea"); }}>
              2.4 Difuziunea
            </Link>  
          </li>
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="#transportul-gazelor" onClick={(e) => { e.preventDefault(); scrollToSection("transportul-gazelor"); }}>
              2.5 Transportul Gazelor
            </Link>
            
          </li>
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="#notiuni-elementare-de-igiena-si-patologie" onClick={(e) => { e.preventDefault(); scrollToSection("notiuni-elementare-de-igiena-si-patologie"); }}>
              2.6 Notiuni Elementare de Igiena si Patologie
            </Link>
          </li>
				</ol>
			</div>
      <div id="plamanii" className="space-y-4">
        <h2 className="text-2xl font-semibold"> 2.1 Plamanii </h2>
        <div className="ml-4 space-y-8 text-xl">
          <div className="space-y-8">
            <p>
              Din sistemul respirator fac parte căile respiratorii și plămânii. Căile respiratorii cuprind:
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li><span className="font-semibold">calea nazală</span> - alcătuită din două spații simetrice denumite fose nazale. Acestea se află la baza craniului și superior cavității bucale</li>
              <li><span className="font-semibold">faringe </span> - aici ajunge aerul de la nivelul cavitații nazale. Totodată, este și locul de intersecție a căii respiratorii cu cea digestivă care se separă prin mișcările epiglotei</li>
              <li><span className="font-semibold">laringe</span> - organ cu funcție dublă: intervine în respirație și în fonație (prin corzile vocale)</li>
              <li><span className="font-semibold">trahee</span> – organ situat în continuarea laringelui, are formă de tub, cu o lungime de 10-12 cm</li>
              <li><span className="font-semibold">bronhii </span> – rezultă prin împărțirea în două a traheei la nivelul vertebrei T4 (bronhia principală stângă și dreaptă). Bronhiile pătrund în plămâni prin hil, unde se ramifică intrapulmonar și formează arborele bronșic.</li>
            </ul>
            <p>
              Principalele organe ale respirației sunt plămânii. Aceștia se află în cutia toracică. Capacitatea lor totală de aer este de 5 L, care poate prezenta variații individuale. Fiecare plămân este protejat de o seroasă, denumită pleură. Aceasta are o foiță parietală care acoperă pereții toracelui și o foiță viscerală care îmbracă plămânul. Între aceste două foițe se află un spațiu virtual denumit cavitate pleurală în care se găsește o lamă fină de lichid pleural.  
            </p>
            
            <p>
              Bronhia principală stângă sau dreaptă se divide în bronhii, iar acestea mai departe în bronhiole. Ramificațiile finale ale arborelui bronșic sunt bronhiolele respiratorii. De la nivelul lor pleacă ductele alveolare care se termină cu săculeții alveolari. Pereții acestora sunt separați (compartimentați) în alveole pulmonare. În jurul acestora se află o rețea bogată de capilare care alături de pereții alveolelor alcătuiesc membrana alveolo-capilară (membrană respiratorie). La acest nivel au loc schimburile gazoase dintre alveole și sânge.
            </p>
            <p>
              Bronhiolele respiratorii, alături de formațiunile care derivă din ele, respectiv: ductele (canalele) alveolare, săculeții alveolari, alveolele pulmonare – formează acinii pulmonari. Acinul reprezintă unitatea morfo-funcțională a plămânului. Bronhiola lobulară precede bronhiola respiratorie.
            </p>
          </div>
        </div>
      </div>
      <div id="ventilatia-pulmonara" className="space-y-4">
        <h2 className="text-2xl font-semibold"> 2.2 Ventilatia Pulmonara </h2>
        <div className="ml-4 space-y-8 text-xl">
          <div className="space-y-8">
            <p>
              Respirația constă în schimbul de oxigen și dioxid de carbon dintre organism și mediu. Din punct de vedere funcțional, respirația prezintă:
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li><span className="font-semibold">ventilația pulmonară</span> - deplasarea de aer în ambele sensuri între alveole pulmonare și atmosferă</li>
              <li><span className="font-semibold">difuziunea oxigenului și a dioxidului de carbon</span> - între alveolele pulmonare și sânge</li>
              <li><span className="font-semibold">transportul oxigenului și dioxidului de carbon</span> - prin sânge și lichidele organismului către și de la celule</li>
              <li><span className="font-semibold">reglarea ventilației</span>.</li>
            </ul>
            <p>
              Circulația alternativă a aerului are loc datorită variațiilor ciclice ale cutiei toracice cărora le urmează mișcările în același sens ale plămânilor, legătură făcută prin pleură. Astfel, variațiile ciclice ale volumului aparatului toraco-pulmonar se efectuează în decursul a două mișcări de sens opus, care se definesc ca mișcare inspiratorie și mișcare expiratorie.
            </p>
            <h2 className="text-xl font-semibold"> Mecanica Ventilatiei Pulmonare </h2>
            <div className="space-y-4">
              <p>
                Dimensiunile plămânilor pot varia prin distensie (mărire) și retracție (micșorare) în două moduri, astfel:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>diafragmul manifestă mișcări de ridicare și de coborâre care alungesc sau micșorează cavitatea toracică</li>
                <p>
                  Respirația normală, în repaus, este susținută aproape complet prin astfel de mișcări. În inspir, diafragmul se contractă și trage în jos partea bazală a plămânilor. În expirul liniștit, mușchiul diafragm se relaxează, iar plămânii se comprimă ca urmare a retracției elastice a acestora, a peretelui toracic, precum și a structurilor abdominale.
                </p>
                <li>coastele manifestă mișcări de ridicare și coborâre care duc la creșterea și descreșterea (scăderea) diametrului antero-posterior al cavității toracice</li>
               </ul>
            </div>
            <p>
              Expansiunea plămânilor se mai poate realiza prin ridicarea aparatului costal. Acesta este coborât în poziția de repaus și astfel permite apropierea sternului de coloana vertebrală. Odată cu ridicarea grilajului costal, îndepărtează sternul de coloana vertebrală, proiectându-l înainte. În acest fel, diametrul antero-posterior al cutiei toracice în inspirul maxim îl depășește cu circa 20% pe cel din cursul expirului. În ridicarea grilajului costal intervin mușchii inspiratori din care fac parte în mod special mușchii gâtului. Coborârea este asigurată de către mușchii expiratori, printre care mușchii drepți abdominali.
            </p>
            <p>
              Presiunea pleurală reprezintă presiunea din cavitatea pleurală, spațiul dintre pleura parietală și cea viscerală. Aceasta prezintă variații în raport cu fazele respirației. În mod normal, există o sucțiune (vid) permanentă a lichidului pleural din acest spațiu, ceea ce determină o presiune pleurală negativă în raport cu presiunea atmosferică (este mai mică decât aceasta).
            </p>
            <p>
              Presiunea alveolară reprezintă presiunea din interiorul alveolelor pulmonare. În repaus, când glota este deschisă, aerul nu se vehiculează între plămâni și atmosferă. În acest moment, presiunea din orice zonă a arborelui respirator este egală cu presiunea atmosferică, considerată 0 cm H2O. Pătrunderea aerului în plămâni în timpul inspirului este favorizată de scăderea presiunii alveolare sub presiunea atmosferică. În cursul unei inspirații normale, presiunea alveolară are o valoare de -1 cm H2O. Această presiune negativă ușoară este suficientă pentru ca în cursul celor două secunde necesare inspirului, plămânii să aspire circa 500 mL de aer. În timpul expirației, variațiile sunt opuse: astfel, presiunea alveolară înregistrează o creștere la +1 cm H2O, ceea ce va determina eliberarea celor 500 mL de aer să părăsească plămânii în 2-3 secunde, pe durata expirației.
            </p>
            <p>
              (Completare: Arborele respirator reprezintă ansamblul căilor respiratorii care transportă aerul de la nivelul cavității nazale până la alveolele pulmonare, unde se realizează schimbul de gaze (oxigen și dioxid de carbon)).
            </p>
            <div className="space-y-4">
              <p>
                <span className="font-semibold">Forțele elastice pulmonare (de recul)</span> – stau la baza realizării expirației sunt de două tipuri:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>forțele elastice ale însuși țesutului pulmonar</li>
                <li>forțele elastice realizate de tensiunea superficială a lichidului tensioactiv care acoperă (căptușește) la interior pereții alveolari (surfactant) și alte spații aeriene pulmonare</li>
              </ul>
            </div>
            <p>
              Între suprafața internă a alveolelor acoperită de stratul subțire de lichid și aerul din alveole, iau naștere forțe de tensiune superficiale. Pentru că acest fenomen este întâlnit în toate spațiile aeriene pulmonare, efectul determinat constă într-o forță rezultantă a întregului plămân, numită forță de tensiune superficială și care completează (se adaugă) elasticitatea țestului pulmonar, determinând expirația.
            </p>
            <p>
              Reglarea ventilației pulmonare se face de către centrii nervoși din bulb și punte. Aceștia se bazează pe stimulii primiți de la chemoreceptorii din structura acestor formațiuni nervoase sau ale unor vase de sânge (Completare: de exemplu: chemoreceptorii din corpii carotidieni și aortici).
            </p>
          </div>
        </div>
      </div>
      <div id="volume-si-capacitati-pulmonare" className="space-y-4">
        <h2 className="text-2xl font-semibold"> 2.3 Volume și capacități pulmonare </h2>
        <div className="ml-4 space-y-8 text-xl">
          <div className="space-y-8">
            <p>
              <span className="font-semibold">Spirometria</span> – procedură facilă de investigare a ventilației pulmonare prin înregistrarea volumului aerului vehiculat spre interiorul și exteriorul plămânilor. Aparatul folosit în determinare se numește spirometru (motiv pentru care procedeul se numește spirometrie).
            </p>
            <div className="space-y-4">
              <p>
                Se disting 4 volume pulmonare. Prin însumarea acestora se obține volumul maxim asociat expansiunii pulmonare.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><span className="font-semibold">Volumul curent (VC)</span> – 500 mL (în medie) – reprezintă volumul de aer inspirat și expirat în cursul unei respirații normale</li>
                <li><span className="font-semibold">Volumul inspirator de rezervă (VIR)</span> – aprox. 1500 mL – reprezintă volumul suplimentar de aer care poate fi inspirat peste volumul curent</li>
                <li><span className="font-semibold">Volumul expirator de rezervă (VER)</span> – aprox. 1500 mL – reprezintă volumul suplimentar de aer care poate fi expirat în urma unui expir forțat, la finalul expirului unui volum curent</li>
                <li><span className="font-semibold">Volumul rezidual (VR)</span> – aprox. 1500 mL. Volumul de aer rămas în plămâni la finalul unui expir forțat. Singurul volum care nu poate fi determinat spirometric, însă se pot folosi alte metode de măsurare speciale</li>
              </ul>
            </div>
            <div className="space-y-4">
              <p>
                <span className="font-semibold">Capacitățile pulmonare</span> rezultă prin însumarea a două sau mai multe volume pulmonare.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><span className="font-semibold">Capacitatea inspiratorie (CI)</span> – 2000 mL – suma dintre VC + VIR; reprezintă volumul de aer respirat de un individ, începând cu nivelul expirator normal și până la distensia maximă a plămânilor</li>
                <li><span className="font-semibold">Volumul inspirator de rezervă (VIR)</span> – 3000 mL – suma dintre VER + VR; reprezintă volumul de aer rămas în plămâni la finalul unui expir normal. În determinare este inclus și volumul rezidual, deci CRF nu poate fi măsurată spirometric, ci prin metode speciale</li>
                <li><span className="font-semibold">Volumul expirator de rezervă (VER)</span> – 3500 mL – suma dintre VIR + VC + VER; reprezintă volumul maxim de aer posibil de scos din plămâni la finalul unei inspirații maxime</li>
                <li><span className="font-semibold">Volumul rezidual (VR)</span> – 5000 mL – suma dintre CV + VR; reprezintă volumul maxim până la care pot fi expansionați plămânii prin efort inspirator maxim</li>
              </ul>
            </div>
            <p>
              Minut-volumul respirator sau debitul respirator – reprezintă cantitatea totală de aer (volumul) vehiculat în arborele respirator în fiecare minut. Valoarea sa este dată de produsul dintre volumul curent (VC) și frecvența respiratorie. Astfel, pentru un VC de 500 mL și o frecvență de 18 respirații/minut, debitul respirator este de 9L/minut. Valoarea sa poate prezenta variații date de condițiile fiziologice și patologice.
            </p>
            <p>
              Ventilația alveolară – reprezintă volumul de aer care ajunge în zona alveolară a tractului respirator în cursul unui minut și intervine în schimbările gazoase. În medie, prezintă o valoare de 4,5–5 L/minut. Diferența de volum dintre valoarea ventilației alveolare și minut-volumul respirator o reprezintă ventilația spațiului mort, adică un volum de aer care nu intervine în schimburile gazoase, dar umple căile aeriene până la bronhiile terminale (mai corect: bronhiolele terminale). Ventilația alveolară constituie unul dintre factorii majori care determină presiunile parțiale ale dioxidului de carbon și oxigenului în alveole.
            </p>
          </div>
        </div>
      </div>
      <div id="difuziunea" className="space-y-4">
        <h2 className="text-2xl font-semibold"> 2.4 Difuziunea </h2>
        <div className="ml-4 space-y-8 text-xl">
          <div className="space-y-8">
            <p>
              În cursul procesului respirator, după ventilația alveolară urmează procesul de difuziune a oxigenului din alveole în sângele capilar și în sens opus, difuziunea dioxidului de carbon. Procesul de difuziune are loc doar în condițiile existenței unei diferențe de presiune care orientează desfășurarea sa dinspre zona cu presiune mare către zona cu presiune mică. Unele dintre cauzele care dau diferențele dintre concentrația gazelor în aerul alveolar față de cel atmosferic, sunt:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>în cursul fiecărei respirații, se face doar o înlocuire parțială a aerului alveolar cu cel atmosferic</li>
              <li>din aerul alveolar se reține oxigenul și în schimb, primește permanent dioxidul de carbon din sângele pulmonar</li>
              <li>înainte de a ajunge la alveolele pulmonare, aerul uscat din atmosferă care intră în căile respiratorii este umezit</li>
            </ul>
            <p>
              În prevenirea schimbărilor bruște ale concentrației de gaze din sânge, un rol foarte important îl are procesul de aerisire lentă de la nivelul alveolelor pulmonare.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              <span className="font-semibold">Membrana alveolo-capilară</span> mai este denumită și membrana respiratorie. Se întinde pe o suprafață totală de 50-100 m2, cu o grosime medie de 0,6 μ (microni). Aceasta este formată din:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>endoteliul capilar</li>
              <li>interstițiul pulmonar</li>
              <li>epiteliul alveolar</li>
              <li>surfactant (lichid tensioactiv)</li>
            </ul>
          </div>
          <div className="space-y-4">
            <p>
              <span className="font-semibold">Rata difuziunii gazelor prin membrana alveolo-capilară</span> este influențată de:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>presiunea parțială a gazului în alveola pulmonară</li>
              <li>presiunea parțială a gazului în capilarul alveolar</li>
              <li>coeficientul de difuziune a gazului (specific fiecărei molecule)</li>
              <li>dimensiunile membranei alveolo-capilare (relație de inversă proporționalitate cu grosimea sa și directă proporționalitate cu suprafața sa)</li>
            </ul>
          </div>
          <h2 className="font-semibold"> Difuziunea oxigenului </h2>
          <div className="space-y-4">
            <p>
              Dimensiunile plămânilor pot varia prin distensie (mărire) și retracție (micșorare) în două moduri, astfel:
            </p>
            <p>Pe baza existenței unei diferențe de presiune între presiunea parțială a oxigenului în aerul alveolar (100 mmHg) și a sângelui din capilarele pulmonare (40 mmHg), se produce difuziunea oxigenului din aerul alveolar în sângele din capilarele pulmonare. După traversarea membranei respiratorii, moleculele de oxigen se dizolvă în plasmă ducând la creșterea presiunii parțiale a oxigenului la acest nivel. (Consecutiv) Ulterior, oxigenul difuzează în eritrocite și se combină cu hemoglobina.</p>
            <p>În mod obișnuit, într-un interval de 0,25 de secunde presiunile parțiale alveolară și sangvină ale oxigenului, se egalează. Media de timp petrecut de hematie în capilarul pulmonar este de 0,75 secunde. Însă, dacă egalarea apare după 0,25 de secunde, atunci rămâne un interval de 0,50 de secunde denumit margine de siguranță. Acest interval de timp intervine in perioadele de stres, efort fizic, expunere la altitudini mari, etc., momente în care asigură o preluare adecvată a oxigenului.</p>
          </div>
          <h2 className="font-semibold"> Difuziunea dioxidului de carbon </h2>
          <div className="space-y-4">
            <p>Pe baza existenței unei diferențe de presiune între presiunea parțială a dioxidului de carbon în sângele din capilarele pulmonare (46 mmHg) și a aerului alveolar (40 mmHg), se produce <span className="semi-bold">difuziunea dioxidului de carbon</span> din capilarele pulmonare în alveole. Se poate remarca <span className="font-semibold">gradientul de difuziune al dioxidului de carbon că este de doar o zecime din cel al oxigenului</span>. Cu toate acestea, difuziunea dioxidului de carbon se face de 20 de ori mai rapid decât cea a oxigenului. Explicația este dată de solubilitatea mai mare în lichidele organismului (de 25 de ori mai mult) a dioxidului de carbon, față de a oxigenului. În mod obișnuit, într-un interval de 0,25 de secunde presiunile parțiale alveolară și sangvină ale dioxidului de carbon, se egalează.</p> 
          </div>
        </div>
      </div>
      <div id="transportul-gazelor" className="space-y-4">
        <h2 className="text-2xl font-semibold"> 2.5 Transportul Gazelor </h2>
        <div className="ml-4 space-y-8 text-xl">
          <div className="space-y-8">
            <h2 className="font-semibold"> Transportul oxigenului </h2>
            <div className="space-y-4">
              <p>Din plasmă, oxigenul difuzează în hematii (eritrocite), unde <span className="font-semibold">se combină reversibil cu ionii de fier</span> din structura hemoglobinei și în acest fel <span className="font-semibold">transformă dezoxihemoglobina în oxihemoglobină</span>. 1 g hemoglobină poate lega maximum 1,34 mL O2. Valoarea normală a hemoglobinei în sânge este de 12-15 g de hemoglobină/dL (la femei: 12-15,6 g/dL; la bărbați: 13,8-17,2 g/dL). Astfel, în sângele arterial se află 20 mL O2/dL. Din acest volum, 98,5% circulă legat de hemoglobină și 1,5% este dizolvat în plasmă.</p>
            </div>
            <div className="space-y-4">
            <p>O moleculă de hemoglobină poate lega maximum 4 molecule de oxigen. În acest fel se asigură o saturare completă a hemoglobinei cu oxigen (100%). Cantitatea de oxigen care se fixează la nivelul hemoglobinei este influențată de:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><span className="font-semibold">presiunea parțială a oxigenului în plasmă</span></li>
              <li><span className="font-semibold">valoarea pH-ului plasmatic</span> Odată cu scăderea lui și creșterea temperaturii, scade și capacitatea hemoglobinei de a fixa oxigen și este cedat astfel, țesturilor.</li>
              <li><span className="font-semibold">temperatură</span></li>
            </ul>
            <p>Presiunea parțială a oxigenului în țesuturi este de 40 mmHg, determinând astfel difuziunea oxigenului plasmatic în interstiții și apoi în celule. Ca urmare a acestui proces, presiunea parțială a oxigenului din plasmă va scădea rapid ducând la disocierea oxihemoglobinei. Saturarea hemoglobinei rămâne în jur de 50-70%.</p>
            <p>În repaus, fiecare 100 mL de sânge, eliberează în țesuturi câte 7 mL de oxigen, reprezentând coeficientul de utilizare a oxigenului. Poate crește până la 12% în timpul de efortului fizic. Prin procesul de cedare a oxigenului la țesuturi, o parte din hemoglobină se transformă în hemoglobină redusă. Această conferă sângelui venos o colorație roșie-violacee specifică.</p>
            <div className="space-y-4">
              <h2 className="font-semibold">Transportul dioxidului de carbon</h2>
              <p>Dioxidul de carbon este un produs final ce apare ca urmare a proceselor oxidative tisulare. Acesta difuzează de la nivel celular în capilare, favorizând creșterea presiunii parțiale a acestuia în sângele venos cu 5-6 mmHg față de sângele arterial. Formele de transport ale dioxidului de carbon în sânge, sunt:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><span className="font-semibold">dizolvat fizic în plasmă (5%)</span></li>
                <li><span className="font-semibold">carbaminohemoglobină (5%)</span> – dioxidul de carbon se fixează de grupările NH2 terminale ale lanțurilor proteice din structura hemoglobinei</li>
                <li><span className="font-semibold">bicarbonat plasmatic (90%)</span> – rezultat în urma fenomenului de membrană Hamburger (fenomenul migrării clorului) de la nivelul eritrocitelor</li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div id="notiuni-elementare-de-igiena-si-patologie" className="space-y-4">
        <h2 className="text-2xl font-semibold"> 2.6 Noțiuni elementare de igienă și patologie </h2>
        <div className="ml-4 space-y-8 text-xl">
          <div className="space-y-8">
            <p><span className="font-semibold">Gripa</span> – infecție respiratorie acută de cauză virală (virusul gripal). Este o patologie sezonieră, contagioasă, iar la vârstnici, în special, poate înregistra forme grave. În prezent, prin vaccinare antigripală se poate diminua numărul de cazuri, precum și gravitatea formelor.</p>
            <p><span className="font-semibold">Fibroza pulmonară</span> – afectare pulmonară prin care țesut funcțional pulmonar se înlocuiește cu țesut fibros. De exemplu – antracoza – cauzată prin inhalarea pe o perioadă mai lungă de timp a prafului de cărbune.</p>
            <p><span className="font-semibold">Emfizemul</span> – („aer în exces”), acumulare de aer la nivel pulmonar și prezintă un proces pulmonar complex obstructiv și distructiv. Cea mai frecventă cauză: fumatul pe o perioadă lungă de timp. Prin inhalarea fumului sau a altor substanțe cu efect iritant favorizează iritarea mucoasei bronșice și bronșiolare și implicit mecanismele locale de apărare sunt afectate ceea ce duce la infecții cronice. Astfel, căile aeriene mici sunt obstrucționate, crescând dificultatea de expirație, încât aerul pare „prins” în alveole. Ca formă de adaptare, alveolele se supradestind, ducând în timp la distrugerea lor – aproximativ 50-80% din pereții alveolari devin nefuncționali. Ca o consecință, scade capacitatea de difuziune la nivelul membranei alveolo-capilare. Totodată, numărul capilarelor pulmonare scade, iar rezistența în circulația pulmonară crește (hipertensiune pulmonară). În timp, fumătorul dezvoltă <span className="font-semibold">hipoxie</span> și <span className="font-semibold">hipercapnie</span> (mai mult de 4% dioxid de carbon în sânge) cu o finalitate dramatică.</p>
            <p><span className="font-semibold">Modificări de ritm respirator</span> – pot fi modificări normale – polipnee, care apar în cursul unui efort fizic. Sau pot fi modificări patologice, care apar în unele maladii pulmonare cardiace sau ale sistemului nervos central: de exemplu, respirația Cheyne-Stokes. Această patologie se manifestă prin scăderea amplitudinii mișcărilor respiratorii, urmată de apnee și ciclul de repetă.</p>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RespiratiaChapter;
