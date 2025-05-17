import React from 'react';
import {
  HomeIcon,
  ChatBubbleLeftRightIcon,
  MagnifyingGlassIcon,
  Squares2X2Icon,
  DocumentTextIcon,
  BellIcon,
  Cog6ToothIcon,
  FolderIcon,
  StarIcon,
  TrashIcon,
  ArrowDownTrayIcon,
  TagIcon,
  BookOpenIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';
import favicon from '../favicon.svg';

export type ToolType = 'openwebui' | 'affine';

interface UnifiedSidebarProps {
  activeTool: ToolType;
  onSwitchTool: (tool: ToolType) => void;
  onLogout: () => void;
}

const UnifiedSidebar: React.FC<UnifiedSidebarProps> = ({ activeTool, onSwitchTool, onLogout }) => {
  const openWebUINavItems = [
    { icon: <HomeIcon className="w-5 h-5" />, label: 'Dashboard', tool: 'openwebui' },
    { icon: <ChatBubbleLeftRightIcon className="w-5 h-5" />, label: 'Chats', tool: 'openwebui' },
    { icon: <MagnifyingGlassIcon className="w-5 h-5" />, label: 'Search', tool: 'openwebui' }
  ];

  // Affine nav with all features as buttons
  const affineNavItems = [
    { icon: <BookOpenIcon className="w-5 h-5" />, label: 'All docs', tool: 'affine' },
    { icon: <DocumentTextIcon className="w-5 h-5" />, label: 'Journals', tool: 'affine' },
    { icon: <BellIcon className="w-5 h-5" />, label: 'Notifications', tool: 'affine' },
    { icon: <Cog6ToothIcon className="w-5 h-5" />, label: 'Settings', tool: 'affine' },
    { icon: <StarIcon className="w-5 h-5" />, label: 'Favorites', tool: 'affine' },
    { icon: <FolderIcon className="w-5 h-5" />, label: 'Organize', tool: 'affine' },
    { icon: <Squares2X2Icon className="w-5 h-5" />, label: 'Collections', tool: 'affine' },
    { icon: <TagIcon className="w-5 h-5" />, label: 'Tags', tool: 'affine' },
    { icon: <TrashIcon className="w-5 h-5" />, label: 'Trash', tool: 'affine' },
    { icon: <ArrowDownTrayIcon className="w-5 h-5" />, label: 'Import', tool: 'affine' },
    { icon: <Squares2X2Icon className="w-5 h-5" />, label: 'Template', tool: 'affine' },
    { icon: <InformationCircleIcon className="w-5 h-5" />, label: 'Learn more', tool: 'affine' },
  ];

  const navItems = activeTool === 'openwebui' ? openWebUINavItems : affineNavItems;

  return (
    <aside className="flex flex-col h-full w-64 bg-gray-900 text-white border-r border-gray-800 py-6 px-4 overflow-y-auto">
      <div className="flex justify-center items-center mb-8 gap-2">
        <span className="font-bold text-2xl tracking-tight" style={{fontFamily: 'inherit'}}>HIVE</span>
        <img src={favicon} alt="Hive Alpha" className="w-12 h-12" style={{verticalAlign: 'middle'}} />
      </div>
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
        <nav className="flex flex-col gap-2 mb-6">
          {affineNavItems.map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-gray-800 text-gray-300 hover:text-white`}
              onClick={() => onSwitchTool('affine')}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
      {/* Settings and Logout row at the bottom */}
      <div className="mt-auto px-4 py-4 border-t border-gray-800 flex items-center justify-end gap-2">
        <button
          title="Settings"
          className="p-2 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
        >
          <Cog6ToothIcon className="w-5 h-5" />
        </button>
        <button
          onClick={onLogout}
          title="Logout"
          className="p-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m-6-3h12m0 0l-3-3m3 3l-3 3" />
          </svg>
        </button>
      </div>
    </aside>
  );
};

const SidebarButton: React.FC<{ icon: React.ReactNode; label: string; dotColor?: string }> = ({ icon, label, dotColor }) => (
  <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white w-full transition-colors">
    {dotColor && <span className={`w-2 h-2 rounded-full ${dotColor}`}></span>}
    {icon}
    <span>{label}</span>
  </button>
);

export default UnifiedSidebar; 