import React, { useState, useEffect } from 'react';
import UnifiedSidebar, { ToolType } from './components/UnifiedSidebar';
import LoginPage from './components/LoginPage';

// Updated URLs for Docker environment
const OPENWEBUI_URL = '/openwebui'; // Will be proxied through nginx
const AFFINE_URL = 'https://3991-212-105-155-5.ngrok-free.app/'; // AFFiNE (remote)

const App: React.FC = () => {
  const [activeTool, setActiveTool] = useState<ToolType>('openwebui');
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('sidebarDemoUser');
    if (savedUser) setUser(savedUser);
    document.title = 'HIVE';
  }, []);

  // SSO integration placeholder:
  useEffect(() => {
    if (user) {
      document.title = 'HIVE - Metaluck';
      // --- OpenWebUI SSO: Use trusted headers via reverse proxy (see docs)
      // --- AFFiNE SSO: Set token in localStorage for the iframe (when ready)
      // Example for AFFiNE (when you have the token):
      // window.localStorage.setItem('affine_token', 'FAKE_TOKEN');
    }
  }, [user]);

  if (!user) {
    return <LoginPage onLogin={setUser} />;
  }

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('sidebarDemoUser');
    document.cookie = 'sidebar_user_email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'sidebar_user_name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.reload();
  };

  return (
    <div className="flex h-screen w-full bg-neutral-900">
      <UnifiedSidebar activeTool={activeTool} onSwitchTool={setActiveTool} onLogout={handleLogout} />
      <main className="flex-1 overflow-auto bg-neutral-900 relative">
        <iframe
          title={activeTool === 'openwebui' ? 'Open-WebUI' : 'AFFiNE'}
          src={activeTool === 'openwebui' ? OPENWEBUI_URL : AFFINE_URL}
          className="w-full h-full border-0"
          style={{ minHeight: '100vh', background: 'transparent' }}
        />
      </main>
    </div>
  );
};

export default App;