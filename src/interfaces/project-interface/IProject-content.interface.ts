import Template from "@/interfaces/Templates.type"

export interface ProjectContent {
  template: Template;
  hero?: IHero;
  solution?: ISolution;
  process?: string[];
  process_explanation?: IProcessExplanation;
  outcome?: IOutcome;
}

export interface IHero {
  image: string;
  highlight_text: string;
  authors: HeroAuthors;
  links: HeroLinks;
}

interface HeroAuthors {
  title: string;
  authors: string[];
}

interface HeroLinks {
  title: string;
  links: string[];
}

export interface ISolution {
  image: string;
  title: string;
  highlight_text: string;
  solution_description: string;
}

export interface IProcessExplanation {
  image: string;
  highlight_text: string;
  explanation: string;
}

export interface IOutcome {
  title: string;
  explanation: string;
}

export default ProjectContent;

