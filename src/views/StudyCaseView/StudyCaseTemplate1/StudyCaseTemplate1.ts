import { Ref, ref, computed, onBeforeMount, watch, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import i18n from '@/plugins/i18n';

//components
import TextContainer from '@/shared/TextContainer/text-container.vue';
import HeroImage from '../components/hero-image.vue';
import LinkButtons from '../components/link-buttons/link-buttons.vue';
import MediaSelector from '../components/media-selector/media-selector.vue';

//composables 
import useProjectContents from '../composables/useProjectContents';

//types
import { IProject } from '@/interfaces/project-interface/IProject.interface';

export default defineComponent({
  components: {
    TextContainer,
    HeroImage,
    LinkButtons,
    MediaSelector,
  },
  setup() {

    // Variables
    const innerWidth = computed(() => window.innerWidth);
    const project: Ref<IProject | undefined> = ref(undefined);

    // Composables
    const route = useRoute();
    const { locale } = useI18n();
    const { updateProjectContents, projectContent, hero, tags, description1, multimedia1, description2, multimedia2, description3, multimedia3, outcome } = useProjectContents();


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

    return {
      innerWidth,
      project,

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
    };
  },
});