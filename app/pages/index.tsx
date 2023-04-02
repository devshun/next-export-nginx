import Link from "next/link";

export default function Home() {
  return (
    <div>
     <h1>Im root Page</h1>
     <Link href="/example-page">example-page</Link>
    </div>
  )
}
