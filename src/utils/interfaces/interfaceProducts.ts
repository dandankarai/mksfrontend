export interface IProduct {
  name: string;
  photo: string;
  price: string;
  description: string;
  id: any;
  addItemToCard: any;
  product: any;
}

export interface IProductCart {
  name: string;
  photo: string;
  price: string;
  id: any;
  amount?: any;
}
