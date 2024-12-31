import Link from "next/link";
import { Document } from "../types/document"

type DocLinkProps = {
  doc: Document;
}

export default function DocumentLink({ doc }: DocLinkProps) {
  return (
    <div className="w-auto h-auto rounded-md hover:bg-red-900 hover:bg-opacity-50 transition-all p-4 border-opacity-0 border hover:border-opacity-100 border-blue-800">
      <Link href={"/edit"}>
        <div className="bg-white rounded-md w-32 h-32"></div>
        <h3 className="font-semibold">{doc.title}</h3>
        <h3>{doc.date}</h3>
      </Link>
    </div>
  );
}
