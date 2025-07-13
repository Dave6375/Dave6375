import { Card, CardContent } from './ui/card';
import { cn } from '../lib/utils';

export type Result = {
  title: string;
  author: string;
  genre?: string;
  confidence: number;
};

interface ResultsProps {
  results: Result[];
}

export function Results({ results }: ResultsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {results.map((result, index) => (
        <Card key={index} className="border-[#d4b59c] bg-white">
          <CardContent className="p-4">
            <h3 className="font-semibold text-[#5c4030] mb-2">{result.title}</h3>
            <p className="text-sm text-[#8b7262] mb-1">by {result.author}</p>
            {result.genre && (
              <p className="text-xs text-[#8b7262] mb-2">Genre: {result.genre}</p>
            )}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#5c4030]">Confidence:</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#8b5e3c] h-2 rounded-full"
                  style={{ width: `${result.confidence * 100}%` }}
                />
              </div>
              <span className="text-xs text-[#5c4030]">
                {Math.round(result.confidence * 100)}%
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// Export as BookResults for compatibility
export { Results as BookResults };