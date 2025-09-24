import Header from "@/conponements/header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      <h1 className="text-2xl text-red-600">hei</h1>
      <p className="text-red-600">jeg heter Mikael</p>
      <Link className="text-red-600" href="http://localhost:3000/projekter">
        projekter
      </Link>
      <Link className="text-red-600" href="https://echo.uib.no/hjem">
        echo
      </Link>
      <div className="flex justify-center">
        <img src="/Snapchat-1031077897.png" className="max-w-64" />
      </div>
    </div>
  );
}
