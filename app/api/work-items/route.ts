import { getWorkItems } from "@/src/api/work-items";
import { NextRequest } from "next/server";
import { z } from "zod";
import {
  priorityList,
  WorkItemFields,
  workItemStatusList,
  workItemTypeList,
} from "@/src/constants";

export const inputSchema = z.object({
  page: z.coerce.number().default(1),
  limit: z.coerce.number().nullish(),
  status: z.literal(workItemStatusList).nullish(),
  type: z.literal(workItemTypeList).nullish(),
  priority: z.literal(priorityList).nullish(),
  sortBy: z.literal(WorkItemFields).nullish(),
});

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const page = searchParams.get("page") || undefined;
  const limit = searchParams.get("limit");
  const status = searchParams.get("status");
  const type = searchParams.get("type");
  const priority = searchParams.get("priority");
  const sortBy = searchParams.get("sortBy");

  const r = inputSchema.safeParse({
    page,
    limit,
    status,
    type,
    priority,
    sortBy,
  });

  if (r.success) {
    console.log(r.data);
    const results = await getWorkItems(r.data);
    return Response.json(results);
  } else {
    console.log(r.error);
    return Response.json(r.error, { status: 400 });
  }
}
