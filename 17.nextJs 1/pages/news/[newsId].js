import React from "react";
import { useRouter } from "next/router";
// our - domain.com / news;
function DetailPage() {
  const router = useRouter();
  const newsId = router.query.newsId;
  return <h1>The {newsId} Page</h1>;
}
export default DetailPage;
