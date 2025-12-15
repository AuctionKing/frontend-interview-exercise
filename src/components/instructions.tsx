import Link from "next/link";

export const Instructions = () => {
  return (
    <article className="prose dark:prose-invert lg:prose-lg">
      <h2>Welcome</h2>

      <section>
        <p>
          This is a pair programming exercise. You will be the driver, and I
          will be the navigator.
        </p>
        <p>
          This is a <strong>NextJS app (v16.x)</strong> that styled with{" "}
          <strong>Tailwindcss</strong> and uses <strong>shadcn/ui</strong>{" "}
          components. There are a set of mocked API endpoints, that each have a
          helper function configured for use.
        </p>
        <ul>
          <li>
            work-items:{" "}
            <a target="_blank" href="/api/work-items?page=1">
              /api/work-items?page=1
            </a>
          </li>
          <li>
            bid-items:{" "}
            <a target="_blank" href="/api/bid-items">
              /api/bid-items
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h3>Work Items Exercise</h3>
        <p>
          On the <Link href="/items">Work Items</Link> page
        </p>
        <ol>
          <li>Implement pagination for the list.</li>
          <li>
            Add a filter by <strong>status</strong>.
          </li>
          <li>
            Add a filter by <strong>priority</strong>.
          </li>
          <li>
            Add a filter by <strong>type</strong>.
          </li>
          <li>
            Add <strong>sort by</strong> any of the attributes of a work item.
          </li>
        </ol>
      </section>

      <section>
        <h3>Bids Exercise</h3>
        <p>
          On the <Link href="/bids">Bids</Link> page
        </p>
        <p>
          This page is meant to simulate a live auction environment where bids
          are constantly being placed on items. Your task is to implement a
          feature that allows users to increase their bid on one or more items.
        </p>
        <p>
          Your QA partners have complained that the UX of this page is horrible.
          Your job is to improve it.
        </p>
      </section>
      <section>
        <h3>Hydration Exercise</h3>
        <p>
          On the <Link href="/hydration">Hydration</Link> page fix all the
          hydration issues.
        </p>
      </section>
    </article>
  );
};
