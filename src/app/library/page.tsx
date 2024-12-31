import Image from "next/image";
import DocumentLink from "./document-link";
import { Document } from "../types/document"

export default function Library({ }) {
  const listItems: Document[] = [
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
    <div className="w-full h-full flex flex-wrap gap-8 p-8">
      {listItems.map((item: Document, index: number) => (
        <DocumentLink key={index} doc={item}></DocumentLink>
      ))}
    </div>
  );
}
