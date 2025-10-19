// This example is contained in a single file for simplicity.
// In a real-world application, you would split the components into separate files.

import { use, useState, Suspense } from 'react';

type DataProps = string[];

const getWeekNames = () =>
  new Promise<DataProps>((resolve) =>
    setTimeout(() => {
      resolve([
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ]);
    }, 1000)
  );

// Create the initial Promise outside the component
const weekNamesPromise = getWeekNames();

const WeekView = () => {
  // Use the created Promise to avoid creating a new Promise during every render
  const [getWeekNamesPromise, setGetWeekNamesPromise] =
    useState(weekNamesPromise); 
  const weekNames = use(getWeekNamesPromise);

  return (
    <>
      <div>{weekNames.join(', ')}</div>
      <button onClick={() => setGetWeekNamesPromise(getWeekNames())}>
        Refresh
      </button>
    </>
  );
};

const UsePromiseExample = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WeekView />
    </Suspense>
  );
};

export default UsePromiseExample;
