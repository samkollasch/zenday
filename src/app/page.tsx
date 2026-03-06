import Heading from "./components/Heading";
import Description from "./components/Description";

interface BuddhaQuote {
  text: string;
  byName: string;
}

export const dynamic = "force-dynamic";

export default async function Home() {
  const res = await fetch("https://buddha-api.com/api/random");
  const quote: BuddhaQuote = await res.json();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <main className="flex max-w-2xl flex-col items-center gap-10 text-center">
        <Heading text="Zenday" as="h1" />
        <Description text="Take a breath. Let today be gentle. Here is a thought to carry with you." />

        <div className="mt-4 w-full rounded-2xl bg-slate px-8 py-10 shadow-sm">
          <blockquote className="text-2xl font-light italic leading-relaxed text-foreground md:text-3xl">
            <Heading
              as="h2"
              text={`\u201C${quote.text}\u201D`}
              className="font-light"
            ></Heading>
          </blockquote>
          <p className="mt-6 text-sm tracking-widest text-foreground uppercase">
            &mdash; {quote.byName}
          </p>
        </div>
      </main>
    </div>
  );
}
