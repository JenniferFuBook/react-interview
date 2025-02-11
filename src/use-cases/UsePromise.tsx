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

const weekNamesPromise = getWeekNames();

const WeekView: React.FC = () => {
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

const UsePromise: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WeekView />
    </Suspense>
  );
};

export default UsePromise;
