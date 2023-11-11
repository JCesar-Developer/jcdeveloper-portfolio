export interface IProjectContent {
  hero?: string;
  tags?: string[];
  description_1?: IDescription;
  multimedia_1?: IMultimedia;
  description_2?: IDescription;
  multimedia_2?: IMultimedia;
  description_3?: IDescription;
  multimedia_3?: IMultimedia;
  outcome?: IDescription;
}

export interface IDescription {
  title?: string;
  text: string;
  highlight_text?: string;
}

export interface IMultimedia {
  singleImage?: string;
  imageGrid?: string[];
  imageOverlay?: string[];
}

export default IProjectContent;

