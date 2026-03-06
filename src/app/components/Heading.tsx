interface HeadingProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const sizeMap = {
  h1: "text-5xl md:text-6xl",
  h2: "text-4xl md:text-5xl",
  h3: "text-3xl md:text-4xl",
  h4: "text-2xl md:text-3xl",
  h5: "text-xl md:text-2xl",
  h6: "text-lg md:text-xl",
};

export default function Heading({ text, className = "", as: Tag = "h1" }: HeadingProps) {
  return (
    <Tag
      className={`font-bold tracking-wide text-foreground ${sizeMap[Tag]} ${className}`}
    >
      {text}
    </Tag>
  );
}
