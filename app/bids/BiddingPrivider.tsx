import { BiddingContext, BiddingContextValue } from "@/app/bids/BiddingContext";
import { PropsWithChildren, useEffect, useState } from "react";
import { BidItem } from "@/src/types";
import { getBidItems, putIncreaseBid } from "@/src/api/bid-items";

const POLLING_INTERVAL = 5_000;

export const BiddingProvider = ({ children }: PropsWithChildren) => {
  const [bids, setBids] = useState<BidItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const fetchBids = async () => {
    setLoading(true);
    try {
      const response = await getBidItems();
      const { data } = response;
      setBids(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBids();
  }, []);

  const increaseBid = async (id: string, amount: number, user: string) => {
    const { success } = await putIncreaseBid(id, amount, user);
    if (success) fetchBids();
  };

  const contextValue: BiddingContextValue = {
    bids,
    loading,
    error,
    increaseBid,
  };

  return <BiddingContext value={contextValue}>{children}</BiddingContext>;
};
