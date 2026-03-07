import crypto from "crypto";
import Heading from "./components/Heading";
import Description from "./components/Description";

interface BuddhaQuote {
  text: string;
  byName: string;
}

interface YogaPose {
  id: number;
  english_name: string;
  sanskrit_name_adapted: string;
  sanskrit_name: string;
  translation_name: string;
  pose_description: string;
  pose_benefits: string;
  url_svg: string;
  url_png: string;
  url_svg_alt: string;
}

export const dynamic = "force-dynamic";

export default async function Home() {
  const [quoteRes, posesRes] = await Promise.all([
    fetch("https://buddha-api.com/api/random"),
    fetch("https://yoga-api-nzy4.onrender.com/v1/poses"),
  ]);

  const quote: BuddhaQuote = await quoteRes.json();
  const poses: YogaPose[] = await posesRes.json();
  const randomIndex = crypto.randomInt(poses.length);
  const pose = poses[randomIndex];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12 md:py-24">
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

        <div className="mt-4 w-full rounded-2xl bg-mauve px-8 py-10 shadow-sm">
          <Heading as="h3" text="Daily Yoga Pose" className="mb-6" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={pose.url_svg}
            alt={pose.english_name}
            className="mx-auto mb-6 h-48 w-48"
          />
          <Heading as="h4" text={pose.english_name} className="mb-1" />
          <p className="mb-4 text-sm italic tracking-wide text-foreground">
            {pose.sanskrit_name_adapted} &middot; {pose.translation_name}
          </p>
          <p className="mb-4 text-base leading-relaxed text-foreground">
            {pose.pose_description}
          </p>
          <p className="text-sm leading-relaxed text-foreground opacity-80">
            <strong>Benefits:</strong> {pose.pose_benefits}
          </p>
        </div>
      </main>
    </div>
  );
}
