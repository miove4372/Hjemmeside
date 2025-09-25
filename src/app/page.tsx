import Header from "@/conponements/header";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="max-h-screen">
      <Button>🌓</Button>
      <div className="flex justify-center">
        <div className="p-8">
          <img
            src="syden.jpeg"
            alt=""
            className="rounded-full max-h-100 max-w-60"
          />
        </div>
        <div className="max-w-100 p-8">
          <h1>Dette er meg 😎</h1>
          <p>
            Jeg heter Mikael og er 22 år fra Trondheim. Jeg er førsteårsstudent
            på Informatikk: Datateknologi ved UIB.
          </p>
          <ul>
            <li>
              <Link
                href="https://www.facebook.com/profile.php?id=100006384786377"
                className="text-blue-600 visited:text-purple-600 hover:text-blue-600"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/_mikaeloverland/"
                className="text-blue-600 visited:text-purple-600 hover:text-blue-600"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
