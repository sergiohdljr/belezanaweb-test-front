import { IProduct } from "../components/Product/interfaces";

export interface InventoryProducts {
  id: string;
  items: Item[];
  subTotal: number;
  shippingTotal: number;
  discount: number;
  total: number;
}

export interface Item {
  quantity: number;
  product: IProduct;
}
