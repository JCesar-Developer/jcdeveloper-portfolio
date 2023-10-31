interface ICardContent {
  image: string;
  tags?: string[];
  description: IDescription;
}

interface IDescription {
  title: string;
  text: string;
}

export default ICardContent;