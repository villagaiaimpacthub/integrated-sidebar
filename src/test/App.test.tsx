import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import App from '../App';
import { describe, expect, test } from 'vitest';

// Mock the UnifiedSidebar component
vi.mock('../components/UnifiedSidebar', () => ({
  default: ({ activeTool, onSwitchTool }: { activeTool: string; onSwitchTool: (tool: string) => void }) => (
    <div data-testid="mock-sidebar">
      <button onClick={() => onSwitchTool('openwebui')}>Switch to OpenWebUI</button>
      <button onClick={() => onSwitchTool('affine')}>Switch to AFFiNE</button>
      <div>Active Tool: {activeTool}</div>
    </div>
  )
}));

describe('App', () => {
  test('renders login page when not logged in', () => {
    render(<App />);
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  test('renders sidebar after login', () => {
    // Mock localStorage
    const mockUser = 'test@example.com';
    localStorage.setItem('sidebarDemoUser', mockUser);

    render(<App />);
    expect(screen.getByText(/HIVE/i)).toBeInTheDocument();

    // Clean up
    localStorage.removeItem('sidebarDemoUser');
  });

  test('handles logout correctly', () => {
    // Mock localStorage
    const mockUser = 'test@example.com';
    localStorage.setItem('sidebarDemoUser', mockUser);

    render(<App />);
    const logoutButton = screen.getByTitle(/logout/i);
    logoutButton.click();

    expect(screen.getByText(/login/i)).toBeInTheDocument();
    expect(localStorage.getItem('sidebarDemoUser')).toBeNull();

    // Clean up
    localStorage.removeItem('sidebarDemoUser');
  });
});

describe('App Component', () => {
  // Test initial rendering
  test('renders with default OpenWebUI tool', () => {
    render(<App />);
    expect(screen.getByTestId('mock-sidebar')).toBeInTheDocument();
    expect(screen.getByTitle('Open-WebUI')).toBeInTheDocument();
  });

  // Test tool switching
  test('successfully switches between tools', async () => {
    render(<App />);
    
    // Initially should show OpenWebUI
    expect(screen.getByTitle('Open-WebUI')).toBeInTheDocument();
    
    // Switch to AFFiNE
    fireEvent.click(screen.getByText('Switch to AFFiNE'));
    await waitFor(() => {
      expect(screen.getByTitle('AFFiNE')).toBeInTheDocument();
    });
    
    // Switch back to OpenWebUI
    fireEvent.click(screen.getByText('Switch to OpenWebUI'));
    await waitFor(() => {
      expect(screen.getByTitle('Open-WebUI')).toBeInTheDocument();
    });
  });
}); 