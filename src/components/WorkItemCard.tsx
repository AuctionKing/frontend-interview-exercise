import { WorkItem } from "@/src/types";

export function WorkItemCard({ item }: { item: WorkItem }) {
  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
        {item.title}
      </h3>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {item.description}
      </p>
      <div className="mt-6 flex items-center justify-between gap-6">
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
          Status: {item.status}
        </span>
        <span className="text-sm font-medium text-green-600 dark:text-green-400">
          Priority: {item.priority}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Created Date: {new Date(item.createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}
