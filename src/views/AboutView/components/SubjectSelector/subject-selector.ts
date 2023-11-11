import { Ref, ref, onBeforeMount, watch, nextTick, defineComponent } from 'vue';
import { IMoreDescription } from '@/interfaces/IAbout.interface';
import TextContainer from '@/shared/TextContainer/text-container.vue';
//import { useI18n } from 'vue-i18n';

export default defineComponent({
  props: {
    subjects: { type: Array as () => IMoreDescription[], required: true },
  },

  components: {
    TextContainer,
  },

  setup(props: { subjects: IMoreDescription[] }) {
    //definitions
    const currenSubject: Ref<IMoreDescription | null> = ref(null);
    const subjectExists: Ref<boolean> = ref(false);
    const content = ref<HTMLElement | null>(null);

    //component lifecycle
    onBeforeMount(() => {
      currenSubject.value = props.subjects[0];
      subjectExists.value = true;
    });

    //watchers
    watch(currenSubject, () => {
      resetContent();
    });
    //methods
    const color = (index: number) => {
      return index % 2 === 0 ? 'green' : 'orange';
    };

    const resetContent = () => {
      subjectExists.value = false;
      nextTick(() => {
        subjectExists.value = true;
      });
    };

    const changeSubject = (subject: IMoreDescription) => {
      currenSubject.value = subject;
    };

    return {
      currenSubject,
      subjectExists,
      content,
      color,
      changeSubject,
    };
  },
});