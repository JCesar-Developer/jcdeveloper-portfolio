export interface ICard {
  description: IDescription;
  gitUrl: string;
  id: number;
  imageUrl: string;
  title: string;
}

interface IDescription {
  title: string;
  text: string;
}