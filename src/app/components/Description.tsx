interface DescriptionProps {
  text: string;
}

export default function Description({ text }: DescriptionProps) {
  return (
    <p className="text-lg leading-relaxed tracking-wide text-foreground md:text-xl">
      {text}
    </p>
  );
}
