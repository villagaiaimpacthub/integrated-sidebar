import React, { useState } from 'react';
import UnifiedSidebar, { ToolType } from './components/UnifiedSidebar';

const OPENWEBUI_URL = 'http://localhost:3000'; // Open-WebUI
const AFFINE_URL = 'https://3991-212-105-155-5.ngrok-free.app/'; // AFFiNE (remote)

const App: React.FC = () => {
  const [activeTool, setActiveTool] = useState<ToolType>('openwebui');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleIframeLoad = () => {
    setIsLoading(false);
    setError(null);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setError('Failed to load the application. Please check if the service is running.');
  };

  return (
    <div className="flex h-screen w-full bg-neutral-900">
      <UnifiedSidebar activeTool={activeTool} onSwitchTool={setActiveTool} />
      <main className="flex-1 overflow-auto bg-neutral-900">
        {isLoading && <div className="flex items-center justify-center h-full text-white">Loading...</div>}
        {error && <div className="flex items-center justify-center h-full text-red-500">{error}</div>}
        <iframe
          title={activeTool === 'openwebui' ? 'Open-WebUI' : 'AFFiNE'}
          src={activeTool === 'openwebui' ? OPENWEBUI_URL : AFFINE_URL}
          className="w-full h-full border-0"
          style={{ minHeight: '100vh', background: 'transparent' }}
          onLoad={handleIframeLoad}
          onError={handleIframeError}
        />
      </main>
    </div>
  );
};

export default App;