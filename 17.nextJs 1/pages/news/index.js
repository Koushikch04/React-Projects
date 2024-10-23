import React, { Fragment } from "react";
import Link from "next/link";

// our - domain.com / news;
function NewsPage() {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            Next js Is A Great Framework
          </Link>
        </li>
        <li>Something Else </li>
      </ul>
    </Fragment>
  );
}
export default NewsPage;
