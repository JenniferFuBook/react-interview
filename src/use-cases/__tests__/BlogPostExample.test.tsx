import { render, screen } from '@testing-library/react';
import BlogPostExample from '../BlogPostExample';

describe('BlogPostExample', () => {
  it("matches snapshot", () => { // This is a snapshot test
    const { container } = render(<BlogPostExample />);
    expect(container).toMatchSnapshot();
  });

  it('renders the blog post title', () => {
    // This test checks if the title of the blog post is rendered correctly
    render(<BlogPostExample />);
    const titleElement = screen.getByText(/My Favorite Article/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the blog post content', () => { 
    // This test checks if the content of the blog post is rendered correctly
    render(<BlogPostExample />);
    const contentElement = screen.getByText(/React is a JavaScript library/i);
    expect(contentElement).toBeInTheDocument();
  });
});
