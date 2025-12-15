import {
  workItemStatusList,
  workItemTypeList,
  priorityList,
} from "@/src/constants";

export type WorkItemType = (typeof workItemTypeList)[number];
export type WorkItemStatus = (typeof workItemStatusList)[number];
export type Priority = (typeof priorityList)[number];

export type WorkItem = {
  id?: string;
  type: WorkItemType;
  status: WorkItemStatus;
  title: string;
  description: string;
  createdAt: string;
  reportedBy: string;
  updatedAt?: string;
  assignedTo?: string;
  priority: Priority;
};

export type Pagination = {
  total_records: number;
  current_page: number;
  total_pages: number;
  next_page: number | null;
  prev_page: number | null;
};

export type WorkItemResponse = {
  data: WorkItem[];
  pagination: Pagination;
};

export type BidItem = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  bidValue: number;
  bidCount: number;
  leader: string;
};

export type BidItemResponse = {
  data: BidItem[];
};

export type User = {
  id: string;
  name: string;
  email: string;
};
