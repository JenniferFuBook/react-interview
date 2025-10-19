import { useEffect, useState } from 'react';
import { ConfigProvider, theme } from 'antd';
import AppLayout from '../components/antd-theme/AppLayout';

const AutoAntDThemeExample = () => {
  // Initialize theme state from saved user preference or system preference
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('antd-theme');
    if (savedTheme !== null) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Persist theme changes in localStorage
  useEffect(() => {
    localStorage.setItem('antd-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <ConfigProvider
      theme={{
        // Dynamically switch between Ant Design's light and dark algorithms
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <AppLayout
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
      />
    </ConfigProvider>
  );
};

export default AutoAntDThemeExample;
