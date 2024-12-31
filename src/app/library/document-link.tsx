import Image from "next/image";
import Link from "next/link";

export default function DocumentLink({ obj }: any) {
  return (
    <div className="w-auto h-auto rounded-md hover:bg-red-900 hover:bg-opacity-50 transition-all p-4 border-opacity-0 border hover:border-opacity-100 border-blue-800">
      <div className="bg-white rounded-md w-32 h-32">Hello</div>

      <Link href={"/"}></Link>
      <h3 className="font-semibold">{obj.title}</h3>
      <h3>{obj.date}</h3>
    </div>
  );
}
