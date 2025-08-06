interface QuoteBlockProps {
  quote: string;
  author?: string;
  className?: string;
}

const QuoteBlock = ({ quote, author, className = "" }: QuoteBlockProps) => {
  return (
    <div className={`relative my-8 ${className}`}>
      <div className="bg-gradient-accent p-6 rounded-lg border border-primary/30 shadow-green-glow">
        <blockquote className="text-lg md:text-xl font-medium text-shelby-black italic leading-relaxed">
          "{quote}"
        </blockquote>
        {author && (
          <cite className="block mt-3 text-shelby-black/80 font-semibold not-italic">
            — {author}
          </cite>
        )}
      </div>
    </div>
  );
};

export default QuoteBlock;