interface BlogPost {
  id: number;
  title: string;
  headline: string;
  body: string;
  date: string;
}

declare const blogPostsData: BlogPost[];
export default blogPostsData;