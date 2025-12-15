"use client";

import { PageContainer } from "@/src/components/PageContainer";
import { BiddingProvider } from "@/app/bids/BiddingPrivider";
import { BidItemLayout } from "@/app/bids/BidItemLayout";
import { WelcomeUserMessage } from "@/src/components/WelcomeUserMessage";

export default function BidsPage() {
  return (
    <PageContainer>
      <BiddingProvider>
        <WelcomeUserMessage />
        <BidItemLayout />
      </BiddingProvider>
    </PageContainer>
  );
}
