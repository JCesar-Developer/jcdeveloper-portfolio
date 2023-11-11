import ICardContent from './ICard-content.interface'
import IPRojectContent from './IProject-content.interface'
import Template from "@/interfaces/Templates.type"

export interface IProject {
  id: string;
  title: string;
  overtitle: string;
  demoUrl?: string;
  gitUrl?: string;
  cardContent: ICardContent;
  template: Template;
  projectContent?: IPRojectContent;
}
