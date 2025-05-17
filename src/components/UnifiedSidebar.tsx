import React from 'react';
import {
  HomeIcon,
  ChatBubbleLeftRightIcon,
  MagnifyingGlassIcon,
  Squares2X2Icon,
  DocumentTextIcon,
  BellIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

export type ToolType = 'openwebui' | 'affine';

interface UnifiedSidebarProps {
  activeTool: ToolType;
  onSwitchTool: (tool: ToolType) => void;
}

const UnifiedSidebar: React.FC<UnifiedSidebarProps> = ({ activeTool, onSwitchTool }) => {
  // OpenWebUI navigation
  const openWebUINavItems = [
    { icon: <HomeIcon className="w-5 h-5" />, label: 'Dashboard', tool: 'openwebui' },
    { icon: <ChatBubbleLeftRightIcon className="w-5 h-5" />, label: 'Chats', tool: 'openwebui' },
    { icon: <MagnifyingGlassIcon className="w-5 h-5" />, label: 'Search', tool: 'openwebui' },
  ];
  // AFFiNE navigation
  const affineNavItems = [
    { icon: <DocumentTextIcon className="w-5 h-5" />, label: 'All docs', tool: 'affine' },
    { icon: <BellIcon className="w-5 h-5" />, label: 'Notifications', tool: 'affine' },
    { icon: <Cog6ToothIcon className="w-5 h-5" />, label: 'Settings', tool: 'affine' },
    { icon: <Squares2X2Icon className="w-5 h-5" />, label: 'Collections', tool: 'affine' },
  ];
  return (
    <aside className="flex flex-col h-full w-64 bg-gray-900 text-white border-r border-gray-800 py-6 px-4">
      <div>
        <div className="text-xs uppercase tracking-widest text-gray-400 mb-2">OpenWebUI</div>
        <nav className="flex flex-col gap-2 mb-6">
          {openWebUINavItems.map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${activeTool === item.tool ? 'bg-gray-800 text-white' : 'hover:bg-gray-800 text-gray-300 hover:text-white'}`}
              onClick={() => onSwitchTool(item.tool as ToolType)}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="text-xs uppercase tracking-widest text-gray-400 mb-2">AFFiNE</div>
        <nav className="flex flex-col gap-2">
          {affineNavItems.map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${activeTool === item.tool ? 'bg-gray-800 text-white' : 'hover:bg-gray-800 text-gray-300 hover:text-white'}`}
              onClick={() => onSwitchTool(item.tool as ToolType)}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default UnifiedSidebar; 