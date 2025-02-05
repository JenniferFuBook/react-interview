import { PostProps } from '../components/blog-post/types';
import { CommentProps } from '../components/post-comments/types';

export const samplePost: PostProps = {
  title: 'My Favorite Article',
  subtitle: 'A demonstration of semantic HTML elements',
  author: 'John Wayne',
  publisher: 'ManningBooks',
  keywords: ['React', 'TypeScript', 'Component'],
  sections: [
    {
      title: 'Introduction',
      subsections: [
        {
          title: 'What is React?',
          content:
            'React is a JavaScript library for building user interfaces. React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.',
        },
        {
          title: 'Why use React?',
          content:
            'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.',
        },
      ],
    },
  ],
};

export const sampleComments: CommentProps[] = [
  {
    username: 'CodeCrafter',
    comment: 'The article provides a concise and beginner-friendly explanation of what React is and why it is beneficial. It covers the key concepts of components and declarative views, making it a great starting point for those new to React.',
  },
  {
    username: 'SemanticWizard',
    comment: 'It is a great demo!',
  }
];