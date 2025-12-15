import { useBiddingContext } from "@/app/bids/BiddingContext";
import { Spinner } from "@/src/components/ui/spinner";
import { BidCard } from "@/app/bids/BidCard";

export const BidItemLayout = () => {
  const { bids, loading } = useBiddingContext();

  if (loading) return <Spinner className="size-10" />;

  return (
    <div className="w-full grid grid-cols-2 gap-4">
      {bids.map((bid) => (
        <BidCard bidItem={bid} key={bid.id} />
      ))}
    </div>
  );
};
