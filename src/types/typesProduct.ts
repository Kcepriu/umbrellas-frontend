export interface IAtributeProduct {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
}

export interface IProduct {
  id: string;
  attributes: IAtributeProduct;
}
