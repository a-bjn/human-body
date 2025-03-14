import Link from "next/link";
import Image from "next/image";
import { scrollToSection } from "../../utils/scrollToSection";

const MaduvaSpinariiChapter = () => {
  return (
    <section className="flex flex-col justify-between space-y-8 font-normal">
      <h1 className="text-3xl font-bold">4. Maduva Spinarii</h1>
      <div className="text-lg space-y-1">
				<h3 className="text-xl"> Cuprins: </h3>
				<ol className="text-blue-500 ml-4">
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="maduva-spinarii-ms" onClick={(e) => { e.preventDefault(); scrollToSection("maduva-spinarii-ms"); }}>
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
            <Link href="nervii-spinali" onClick={(e) => { e.preventDefault(); scrollToSection("nervii-spinali"); }}>
              4.4 Nervii spinali
            </Link>  
          </li>
					<li className="hover:text-blue-700 transition cursor-pointer">
            <Link href="functiile-maduvei-spinarii" onClick={(e) => { e.preventDefault(); scrollToSection("functiile-maduvei-spinarii"); }}>
              4.5 Functiile maduvei spinarii
            </Link>
          </li>
				</ol>
			</div>
      <div id="maduva-spinarii-ms" className="space-y-4">
        <h2 className="text-2xl font-bold"> 4.1 Maduva Spinarii (MS)</h2>
        <div className="ml-4 space-y-8 text-lg">
          <div className="space-y-8">
            <p>
              Măduva spinării, alături de encefal, constituie SNC.
              Prin <span className="font-semibold">suprapunerea orificiilor vertebrale se formează canalul vertebral</span> în interiorul căruia se află MS. Aceasta nu îl ocupă în întregime.
            </p>
            <div className="flex flex-col items-center">
              <Image
                  src="/c4-1.webp"
                  alt="Secțiune sagitală prin măduva spinării și creier"
                  width={1000}
                  height={100}
                  className="w-1/3 rounded-lg mb-6"
              />
              <p className="text-lg mb-10"><span className="font-semibold">Figura 4.1</span> Secțiune sagitală prin măduva spinării și creier.</p>
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
                  className="w-1/3 rounded-lg mb-6"
              />
              <p className="text-lg mb-10"><span className="font-semibold">Figura 4.2</span> Vertebră toracică.</p>
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
                  className="w-1/6 rounded-lg mb-6"
              />
              <p className="text-lg mb-10"><span className="font-semibold">Figura 4.3</span> Secțiune prin măduva spinării.</p>
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
                  className="w-1/2 rounded-lg mb-6"
              />
              <p className="text-lg mb-20"><span className="font-semibold">Figura 4.4</span> Meningele spinale.</p>
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
                  className="w-2/3 rounded-lg mb-6"
              />
              <p className="text-lg mb-20"><span className="font-semibold">Figura 4.5</span> Secțiune transversală prin măduva spinării.</p>
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
            <div className="flex flex-col items-center">
              <Image
                  src="/c4-6.webp"
                  alt="Măduva spinării în secțiune transversală"
                  width={1000}
                  height={100}
                  className="w-1/2 rounded-lg mb-6"
              />
              <p className="text-lg mb-20"><span className="font-semibold">Figura 4.6</span> Măduva spinării în secțiune transversală.</p>
            </div>
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
        </div>
      </div>
      <div id="caile-ascendente-ale-sensibilitatii" className="space-y-4">
        <h2 className="text-2xl font-bold"> 4.2 Căile ascendente ale sensibilității</h2>
        <div className="ml-4 space-y-8 text-base">
          <div className="space-y-8">
            <p><span className="font-semibold">Căile sensibilității exteroceptive</span> (stimulul provine din afara organismului) cuprind:</p>
            <ul className="list-disc list-inside space-y-4">
              <li>Calea sensibilității termice și dureroase</li>
              <li>Calea sensibilității tactile grosiere (protopatică)</li>
              <li>Calea sensibilității tactile fine (epicritice)</li>
            </ul>
            <div className="flex flex-col items-center">
              <Image
                  src="/c4-7.webp"
                  alt="Căile ascendente"
                  width={1000}
                  height={100}
                  className="w-1/2 rounded-lg mb-6"
              />
              <p className="text-lg mb-20"><span className="font-semibold">Figura 4.7</span> Căile ascendente.</p>
            </div>
            <p><span className="font-semibold">Calea sensibilității termice și dureroase</span></p>
            <p>
              Receptorii: în piele. Sunt terminațiile nervoase libere (atât pentru sensibilitatea dureroasă, cât și pentru cea termică).
            </p>
            <p>
              Neuronul I (protoneuronul): în ganglionul spinal. Dendrita acestuia este lungă, ajunge la receptori, iar axonul protoneuronului pătrunde în MS.
            </p>
            <p>
              Neuronul II (deutoneuronul): în neuronii senzitivi din cornul posterior al MS. Axonul lui trece în cordonul lateral opus. Acolo formează fasciculul spinotalamic lateral. Acesta, în traiectul său ascendent spre talamus, străbate MS, trunchiul cerebral (bulbul, puntea, mezencefalul).
            </p>
            <p>
              Neuronul III: în talamus. Axonul lui se proiectează pe scoarța cerebrală, în aria somestezică I din lobul parietal (în girul postcentral). Proiecția sensibilității termice și dureroase de la nivelul membrului inferior (picior) se face medial, iar de la nivelul membrului superior (mână) se face lateral la nivelul scoarței cerebrale.
            </p>
            <div className="flex flex-col items-center">
              <Image
                  src="/c4-8.webp"
                  alt="Calea sensibilității termice și dureroase"
                  width={1000}
                  height={100}
                  className="w-1/2 rounded-lg mb-6"
              />
              <p className="text-lg mb-10"><span className="font-semibold">Figura 4.8</span> Calea sensibilității termice și dureroase.</p>
            </div>
            <p><span className="font-semibold">Calea sensibilității tactile grosiere (protopatică)</span></p>
            <p>
              Receptorii: în piele, ei sunt reprezentați de către corpusculii Meissner și discurile tactile Merkel.
            </p>
            <p>
              Neuronul I (protoneuronul): în ganglionul spinal. Dendrita acestuia este lungă, ajunge la receptori, iar axonul pătrunde în MS, pe calea rădăcinii posterioare.
            </p>
            <p>
              Neuronul II (deutoneuronul): în neuronii senzitivi din cornul posterior al MS. Axonul lui trece în cordonul anterior opus. Acolo formează fasciculul spinotalamic anterior (ventral). Acesta, în traiectul său ascendent spre talamus, străbate MS și trunchiul cerebral (bulbul, puntea, mezencefalul).
            </p>
            <p>
              Neuronul III: în talamus. Axonul lui se proiectează în scoarța cerebrală, în aria somestezică I din lobul parietal (în girul postcentral). 
            </p>
            <p><span className="font-semibold">Calea sensibilității tactile fine (epicritice)</span></p>
            <p>Aceasta urmează calea cordoanelor posterioare alături de calea proprioceptivă kinestezică.</p>
            <p><span className="font-semibold">Căile sensibilității proprioceptive</span> (stimulii primiți sunt de la mușchi, tendoane, articulații și totodată oferă informații cu privire la poziția corpului și permit controlul mișcării) includ:</p>
            <ul className="list-disc list-inside space-y-4">
              <li>Calea sensibilității kinestezice</li>
              <li>Calea sensibilității proprioceptive de control al mișcării</li>
            </ul>
            <div className="flex flex-col items-center">
              <Image
                  src="/c4-9.webp"
                  alt="Căile sensibilității proprioceptive"
                  width={1000}
                  height={100}
                  className="w-1/2 rounded-lg mb-6"
              />
              <p className="text-lg mb-10"><span className="font-semibold">Figura 4.9</span> Căile sensibilității proprioceptive.</p>
            </div>
            <p><span className="font-semibold">Calea sensibilității tactile fine (epicritice)</span></p>
            <p>
              Sensibilitatea kinestezică este simțul poziției și al mișcării în spațiu. Aceasta utilizează calea cordoanelor posterioare împreună cu sensibilitatea tactilă epicritică.
            </p>
            <p>
              Receptorii: pentru sensibilitatea epicritică: identici cu cei pentru sensibilitatea tactilă protopatică, dar au un câmp receptor mai redus; pentru sensibilitatea kinestezică: corpusculii neurotendinoși Golgi și corpusculii Ruffini.
            </p>
            <p>
              Neuronul I (protoneuronul): în ganglionul spinal. Dendrita acestuia, lungă, ajunge la receptori. Axonul lung pătrunde în cordonul posterior al MS. La acest nivel formează fasciculul gracilis (Goll) și fasciculul cuneat (Burdach). Acesta din urmă este prezent numai în măduva toracală superioară și în măduva cervicală. Cele două fascicule se mai numesc fascicule spinobulbare. Acestea urcă spre bulbul rahidian.
            </p>
            <p>
              Neuronul II (deutoneuronul): în nucleii gracilis și cuneat din bulb. Nucleul cuneat este situat lateral de nucleul gracilis. Axonul deutoneuronului se încrucișează la nivelul bulbului și formează decusația senzitivă. Apoi devin ascendenți și formează lemniscul medial care urcă spre talamus.
            </p>
            <p>
              Neuronul III: în talamus. Axonul lui se proiectează în scoarța cerebrală, în aria somestezică I din lobul parietal (în girul postcentral). Proiecția fasciculului gracilis (Goll) se face medial, iar cea a fasciculului cuneat (Burdach) se face lateral în scoarță cerebrală.
            </p>
            <p><span className="font-semibold">Calea sensibilității proprioceptive de control al mișcării</span></p>
            <p>
              Această cale se constituie din două tracturi:
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li>Tractul spinocerebelos dorsal (direct)</li>
              <li>Tractul spinocerebelos ventral (încrucișat)</li>
            </ul>
            <p>
              Receptorii: fusurile neuromusculare.
            </p>
            <p>
              Neuronul I (protoneuronul): în ganglionul spinal. Dendrita ajunge la receptori, însă axonul pătrunde în MS prin rădăcina posterioară, în substanța cenușie (în cornul posterior).
            </p>
            <p>
              Neuronul II (deutoneuronul): în neuronii senzitivi din cornul posterior al MS. Axonul deutoneuronului se poate comporta astfel:
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li>Se poate duce <span className="font-semibold">în cordonul lateral de aceeași parte</span> și astfel formează <span className="font-semibold">fasciculul spinocerebelos dorsal (direct) Flechsig</span>.</li>
              <li>Sau se încrucișează și ajunge <span className="font-semibold">în cordonul lateral de partea opusă</span>, formând astfel <span className="font-semibold">fasciculul spinocerebelos ventral (încrucișat) Gowers</span>.</li>
            </ul>
            <p>
              Ambele fascicule urmează un traiect ascendent. Străbat MS, ajung în trunchiul cerebral unde se comportă diferit:
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li><span className="font-semibold">Fasciculul spinocerebelos dorsal (direct)</span> – străbate doar bulbul rahidian. Apoi, ajunge la cerebel pe calea pedunculului cerebelos inferior.</li>
              <li><span className="font-semibold">Fasciculul spinocerebelos ventral (încrucișat)</span> – străbate bulbul rahidian, puntea și mezencefalul și apoi ajunge la cerebel înaintând de-a lungul pedunculului cerebelos superior.</li>
            </ul>
            <p><span className="font-semibold">Căile sensibilității interoceptive</span>(stimulul provine din interiorul organismului)</p>
            <p>
              Viscerele (organele interne) nu răspund la stimuli de natură mecanică, termică, chimică în condiții normale. În plus, influxurile nervoase interoceptive nu devin conștiente, în mod normal. Viscerele pot constitui un punct de plecare al senzației de durere doar în condiții anormale.
            </p>
            <p>
              Receptorii: în pereții vaselor și ai organelor. Aceștia sunt sub formă de terminații libere sau corpusculi lamelați.
            </p>
            <p>
              Neuronul I (protoneuronul): în ganglionul spinal. Dendrita ajunge la receptori, însă axonul pătrunde în MS.
            </p>
            <p>
              Neuronul II (deutoneuronul): în MS. Axonii deutoneuronului contribuie la formarea unui fascicul care din aproape în aproape ajung la talamus.
            </p>
            <p>
              Neuronul III: în talamus. Această cale este multisinaptică, cu o zonă de proiecție corticală difuză.
            </p>
          </div>
        </div>
      </div>
      <div id="caile-descendente-ale-motricitatii" className="space-y-4">
        <h2 className="text-2xl font-bold"> 4.3 Căile descendente ale motricitatii</h2>
        <div className="ml-4 space-y-8 text-base">
          <div className="space-y-8">
            <p>
              Căile descendente ale motricității se împart în:
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li>Calea sistemului piramidal</li>
              <li>Calea sistemului extrapiramidal</li>
            </ul>
            <div className="flex flex-col items-center">
              <Image
                  src="/c4-10.webp"
                  alt="Căile descendente"
                  width={1000}
                  height={100}
                  className="w-1/2 rounded-lg mb-6"
              />
              <p className="text-lg mb-20"><span className="font-semibold">Figura 4.10</span> Căile descendente.</p>
            </div>
            <p><span className="font-semibold">Calea sistemului piramidal</span> își are originea în cortexul cerebral. Aceasta controlează motilitatea voluntară.</p>
            <p>Calea sistemului piramidal are 2 neuroni:</p>
            <ul className="list-disc list-inside space-y-4">
              <li>Un neuron cortical, central, de comandă</li>
              <li>Un neuron inferior, periferic sau de execuție. Acesta poate fi în MS sau în nucleii motori ai nervilor cranieni</li>
            </ul>
            <p><span className="font-semibold">Fasciculul piramidal sau corticospinal</span>, prezintă origini corticale diferite:</p>
            <ul className="list-disc list-inside space-y-4">
              <li>aria motorie</li>
              <li>aria premotorie</li>
              <li>aria motorie suplimentară</li>
              <li>aria motorie secundară, se suprapune ariei senzitive secundare</li>
            </ul>
            <div className="flex flex-col items-center">
              <Image
                  src="/c4-11.webp"
                  alt="Emisferele cerebrale - fața laterală"
                  width={1000}
                  height={100}
                  className="w-1/3 rounded-lg mb-6"
              />
              <p className="text-lg mb-6"><span className="font-semibold">Figura 4.11</span> Emisferele cerebrale - fața laterală.</p>
            </div>
            <p>
              Fasciculul piramidal conține circa 1 milion de fibre nervoase, dintre care aproximativ 700.000 sunt mielinizate (70%). În direcția descendentă a fibrelor fasciculului piramidal, lateral de talamus, acestea străbat toate cele 3 etaje ale trunchiului cerebral. Odată ajunse la nivelul bulbului rahidian, fibrele se comportă în mod diferit:
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li>aproximativ 75% dintre ele se încrucișează la nivelul bulbului (<span className="font-semibold">decusația piramidală</span>). Acestea formează <span className="font-semibold">fasciculul piramidal încrucișat (corticospinal lateral)</span> care ajunge în cordonul lateral al măduvei spinării (MS).</li>
              <li>aproximativ 25% din fibrele fasciculului piramidal NU se încrucișează și formează <span className="font-semibold">fasciculul piramidal direct (corticospinal anterior)</span>. Acesta ajunge în cordonul anterior de aceeași parte, fiind situat lângă fisura mediană. În dreptul fiecărui segment, o parte dintre fibre părăsesc fasciculul, se încrucișează și pătrund în cordonul anterior opus.</li>
            </ul>
            <p>
              La trecerea fasciculului piramidal prin trunchiul cerebral, din fibrele acestuia se desprind fibre corticonucleare. Acestea ajung la nucleii motori ai nervilor cranieni (similari cornului anterior al MS).
            </p>
            <div className="flex flex-col items-center">
              <Image
                  src="/c4-12.webp"
                  alt="Emisferele cerebrale - fața laterală"
                  width={1000}
                  height={100}
                  className="w-1/2 rounded-lg mb-6"
              />
              <p className="text-lg mb-10"><span className="font-semibold">Figura 4.12</span> Căi ascendente (calea sensibilității kinestezice - fasciculul cuneat) și descendente (calea sistemului piramidal).</p>
            </div>
            <p>
              <span className="font-semibold">Calea sistemului extrapiramidal</span> își are originea în etajele corticale (Completare: înseamnă cortexul cerebral, adică scoarța cerebrală) și subcorticale (Completare: trunchiul cerebral, talamus, cerebel, nuclei bazali). Aceasta controlează motilitatea involuntară automată și semiautomată.
            </p>
            <p>
              Căile extrapiramidale corticale ajung la nucleii bazali (corpii striați). Prin eferențele acestora (fibre strionigrice, striorubice, strioreticulate) pătrund în nucleii din mezencefal (nucleul roșu, substanța neagră, formația reticulată). De la acest nivel, prin fasciculele nigrospinale, rubrospinale și reticulospinale, se continuă spre măduva spinării (MS). De la nivelul nucleilor bulbari (olivari și vestibulari), se continuă cu fasciculele olivospinale și vestibulospinale. Fasciculul rubrospinal se încrucișează la nivelul mezencefalului și trece în cordonul lateral al măduvei spinării.
            </p>
            <p>
              Toate aceste fascicule extrapiramidale ajung în cornul anterior al MS, la neuronii motori.
            </p>
            <p>
              Prin căile descendente piramidale și extrapiramidale, centrii encefalici exercită controlul motor voluntar (calea piramidală) și automat (căile extrapiramidale) asupra musculaturii scheletice. Astfel, tonusul muscular și activitatea motorie sunt reglate, menținându-se astfel postura și echilibrul corpului.
            </p>
            <div className="flex flex-col items-center">
              <Image
                  src="/c4-13.webp"
                  alt="Căi descendente piramidale și extrapiramidale"
                  width={1000}
                  height={100}
                  className="w-1/2 rounded-lg mb-6"
              />
              <p className="text-lg mb-10"><span className="font-semibold">Figura 4.13</span> Căi descendente piramidale și extrapiramidale (fasciculul rubrospinal care se încrucișează în mezencefal).</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                  src="/c4-14.webp"
                  alt="Măduva spinării în secțiune transversală"
                  width={1000}
                  height={100}
                  className="w-1/2 rounded-lg mb-6"
              />
              <p className="text-lg mb-10"><span className="font-semibold">Figura 4.14</span> Măduva spinării în secțiune transversală - Completare: cu turcoaz sunt fascicule descendente, cu roșu sunt fascicule ascendente și cu galben sunt fascicule de asociație. Fasciculul tectospinal (fascicul al sistemului extrapiramidal, are originea în lama cvadrigemenă și este dispus pe fața posterioară a mezencefalului; ajunge în cordonul anterior); Fasciculul reticulospinal (fascicul al sistemului extrapiramidal cu originea în formația reticulată de la nivelul trunchiului cerebral; ajunge în cordonul lateral); Fasciculul olivospinal (fascicul al sistemului extrapiramidal, are originea în oliva bulbară; ajunge în cordonul lateral).</p>
            </div>
          </div>
        </div>
      </div>
      <div id="nervii-spinali" className="space-y-4">
        <h2 className="text-2xl font-bold"> 4.4 Nervii spinali</h2>
        <div className="ml-4 space-y-8 text-base">
          <div className="space-y-8">
            <p>
              MS se conectează cu receptorii și efectorii (somatici și vegetativi) pe calea nervilor spinali. Aceștia sunt în număr de <span className="font-semibold">31 de perechi</span>. Distribuirea nervilor în funcție de regiuni este:
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li><span className="font-semibold">regiunea cervicală</span>: 8 perechi de nervi. Primul nerv părăsește MS printre osul occipital și prima vertebră cervicală</li>
              <li><span className="font-semibold">regiunea toracală</span>: 12 perechi de nervi</li>
              <li><span className="font-semibold">regiunea lombară</span>: 5 perechi de nervi</li>
              <li><span className="font-semibold">regiunea sacrală</span>: 5 perechi de nervi</li>
              <li><span className="font-semibold">regiunea coccigiană</span>: o pereche de nervi</li>
            </ul>
            <p>
              Nervii spinali prezintă două rădăcini:
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li><span className="font-semibold">anterioară (ventrală) - motorie</span></li>
              <li><span className="font-semibold">posterioară (dorsală) - senzitivă</span>: pe traiectul ei se află ganglionul spinal</li>
            </ul>
            <p>
              Rădăcina anterioară (ventrală) conține:
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li>axonii neuronilor somatomotori (din cornul anterior al MS)</li>
              <li>axonii neuronilor visceromotori (din jumătatea ventrală a cornului lateral)</li>
            </ul>
            <p>
              Rădăcina posterioară (dorsală) – prezintă pe traiectul ei ganglionului spinal, la nivelul căruia se află:
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li><span className="font-semibold">Neuronii somatosenzitivi</span>: dendrita lor lungă ajunge la receptorii din piele (exteroceptori) sau la receptorii somatici profunzi din aparatul locomotor (proprioceptori). Pe calea rădăcinii posterioare, axonul acestora pătrunde în MS</li>
              <li><span className="font-semibold">Neuronii viscerosenzitivi</span>: dendrita lor lungă ajunge la receptorii din viscere (visceroreceptori). Pe calea rădăcinii posterioare, axonii acestora pătrund în MS până la jumătatea dorsală a cornului lateral al MS (zona viscerosenzitivă)</li>
            </ul>
            <p>
              <span className="font-semibold">Trunchiul nervului spinal</span> se formează prin unirea rădăcinilor anterioară și posterioară. Structura sa este mixtă și conține: fibre somatomotorii, visceromotorii, somatosenzitive și viscerosenzitive. Locul de ieșire al trunchiului la exteriorul canalului vertebral este prin gaura intervertebrală. După un scurt traiect de la ieșire, nervul spinal se separă în ramurile sale:
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li><span className="font-semibold">ventrală</span> – conține: fibre motorii și senzitive. Prin unirea (anastomozarea) tuturor ramurilor ventrale între ele se formează o serie de plexuri: cervical, brahial, lombar, sacral. În segmentul toracal, ramurile ventrale ale nervilor spinali se dispun sub forma nervilor intercostali.</li>
              <li><span className="font-semibold">dorsală</span> – conține: fibre motorii și senzitive. Ajunge la pielea spatelui și la mușchii jgheaburilor vertebrale</li>
              <li><span className="font-semibold">meningială</span> – conține: fibre senzitive și vasomotorii pentru meninge</li>
              <li><span className="font-semibold">comunicanta albă</span> (preganglionară) – prin ea trece fibra preganglionară mielinică, cu originea în neuronul visceromotor din cornul lateral al MS</li>
              <li><span className="font-semibold">comunicanta cenușie</span> (postganglionară) – prin ea trece fibra postganglionară amielinică, fiind axonul neuronului din ganglionul vegetativ simpatic latero-vertebral (paravertebral) și care intră în nervul spinal.</li>
            </ul>
            <div className="flex flex-col items-center">
              <Image
                  src="/c4-15.webp"
                  alt="Trunchiul nervului spinal"
                  width={1000}
                  height={100}
                  className="w-1/2 rounded-lg mb-6"
              />
              <p className="text-lg mb-6"><span className="font-semibold">Figura 4.15</span> Trunchiul nervului spinal.</p>
            </div>
            <p>
              Completare: Fibrele postganglionare din ramura comunicanta cenușie după ce se întorc în trunchiul nervului spinal, ies prin ramurile dorsală, ventrală și meningială.
            </p>
          </div>
        </div>
      </div>
      <div id="functiile-maduvei-spinarii" className="space-y-4">
        <h2 className="text-2xl font-bold"> 4.5 Funcțiile măduvei spinării</h2>
        <div className="ml-4 space-y-8 text-base">
          <div className="space-y-8">
            <p>
              MS prezintă două funcții:
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li>Reflexă</li>
              <li>De conducere</li>
            </ul>
            <p>
              <span className="font-semibold">Funcția de conducere</span> a MS este asigurată de căile de conducere ascendente și descendente, precum și de căi scurte, de asociație.
            </p>
            <p>
              <span className="font-semibold">Funcția reflexă a MS</span> – îndeplinită de către neuronii somatici și vegetativi.
            </p>
            <p>
              Reflexele spinale pot fi: somatice și vegetative.
            </p>
            <p>
              Din <span className="font-semibold">reflexele spinale somatice</span> fac parte:
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li>Reflexă</li>
              <li>De conducere</li>
            </ul>
            <p>
              <span className="font-semibold">Funcția de conducere</span> a MS este asigurată de căile de conducere ascendente și descendente, precum și de căi scurte, de asociație.
            </p>
            <p>
              <span className="font-semibold">Funcția reflexă</span>a MS – îndeplinită de către neuronii somatici și vegetativi.
            </p>
            <p>
              Reflexele spinale pot fi: somatice și vegetative.
            </p>
            <p>
              Din <span>reflexele spinale somatice</span> fac parte:
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li><span>reflexe mioatice</span> – sunt monosinaptice: reflexul ahilian, reflexul rotulian.</li>
              <li><span>reflexele nociceptive</span></li>
              <li><span>reflexul de mers</span></li>
            </ul>
            <div className="flex flex-col items-center">
              <Image
                  src="/c4-16.webp"
                  alt="Reflex monosinaptic"
                  width={1000}
                  height={100}
                  className="w-1/2 rounded-lg mb-6"
              />
              <p className="text-lg mb-6"><span className="font-semibold">Figura 4.16</span> Reflex monosinaptic - reflexul rotulian.</p>
            </div>
            <p>
              <span className="font-semibold">Reflexele miotatice</span>
            </p>
            <p>
              <span className="font-semibold">Reflexele miotatice</span> sunt reflexe de tip <span className="font-semibold">monosinaptic</span>. Acestea intervin în menținerea tonusului muscular și a poziției corpului.     
            </p>
            <p>
              Receptorii: proprioceptorii musculari – fusurile neuromusculare.
            </p>
            <p>
              Calea aferentă: I neuron senzitiv proprioceptiv din ganglionul spinal și prelungirile acestuia. Dendrita lungă merge la periferie și se termină la nivelul receptorului. Axonul, mai scurt, intră în MS prin rădăcinile posterioare și se bifurcă. Una dintre ramificații face sinapsă cu neuronul motor din coarnele anterioare de pe aceeași parte. Aici se închide arcul reflex miotatic. Cealaltă ramificație face sinapsă cu al doilea neuron proprioceptiv din coarnele posterioare, de unde pleacă fasciculele spinocerebeloase.
            </p>
            <p>
              Astfel, centrul reflex miotatic este reprezentat de sinapsa neuron senzitiv – neuron motor. Calea eferentă: axonul, efectorul: fibra musculară striată (Completare: ce a fost întinsă anterior prin întinderea tendonului).
            </p>
            <p>
              Practic, reflexele miotatice constau în contracția bruscă a unui mușchi care conduce la extensie. Această reacție apare ca un răspuns la întinderea tendonului său (care stimulează receptorii - fusurile neuromusculare). Stimulul se aplică la nivelul tendonului muscular cu ajutorul unui ciocan de cauciuc.
            </p>
            <p>
              Aceste reflexe se testează și la nivelul tendonului lui Ahile (reflexul ahilian), precum și la tendonul de inserție a mușchiului cvadriceps pe gambă, mai exact pe tibie (reflexul rotulian). De exemplu, în cazul reflexului rotulian, răspunsul înregistrat constă în extensia gambei pe coapsă.
            </p>
            <p>
              <span className="font-semibold">Reflexele nociceptive</span>
            </p>
            <p>
              <span className="font-semibold">Reflexele nociceptive</span> se manifestă prin retragerea unui membru ca răspuns la aplicarea unui stimul dureros la nivelul acestuia. Sunt considerate reflexe de apărare.    
            </p>
            <p>
              Receptorii: în piele, sunt în special terminații nervoase libere.
            </p>
            <p>
              Căile aferente: prelungirile (dendritele) neuronilor din ganglionul spinal.
            </p>
            <p>
              Centrii nervoși: de tip polisinaptic, formați din neuroni senzitivi de ordinul II, neuroni motori și neuroni de asociație. Reflexele polisinaptice au proprietatea de a iradia la nivelul SNC, în acest fel implicând un număr mai mare de neuroni în elaborarea răspunsului. Cercetătorul Pflűger s-a ocupat cu investigarea legilor care privesc fenomenul de iradiere a reflexelor medulare.
            </p>
            <p>
              Calea eferentă: axonii neuronilor motori.
            </p>
            <p>
              Efectorul: mușchiul flexor care determină retragerea mâinii sau piciorul din fața stimulului dureros (flexarea membrului respectiv).
            </p>
            <div className="flex flex-col items-center">
              <Image
                  src="/c4-17.webp"
                  alt="Reflex monosinaptic"
                  width={1000}
                  height={100}
                  className="w-1/2 rounded-lg mb-6"
              />
              <p className="text-lg mb-6"><span className="font-semibold">Figura 4.17</span> Reflex polisinaptic.</p>
            </div>
            <p>
              <span className="font-semibold">Reflexele spinale vegetative</span> se închid în MS și sunt:
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li>reflexe de reglare a vasomotricității: reflexe vasoconstrictoare și vasodilatatoare</li>
              <li>reflexe sudorale</li>
              <li>reflexe pupilodilatatoare</li>
              <li>reflexe cardioacceleratoare</li>
              <li>reflexul de micțiune</li>
              <li>reflexul de defecație</li>
              <li>reflexe de reglare a vasomotricității: reflexe vasoconstrictoare și vasodilatatoare</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaduvaSpinariiChapter;
