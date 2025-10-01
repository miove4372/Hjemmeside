import Header from "@/conponements/header";
import { getMovie } from "@/lib/movies";

export default async function Projekter() {
  return (
    <div>
      <div className="flex justify-left p-20">
        <h1>Mine projekter:</h1>
        <ul className="p-10">
          <li>projekt 1</li>
          <li>projekt 2</li>
        </ul>
      </div>
    </div>
  );
}
