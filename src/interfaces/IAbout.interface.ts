export interface IAbout {
  author: string;
  principal_description: string;
  more_description: {
    [key: number]: IMoreDescription;
  };
  stack: {
    title: string;
    table: ITechnology[];
  };
  contact: IList;
  links: IList;
  more_about: {
    title: string;
    subjects: IMoreAboutDescription[];
  }
}

interface IMoreDescription {
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

export interface IMoreAboutDescription {
  id: number;
  title: string;
  description: string;
}