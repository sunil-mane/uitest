/**
 * UI interface
 */
export interface IVM {
  currentStatus: string;
  name: string;
  description: string;
  path: string;
  virtualMachines: number;
  errors: number;
}
