// Find the closest star element from the event target
export const findStarElement = (target: EventTarget) => {
  // Event targets are not guaranteed to be DOM elements
  if (!(target instanceof Element)) {
    return null;
  }

  // closest() safely traverses up the DOM to find the star wrapper
  return target.closest('[data-star-index]') as HTMLElement | null;
};

// Calculate the new rating based on click position
export const calculateNewRating = (e: React.MouseEvent) => {
  // Identify which star was interacted with
  const el = findStarElement(e.target);
  if (!el) {
    return;
  }

  // Get the star's position and dimensions
  const { left, width } = el.getBoundingClientRect();

   // Determine click position relative to the star
  const offsetX = e.clientX - left;

  // Clicking the left half selects a half-star rating
  const isHalf = offsetX < width / 2;

  // Read the star index from the dataset (1-based)
  const idx = Number(el.dataset.starIndex);

  // Return the computed rating value
  return isHalf ? idx - 0.5 : idx;
};
