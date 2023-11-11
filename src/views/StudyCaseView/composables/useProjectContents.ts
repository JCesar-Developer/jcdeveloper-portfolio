import { ref } from 'vue';
import { IProject } from '@/interfaces/project-interface/IProject.interface';
import { IProjectContent, IDescription, IMultimedia } from '@/interfaces/project-interface/IProject-content.interface';

export default function useProjectContents() {

  // Project contents
  const projectContent = ref<IProjectContent | undefined>(undefined);
  const hero = ref<string | undefined>(undefined);
  const tags = ref<string[] | undefined>(undefined);
  const description1 = ref<IDescription | undefined>(undefined);
  const multimedia1 = ref<IMultimedia | undefined>(undefined);
  const description2 = ref<IDescription | undefined>(undefined);
  const multimedia2 = ref<IMultimedia | undefined>(undefined);
  const description3 = ref<IDescription | undefined>(undefined);
  const multimedia3 = ref<IMultimedia | undefined>(undefined);
  const outcome = ref<IDescription | undefined>(undefined);

  const updateProjectContents = (project: IProject): void => {
    projectContent.value = project.projectContent;
    hero.value = projectContent.value?.hero;
    tags.value = projectContent.value?.tags;
    description1.value = projectContent.value?.description_1;
    multimedia1.value = projectContent.value?.multimedia_1;
    description2.value = projectContent.value?.description_2;
    multimedia2.value = projectContent.value?.multimedia_2;
    description3.value = projectContent.value?.description_3;
    multimedia3.value = projectContent.value?.multimedia_3;
    outcome.value = projectContent.value?.outcome;
  };

  return {
    updateProjectContents,
    projectContent,
    hero,
    tags,
    description1,
    multimedia1,
    description2,
    multimedia2,
    description3,
    multimedia3,
    outcome,
  }

}