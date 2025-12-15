/****************************************************
 *
 * DO NOT CHANGE THIS FILE
 *
 * This is meant to be an API serve that is not under your
 * teams control.
 *
 * **************************************************/

import {
  Priority,
  WorkItem,
  WorkItemResponse,
  WorkItemStatus,
  WorkItemType,
} from "@/src/types";
import { faker } from "@faker-js/faker";
import { sleep } from "../utils/sleep";
import { inputSchema } from "@/app/api/work-items/route";
import { z } from "zod";
import {
  priorityList,
  workItemStatusList,
  workItemTypeList,
} from "@/src/constants";

const COUNT = 500;
const LATENCY = 750;

function createRandomWorkItem(): WorkItem {
  return {
    id: faker.string.uuid(),
    title: faker.company.buzzNoun(),
    description: faker.lorem.sentence(),
    type: faker.helpers.arrayElement<WorkItemType>(workItemTypeList),
    status: faker.helpers.arrayElement<WorkItemStatus>(workItemStatusList),
    createdAt: faker.date.past().toISOString(),
    reportedBy: faker.internet.username(),
    assignedTo: faker.internet.username(),
    priority: faker.helpers.arrayElement<Priority>(priorityList),
  };
}

const workItems = faker.helpers.multiple(createRandomWorkItem, {
  count: COUNT,
});

type GetWorkItemsParams = z.infer<typeof inputSchema>;

export const getWorkItems = async ({
  page,
  limit,
  status,
  type,
  priority,
  sortBy,
}: GetWorkItemsParams): Promise<WorkItemResponse> => {
  await sleep(LATENCY);

  const priorityFiltered = priority
    ? workItems.filter((item) => item.priority === priority)
    : workItems;

  const statusFiltered = status
    ? priorityFiltered.filter((item) => item.status === status)
    : priorityFiltered;

  const typeFiltered = type
    ? statusFiltered.filter((item) => item.type === type)
    : statusFiltered;

  const sorted = sortBy
    ? typeFiltered.sort((a, b) => {
        if (a[sortBy] && b[sortBy]) {
          if (a[sortBy] < b[sortBy]) return -1;
          if (a[sortBy] > b[sortBy]) return 1;
          return 0;
        }
        return 0;
      })
    : typeFiltered;

  const actualLimit = limit ?? sorted.length;
  const recordCount = sorted.length;
  const totalPages = Math.ceil(recordCount / actualLimit);
  const nextPage = page < totalPages ? page + 1 : null;
  const prevPage = page > 1 ? page - 1 : null;

  const data = sorted.slice((page - 1) * actualLimit, page * actualLimit);

  return {
    data: data,
    pagination: {
      total_records: recordCount,
      current_page: page,
      total_pages: totalPages,
      next_page: nextPage,
      prev_page: prevPage,
    },
  };
};
