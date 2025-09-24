import Header from "@/conponements/header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
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
      <div>
        <h1>Socials</h1>
        <ul className="text-black">
          <li>
            <Link href="https://www.facebook.com/profile.php?id=100006384786377">
              Facebook
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/_mikaeloverland/">
              Instagram
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
