import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

const canIUseTopics = ["webp", "container-queries-style"];

export const ActionCard = () => {
  return (
    <a
      href="https://caniuse.com"
      target="_blank"
      rel="noreferrer"
      className="w-full"
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Caniuse</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {canIUseTopics.map((topic) => (
            <a
              key={topic}
              href={`https://caniuse.com/${topic}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              {topic}
            </a>
          ))}
        </CardContent>
      </Card>
    </a>
  );
};
