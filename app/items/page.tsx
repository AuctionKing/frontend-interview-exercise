import { getWorkItems } from "@/src/api/work-items";
import { PageContainer } from "@/src/components/PageContainer";
import { WorkItemList } from "@/src/components/WorkItemList";
import { WorkItemPagination } from "@/src/components/WorkItemPagination";
import { Select } from "@/src/components/Select";

export default async function ItemsPage() {
  const response = await getWorkItems({
    page: 1,
    // limit: 10,
    // status: "in progress",
    // type: "task",
    // priority: "medium",
    // sortBy: "title",
  });

  return (
    <PageContainer>
      <Select />
      <WorkItemList workItems={response.data} />
      <WorkItemPagination />
    </PageContainer>
  );
}
