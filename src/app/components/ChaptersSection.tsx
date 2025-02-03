"use client"

import Card from './Card'

export default function ChaptersSection() {
  const cards = [
    {
      id: 1,
      imageSrc: '/cell.webp',
      altText: 'Celula si Organitele Celulare',
      title: 'Celula si Organitele Celulare',
      description: 'Celula reprezintă unitatea morfo-funcțională și genetică a organizării materiei vii. Ca formă de existență, aceasta poate funcționa individual sau în grup.',
      linkUrl: '/details/1',
    },
    {
      id: 2,
      imageSrc: '/plamani.webp',
      altText: 'Respiratia',
      title: 'Respiratia',
      description: 'Respirația este un proces fiziologic fundamental prin care organismele realizează un schimb de oxigen și dioxid de carbon cu mediul înconjurător. ',
      linkUrl: '/details/1',
    },
    {
      id: 3,
      imageSrc: '/tesut.webp',
      altText: 'Tesuturile',
      title: 'Tesuturile',
      description: 'Țesuturile reprezintă sisteme organizate de materie vie alcătuite din celule similare. În organisme, acestea îndeplinesc aceeași funcție sau același grup de funcții.',
      linkUrl: '/details/1',
    },
    {
      id: 4,
      imageSrc: '/maduva-spinarii.webp',
      altText: 'Maduva Spinarii',
      title: 'Maduva Spinarii',
      description: 'Măduva spinării face parte din sistemul nervos central, fiind protejată de canalul vertebral, legat de gât, trunchi și extremitățile corpului prin intermediul nervilor spinali.',
      linkUrl: '/details/1',
    },
    {
      id: 5,
      imageSrc: '/sistemul-osos.webp',
      altText: 'Sistemul Osos',
      title: 'Sistemul Osos',
      description: 'Sistemul osos uman este un sistem complex, ce indeplineste multe functii importante, de la a permite mobilitatea corpului pana la a asigura protectia organelor interne.',
      linkUrl: '/details/1',
    },
    {
      id: 6,
      imageSrc: '/sistemul-muscular.webp',
      altText: 'Sistemul Muscular',
      title: 'Sistemul Muscular',
      description: 'Sistemul muscular reprezintă totalitatea mușchilor, cu ajutorul cărora se realizează locomoția și alte funcții vitale, formând împreună cu oasele de care sunt atașate, aparatul locomotor.',
      linkUrl: '/details/1',
    },
  ];

  return (
  <section id="chaptersSection" className="relative w-full h-screen-min py-28 bg-gray-900">
    <div className="container mx-auto px-20 flex flex-col items-center">
      <div className="flex flex-col text-center text-white items-center mb-16 w-3/4">
        <h1 className="text-5xl font-bold my-8">
          Exploreaza in Detaliu Biologia Umana
        </h1>
        <p className="text-2xl font-light text-gray-300">
          Corpul uman este o mașinărie complexă și fascinantă, 
          alcătuită din sisteme interconectate 
          care lucrează împreună pentru a susține viața. 
          În această secțiune, vei explora în detaliu structura și
         funcțiile organismului, de la celule microscopice până la 
         organe esențiale și mecanismele care ne permit să gândim,
          să ne mișcăm și să supraviețuim. Descoperă secretele ADN-ului, 
          funcționarea inimii, complexitatea creierului și multe altele!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  </section>
  );
}