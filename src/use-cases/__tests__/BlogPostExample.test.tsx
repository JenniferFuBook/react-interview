import { render, screen } from '@testing-library/react';
import BlogPostExample from '../BlogPostExample';

describe('BlogPostExample', () => {
  it('matches snapshot', () => { // This is a snapshot test
    const { container } = render(<BlogPostExample />);
    expect(container).toMatchSnapshot();
  });

  it('renders the blog post title', () => {
    // This test checks if the title of the blog post is rendered correctly
    render(<BlogPostExample />);

    // Enable the following lines to debug the rendered output
    // // Debug the entire document
    // screen.debug();

    // // Debug a single element
    // screen.debug(screen.getByText(/Article/i));

    // // Debug multiple elements
    // screen.debug(screen.getAllByText(/React/i));

    // // Log a Testing Playground URL for the entire document
    // screen.logTestingPlaygroundURL();

    // // Log a Testing Playground URL for a specific element
    // screen.logTestingPlaygroundURL(screen.getByText(/Article/i));

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
