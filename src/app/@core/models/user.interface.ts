export interface User {
  id: string;
  name: string;
  rut: string;
  email: string;
  phone_number: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: any;
}