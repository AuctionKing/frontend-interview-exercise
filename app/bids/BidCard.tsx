import {
  Card,
  CardAction,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { BidItem } from "@/src/types";
import { Button } from "@/src/components/ui/button";
import { useBiddingContext } from "@/app/bids/BiddingContext";
import { useUser } from "@/src/hooks/useUser";

export const BidCard = ({ bidItem }: { bidItem: BidItem }) => {
  const { increaseBid } = useBiddingContext();
  const { user } = useUser();

  const handleIncreaseBid = () => {
    increaseBid(bidItem.id, 5, user?.name ?? "unknown user");
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{bidItem.title}</CardTitle>
        <CardAction>
          <Button onClick={handleIncreaseBid}>Bid</Button>
        </CardAction>
      </CardHeader>
      <CardFooter className="justify-between">
        <div>${bidItem.bidValue}</div>
        <div>{bidItem.leader ?? ""}</div>
      </CardFooter>
    </Card>
  );
};
