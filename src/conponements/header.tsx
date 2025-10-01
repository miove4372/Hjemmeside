import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between bg-black-400 p-8 border-b-20">
      <Link href="/">Hjem</Link>
      <Link href="/apiLek">BATMAN🦇</Link>
      <Link href="/projekter">Projektermappe</Link>
    </div>
  );
}
