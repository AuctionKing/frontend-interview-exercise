import { WorkItem } from "@/src/types";
import { WorkItemCard } from "@/src/components/WorkItemCard";

export async function WorkItemList({ workItems }: { workItems: WorkItem[] }) {
  return (
    <>
      <h2>Work Items</h2>
      {workItems?.map((item) => (
        <WorkItemCard item={item} key={item.id} />
      ))}
    </>
  );
}
