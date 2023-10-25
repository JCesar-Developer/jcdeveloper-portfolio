export interface IAbout {
  author: string;
  principal_description: string;
  more_description: IMoreDescription[];
  stack: {
    title: string;
    table: ITechnology[];
  };
  more_about: {
    title: string;
    subjects: IMoreDescription[];
  }
}

export interface IMoreDescription {
  id: number;
  title: string;
  description: string;
}

interface ITechnology {
  subject: string;
  technologies: string;
}

interface IList {
  title: string;
  list: string[];
}