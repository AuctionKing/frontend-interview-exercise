import { WorkItem } from "@/src/types";

export const workItemTypeList = ["task", "ticket"] as const;
export const workItemStatusList = [
  "open",
  "closed",
  "in_progress",
  "on_hold",
] as const;

export const priorityList = ["low", "medium", "high"] as const;

export const WorkItemFields = [
  "id",
  "title",
  "description",
  "priority",
  "status",
  "type",
  "createdAt",
  "updatedAt",
  "assignedTo",
  "reportedBy",
] satisfies (keyof WorkItem)[];
