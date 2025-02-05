export type PostProps = {
  title: string;
  subtitle: string;
  author: string;
  publisher: string;
  keywords: string[];
  sections: {
    title: string;
    subsections: {
      title: string;
      content: string;
    }[];
  }[];
};
