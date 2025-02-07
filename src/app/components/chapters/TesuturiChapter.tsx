import Image from "next/image";

const TesuturiChapter = () => {
  return (
    <section className="flex flex-col space-y-8 font-light">
      <h1 className="text-3xl font-bold">3. Tesuturile</h1>
      <div className="ml-4 space-y-4 text-xl">
        <p>
          Țesuturile reprezintă sisteme organizate de materie vie alcătuite din celule similare. În organisme, acestea îndeplinesc aceeași funcție sau același grup de funcții. Celulele care intră în alcătuirea țesuturilor sunt unite de o substanță intercelulară care poartă denumiri diferite din punct de vedere cantitativ. De exemplu, atunci când se găsește în cantitate mică – „substanță de ciment” și în cantitate mare – „substanță fundamentală”. 
        </p>
        <p>
          Țesuturile se clasifică în:
        </p>
			</div>
      <div id="tesut-epitelial" className="space-y-8 ml-4">
        <h2 className="text-2xl"><span className="font-semibold">3.1 Tesut Epitelial</span>, care la randul lui poate fi:</h2>
        <ul className="list-disc list-inside space-y-4">
          <li className="font-semibold text-xl">Epiteliu de acoperire simplu (unistratificat)</li>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left font-bold">Pavimentos</th>
                  <th className="border px-4 py-2 text-left font-bold">Cubic</th>
                  <th className="border px-4 py-2 text-left font-bold">Cilindric ciliat și neciliat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">se întâlnește la nivelul tunicii interne a vaselor sangvine și limfatice</td>
                  <td className="border px-4 py-2">intră în alcătuirea mucoasei bronhiolelor</td>
                  <td className="border px-4 py-2">la nivelul mucoasei tubului digestiv</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-center">
            <Image
                src="/c3-1.webp"
                alt="Epiteliu de acoperire simplu: a. pavimentos, b. cubic, c. cilindric ciliat."
                width={1000}
                height={100}
                className="w-3/4 rounded-lg mb-6"
            />
            <p className="text-lg mb-10"><span className="font-semibold">Figura 1.1</span> Epiteliu de acoperire simplu: a. pavimentos, b. cubic, c. cilindric ciliat.</p>
          </div>
          <li className="font-semibold text-xl">Epiteliu de acoperire pseudostratificat</li>
          <p className="text-xl">
            <span className="font-semibold">Cilindric ciliat și neciliat</span>: la nivelul epiteliului traheal.
          </p>
          <div className="flex flex-col items-center">
            <Image
                src="/c3-2.webp"
                alt="Epiteliu de acoperire pseudostratificat de tip cilindric ciliat."
                width={1000}
                height={100}
                className="w-1/3 rounded-lg mb-6"
            />
            <p className="text-lg mb-10"><span className="font-semibold">Figura 3.2</span> Epiteliu de acoperire pseudostratificat de tip cilindric ciliat.</p>
          </div>
          <li className="font-semibold text-xl">Epiteliu de acoperire pluristratificat </li>
          <div className="overflow-x-auto p-4">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left font-bold">Pavimentos keratinizat și nekeratinizat</th>
                  <th className="border px-4 py-2 text-left font-bold">Cubic</th>
                  <th className="border px-4 py-2 text-left font-bold">Cilindric</th>
                  <th className="border px-4 py-2 text-left font-bold">De tranziție</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">
                    <span className="font-bold">keratinizat</span>: epiderma;
                    <span className="font-bold"> nekeratinizat</span>: epiteliul mucoasei bucale
                  </td>
                  <td className="border px-4 py-2">la nivelul canalelor glandelor exocrine</td>
                  <td className="border px-4 py-2">la nivelul canalelor glandelor exocrine</td>
                  <td className="border px-4 py-2">uroteliul</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-center">
            <Image
                src="/c3-3.webp"
                alt="Epiteliu de acoperire pluristratificat: a. pavimentos, b. cubic, c. cilindric, d. de tranziție."
                width={1000}
                height={100}
                className="w-full rounded-lg mb-6"
            />
            <p className="text-lg mb-10"><span className="font-semibold">Figura 3.3</span> Epiteliu de acoperire pluristratificat: a. pavimentos, b. cubic, c. cilindric, d. de tranziție.</p>
          </div>
          <li className="font-semibold text-xl">Epiteliu glandular (secretor)</li>
          <div className="overflow-x-auto p-4">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left font-bold">De tip endocrin</th>
                  <th className="border px-4 py-2 text-left font-bold">De tip exocrin (pluricelular)</th>
                  <th className="border px-4 py-2 text-left font-bold">De tip mixt</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">
                    <span className="font-bold">de tip în cordoane celulare</span>: la nivelul adenohipofizei, glandelor paratiroide
                  </td>
                  <td className="border px-4 py-2">
                    <span className="font-bold">simplu</span>: tubular, acinos
                  </td>
                  <td className="border px-4 py-2" rowSpan={2}>în pancreas, testicul, ovar</td> {/* Fixed rowSpan */}
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    <span className="font-bold">de tip folicular</span>: la nivelul tiroidei
                  </td>
                  <td className="border px-4 py-2">
                    <span className="font-bold">compus</span>: tubulo-acinos
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-center">
            <Image
                src="/c3-4.webp"
                alt="Epiteliu glandular (secretor) de tip exocrin: simplu acinos (a), simplu tubular (b), compus tubulo-acinos (c)."
                width={1000}
                height={100}
                className="w-full rounded-lg mb-6"
            />
            <p className="text-lg mb-10"><span className="font-semibold">Figura 3.4</span> Epiteliu glandular (secretor) de tip exocrin: simplu acinos (a), simplu tubular (b), compus tubulo-acinos (c).</p>
          </div>
          <li className="text-xl"><span className="font-semibold">Epiteliu senzorial</span>: intră în structura organelor de simț</li>
        </ul>
      </div>
      <div id="tesut-conjunctiv" className="space-y-8 ml-4">
        <h2 className="text-2xl"><span className="font-semibold">3.2 Tesut Conjunctiv</span>, care se clasifica in:</h2>
        <ul className="list-disc list-inside space-y-4">
          <li className="text-xl"><span className="font-semibold">Conjunctiv moale</span>, care poate fi:</li>
          <div className="overflow-x-auto p-4">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left font-bold">Lax</th>
                  <th className="border px-4 py-2 text-left font-bold">Reticulat</th>
                  <th className="border px-4 py-2 text-left font-bold">Adipos</th>
                  <th className="border px-4 py-2 text-left font-bold">Fibros</th>
                  <th className="border px-4 py-2 text-left font-bold">Elastic</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">leagă unele organe, însoțește alte țesuturi</td>
                  <td className="border px-4 py-2">în ganglioni limfatici, splină</td>
                  <td className="border px-4 py-2">dispus în jurul unor organe (rinichi, ochi) și subcutanat (hipoderm)</td>
                  <td className="border px-4 py-2">în tendoane, ligamente, aponevroze</td>
                  <td className="border px-4 py-2">în tunica medie a arterelor și venelor</td>
                </tr>
              </tbody>
            </table>
          </div>
          <li className="text-xl"><span className="font-semibold">Conjunctiv semidur cartilaginos</span>, care poate fi:</li>
          <div className="overflow-x-auto p-4">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left font-bold">Hialin</th>
                  <th className="border px-4 py-2 text-left font-bold">Elastic</th>
                  <th className="border px-4 py-2 text-left font-bold">Fibros</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">în cartilaje costale, laringiale, traheale</td>
                  <td className="border px-4 py-2">în pavilionul urechii, epiglotă</td>
                  <td className="border px-4 py-2">discurile intervertebrale și meniscurile articulare</td>
                </tr>
              </tbody>
            </table>
          </div>
          <li className="text-xl"><span className="font-semibold">Conjunctiv dur osos</span>, care poate fi:</li>
          <div className="overflow-x-auto p-4">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left font-bold">Haversian (compact)</th>
                  <th className="border px-4 py-2 text-left font-bold">Spongios (trabecular)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">în diafizele oaselor lungi</td>
                  <td className="border px-4 py-2">în epifizele oaselor lungi și în interiorul celor scurte și late</td>
                </tr>
              </tbody>
            </table>
          </div>
          <li className="text-xl"><span className="font-semibold">Fluid</span>: sangele</li>
        </ul>
        <div id="tesut-muscular" className="space-y-8 ml-4">
          <h2 className="text-2xl"><span className="font-semibold">3.3 Țesut muscular</span></h2>
          <ul className="list-disc list-inside space-y-4">
            <li className="text-xl"><span className="font-semibold">Striat</span>: în mușchii scheletici (somatici)</li>
            <li className="text-xl"><span className="font-semibold">Striat de tip cardiac</span>: miocardul</li>
            <li className="text-xl"><span className="font-semibold">Neted</span>: visceral și multiunitar (în iris)</li>
          </ul>
        </div>
        <div id="tesut-nervos" className="space-y-8 ml-4">
          <h2 className="text-2xl"><span className="font-semibold">3.4 Țesut nervos</span></h2>
          <ul className="list-disc list-inside space-y-4">
            <li className="text-xl"><span className="font-semibold">Neuron</span> - celula nervoasă</li>
            <li className="text-xl"><span className="font-semibold">Nevroglia</span> - celula glială  </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TesuturiChapter;
