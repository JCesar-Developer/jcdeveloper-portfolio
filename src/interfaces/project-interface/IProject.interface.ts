import ICardContent from './ICard-content.interface'
import IPRojectContent from './IProject-content.interface'

export interface IProject {
  id: string;
  title: string;
  subtitle: string;
  demoUrl?: string;
  gitUrl?: string;
  cardContent: ICardContent;
  projectContent: IPRojectContent;
}
