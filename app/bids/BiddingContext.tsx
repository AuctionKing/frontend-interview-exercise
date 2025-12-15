import { createContext, use } from "react";
import { BidItem } from "@/src/types";

export type BiddingContextValue = {
  bids: BidItem[];
  loading: boolean;
  error?: Error;
  increaseBid: (id: string, amount: number, user: string) => void;
};

export const BiddingContext = createContext<BiddingContextValue | undefined>(
  undefined,
);

export const useBiddingContext = () => {
  const contextValue = use(BiddingContext);
  if (!contextValue) {
    throw new Error("useBiddingContext must be used within a BiddingProvider");
  }
  return contextValue;
};
