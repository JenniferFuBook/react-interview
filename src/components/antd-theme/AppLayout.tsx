import { Layout, Button, Typography } from 'antd';

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

interface AppLayoutProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const AppLayout: React.FC<AppLayoutProps> = ({ isDarkMode, onToggleTheme }) => (
  <Layout style={{ minHeight: 'calc(100vh - 40px)' }}>
    <Header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Title level={3} style={{ color: '#fff', margin: 0 }}>
        Theme Switcher
      </Title>
      <Button type="primary" onClick={onToggleTheme}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </Button>
    </Header>

    <Content style={{ padding: '2rem' }}>
      <Title level={4}>Welcome</Title>
      <Paragraph>
        Toggle between light and dark themes using Ant Design v5’s{' '}
        <code>ConfigProvider</code>.
      </Paragraph>
      <Button type="dashed">Learn More</Button>
    </Content>
  </Layout>
);

export default AppLayout;
