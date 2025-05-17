import { BehaviorSubject } from 'rxjs';

/**
 * Mock AFFiNE services for development
 */
export const mockAppSidebarService = {
  sidebar: {
    open$: new BehaviorSubject(false),
    setOpen: (open: boolean) => mockAppSidebarService.sidebar.open$.next(open),
  },
};

export const mockServices = {
  AppSidebarService: {
    sidebar: mockAppSidebarService.sidebar,
  },
}; 