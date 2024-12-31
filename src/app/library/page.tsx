import Image from "next/image";
import DocumentLink from "./document-link";

type Document = {
  thumbnailURL: string;
  title: string;
  subtitle: string;
};

export default function Library({}) {
  const listItems = [
    {
      title: "placeholder",
      date: "1/1/1111",
      thumbnailURL: "https://placehold.co/600x400",
    },
    {
      title: "placeholder",
      date: "1/1/1111",
      thumbnailURL: "https://placehold.co/600x400",
    },
    {
      title: "placeholder",
      date: "1/1/1111",
      thumbnailURL: "https://placehold.co/600x400",
    },
    {
      title: "placeholder",
      date: "1/1/1111",
      thumbnailURL: "https://placehold.co/600x400",
    },
    {
      title: "placeholder",
      date: "1/1/1111",
      thumbnailURL: "https://placehold.co/600x400",
    },
    {
      title: "placeholder",
      date: "1/1/1111",
      thumbnailURL: "https://placehold.co/600x400",
    },
    {
      title: "placeholder",
      date: "1/1/1111",
      thumbnailURL: "https://placehold.co/600x400",
    },
    {
      title: "placeholder",
      date: "1/1/1111",
      thumbnailURL: "https://placehold.co/600x400",
    },
    {
      title: "placeholder",
      date: "1/1/1111",
      thumbnailURL: "https://placehold.co/600x400",
    },
  ];

  return (
    <div className="w-full h-full flex flex-wrap gap-16 p-8 grid-cols-4">
      {listItems.map((item, index) => (
        <DocumentLink key={index} obj={item}></DocumentLink>
      ))}
    </div>
  );
}
