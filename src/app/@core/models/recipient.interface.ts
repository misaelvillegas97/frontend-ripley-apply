import { RecipientBank } from "./recipient_bank.interface";
import { User } from "./user.interface";

export interface Recipient {
  id?: string;
  id_user: User | string;
  name: string;
  rut: string;
  email: string;
  phone_number?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: any;
  recipient_bank?: RecipientBank[];
}