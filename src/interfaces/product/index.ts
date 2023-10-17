import { OrderItemInterface } from 'interfaces/order-item';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  order_item?: OrderItemInterface[];
  company?: CompanyInterface;
  _count?: {
    order_item?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  category?: string;
  company_id?: string;
}
