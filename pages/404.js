import Link from "next/link";
import Container from "../components/Container";

export default function NotFound() {
  return (
    <Container>
      <div className="flex flex-col h-screen max-w-2xl mx-auto pt-28">
        <h1 className="mb-4 text-3xl text-5xl font-bold tracking-tight text-black text-white">
          451 – Unavailable For Legal Reasons
        </h1>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          Why show a generic 404 when I can make it sound mysterious? It seems
          you&apos;ve found something that used to exist, or you spelled
          something wrong. I&apos;m guessing you spelled something wrong. Can
          you double check that URL?
        </p>
        <Link href="/">
          <a className="w-64 p-1 mx-auto font-bold text-center text-black text-white bg-gray-200 bg-gray-800 rounded-md sm:p-4">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
