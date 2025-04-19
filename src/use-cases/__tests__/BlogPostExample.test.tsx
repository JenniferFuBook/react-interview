import { render, screen } from '@testing-library/react';
import BlogPostExample from '../BlogPostExample';

describe('BlogPostExample', () => {
  it('renders the blog post title', () => {
    render(<BlogPostExample />);
    const titleElement = screen.getByText(/My Favorite Article/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the blog post content', () => {
    render(<BlogPostExample />);
    const contentElement = screen.getByText(/React is a JavaScript library/i);
    expect(contentElement).toBeInTheDocument();
  });
});
