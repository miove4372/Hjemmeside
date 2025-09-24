import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between bg-blue-400 p-8 border-b-20 border-b-green-400">
      <h1>hei fra conmonements</h1>
      <Link href="/projekter">projektermappe</Link>
      <Link href="/">hjem</Link>
    </div>
  );
}
