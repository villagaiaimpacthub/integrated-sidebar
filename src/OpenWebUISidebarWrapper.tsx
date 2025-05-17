import React from 'react';
import clsx from 'clsx';

// Props interface for the OpenWebUISidebarWrapper component
interface OpenWebUISidebarProps {
  show?: boolean;
  onToggle?: (show: boolean) => void;
  className?: string;
}

/**
 * Mock OpenWebUISidebarWrapper component for development
 * This will be replaced with the actual Svelte integration later
 */
const OpenWebUISidebarWrapper: React.FC<OpenWebUISidebarProps> = ({
  show = false,
  onToggle,
  className = '',
}) => {
  return (
    <div 
      className={clsx('open-webui-sidebar', className)}
      data-testid="open-webui-sidebar"
    >
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Open-WebUI Sidebar</h2>
        <button
          onClick={() => onToggle?.(!show)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          {show ? 'Close Sidebar' : 'Open Sidebar'}
        </button>
        {show && (
          <div className="mt-4">
            <p>This is a mock Open-WebUI sidebar.</p>
            <p>In production, this will be replaced with the actual Svelte component.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OpenWebUISidebarWrapper; 