interface HeadingProps {
  text: string;
  className?: string;
}

export default function Heading({ text, className = "" }: HeadingProps) {
  return (
    <h1
      className={`text-5xl font-bold tracking-wide text-foreground md:text-6xl ${className}`}
    >
      {text}
    </h1>
  );
}
