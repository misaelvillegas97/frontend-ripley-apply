import { Bank } from "./bank.interface";
import { Recipient } from "./recipient.interface";

export interface RecipientBank {
  id: string;
  id_recipient: string | Recipient;
  id_bank: Bank | string;
  account_type: string;
  account_number: string;
  created_at: Date;
  updated_at: Date;
}