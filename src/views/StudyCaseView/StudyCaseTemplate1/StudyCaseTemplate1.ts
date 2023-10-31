import { Ref, ref, computed, onBeforeMount, watch, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import i18n from '@/plugins/i18n';

import SwiperGridImage from '@/shared/swiper-grid-img/swiper-grid-image.vue';
import TextContainer from '@/shared/TextContainer/text-container.vue';
import LinkButtons from '../components/link-buttons.vue';

import { IProject } from '@/interfaces/project-interface/IProject.interface';
import { IHero, ISolution, IProcessExplanation, IOutcome } from '@/interfaces/project-interface/IProject-content.interface';

export default defineComponent({
  components: {
    SwiperGridImage,
    TextContainer,
    LinkButtons,
  },
  setup() {
    const route = useRoute();
    const { locale } = useI18n();
    const innerWidth = computed(() => window.innerWidth);
    const project: Ref<IProject | undefined> = ref(undefined);

    // Project contents
    const hero = ref<IHero | undefined>(undefined);
    const solution = ref<ISolution | undefined>(undefined);
    const processImgs = ref<string[] | undefined>(undefined);
    const processExplanation = ref<IProcessExplanation | undefined>(undefined);
    const outcome = ref<IOutcome | undefined>(undefined);

    onBeforeMount(() => {
      project.value = getProjectData();
      if (project.value) updateProjectContents(project.value);
    });

    watch(locale, () => {
      project.value = getProjectData();
      if (project.value) updateProjectContents(project.value);
    });

    const getProjectData = (): IProject | undefined => {
      const id: string = route.params.id[0];
      const cards: IProject[] = i18n.global.messages.value[i18n.global.locale.value].cards.projects;
      return cards.find((project: IProject) => project.id === id);
    };

    const updateProjectContents = (project: IProject) => {
      hero.value = project.projectContent.hero;
      solution.value = project.projectContent.solution;
      processImgs.value = project.projectContent.process;
      processExplanation.value = project.projectContent.process_explanation;
      outcome.value = project.projectContent.outcome;
    };

    return {
      innerWidth,
      project,
      hero,
      solution,
      processImgs,
      processExplanation,
      outcome,
    };
  },
});