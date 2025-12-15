import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/src/components/ui/pagination";

export const WorkItemPagination = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="/work-items?page=1" />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="">1</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="">2</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="">3</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext href="/work-items?page=1" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
