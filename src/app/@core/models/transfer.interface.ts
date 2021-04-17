import { RecipientBank } from '@app/@core/models/recipient_bank.interface';
import { User } from '@app/@core/models/user.interface';
export interface Transfer {
  id: string;
  id_user: User;
  id_account: RecipientBank;
  amount: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: any;
}
