import { EInputType } from '@/constants/input-type';

export type FormField = {
  name: string;
  label: string;
  type: EInputType;
  placeholder?: string;
  required?: boolean;
};
