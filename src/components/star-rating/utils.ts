// Find the closest star element from the event target
export const findStarElement = (target: EventTarget) => {
  if (!(target instanceof Element)) {
    return null;
  }
  return target.closest('[data-star-index]') as HTMLElement | null;
};

// Calculate the new rating based on click position
export const calculateNewRating = (e: React.MouseEvent) => {
  const el = findStarElement(e.target);
  if (!el) {
    return;
  }
  return Number(el.dataset.starIndex);
};