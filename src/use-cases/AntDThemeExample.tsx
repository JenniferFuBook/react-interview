import { useState } from 'react';
import { ConfigProvider, theme } from 'antd';
import AppLayout from '../components/antd-theme/AppLayout';

const AntDThemeExample = () => {
  // Track the current theme state
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ConfigProvider
      theme={{ // Dynamically switch between Ant Design's light and dark algorithms
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

export default AntDThemeExample;