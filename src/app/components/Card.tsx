import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  linkUrl?: string;
}

const toSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/ă/g, "a")
    .replace(/î/g, "i")
    .replace(/ș/g, "s")
    .replace(/ț/g, "t")
    .replace(/,/g, "")
    .replace(/[^a-z0-9-]/g, "");

const Card: React.FC<CardProps> = ({ imageSrc, altText, title, description, linkUrl }) => {
  const slugifiedTitle = toSlug(title);

  return (
    <div className="flex justify-center">
      <div className="max-w-sm bg-gray-800 border border-gray-600 rounded-xl shadow-2xl">
        <Image
          className="rounded-t-xl"
          src={imageSrc}
          alt={altText}
          width={400}
          height={300}
          layout="responsive"
          objectFit="cover"
        />
        <div className="p-4 rounded-xl flex flex-col justify-between h-64">
          <div>
            <p className="mb-2 text-2xl font-bold tracking-tight text-white">{title}</p>
            <h5 className="mb-3 font-medium text-gray-400">{description}</h5>
          </div>
          {linkUrl && (
            <Link
              href={`/biologie-corint/${slugifiedTitle}`}
              className="mt-auto items-center py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 w-1/3"
            >
              <div className="flex flex-row justify-center items-center">
                <p className="mr-1">Read more</p>
                <Image src="/right-arrow.svg" alt="Right Arrow" width={16} height={16} />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
