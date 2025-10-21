const DataProvider = ({
  children,
}: {
  children: (data: string) => React.ReactNode;
}) => {
  const data = 'Dynamic data from parent';
  // children is treated as a function and invoked with dynamic content,
  // allowing child components to render customized output based on parent-provided values
  return <>{children(data)}</>;
};

export default () => <DataProvider>{(data) => <p>{data}</p>}</DataProvider>;
