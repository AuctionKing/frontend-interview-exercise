import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="w-full bg-white shadow-md dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              Interview Exercise
            </Link>
            <Link
              href="/items"
              className="text-xl font-bold text-orange-500 dark:text-orange-400"
            >
              Work Items
            </Link>
            <Link
              href="/bids"
              className="text-xl font-bold text-orange-500 dark:text-orange-400"
            >
              Bids
            </Link>

            <Link
              href="/hydration"
              className="text-xl font-bold text-orange-500 dark:text-orange-400"
            >
              Hydration Issue
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
