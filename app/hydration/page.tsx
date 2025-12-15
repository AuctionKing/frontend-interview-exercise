import { PageContainer } from "@/src/components/PageContainer";
import { LastUpdated } from "@/src/components/LastUpdated";
import { ActionCard } from "@/src/components/ActionCard";

export default function HydrationPage() {
  return (
    <PageContainer>
      <h2>Fix Hydration Issues</h2>
      <ActionCard />

      <LastUpdated />
    </PageContainer>
  );
}
