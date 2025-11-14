import Header from "@/conponements/header";
import { getMovie } from "@/lib/movies";

export default async function Projekter() {
  return (
    <div>
      <div className="flex justify-left p-20">
        <h1>Mine prosjekter:</h1>
        <ul className="p-10">
          <li>prosjekt 1</li>
          <li>prosjekt 2</li>
        </ul>
      </div>
    </div>
  );
}
