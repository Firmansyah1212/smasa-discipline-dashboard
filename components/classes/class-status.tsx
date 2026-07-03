import { Badge } from "@/components/ui/badge";

interface Props {
  points: number;
}

export default function ClassStatus({ points }: Props) {
  if (points >= 95) {
    return (
      <Badge className="bg-green-600 hover:bg-green-700">
        Sangat Baik
      </Badge>
    );
  }

  if (points >= 80) {
    return (
      <Badge className="bg-yellow-500 hover:bg-yellow-600">
        Baik
      </Badge>
    );
  }

  return (
    <Badge variant="destructive">
      Perlu Pembinaan
    </Badge>
  );
}