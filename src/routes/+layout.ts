import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
  return { appName: 'Simple Budget & Expenses Dashboard' };
};