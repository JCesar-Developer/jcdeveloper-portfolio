import { Ref, ref, onBeforeMount, onMounted, watch, nextTick, defineComponent } from 'vue';
import { IMoreDescription } from '@/interfaces/IAbout.interface';
import TextContainer from '../text-container.vue';
import { useI18n } from 'vue-i18n';

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
    const { locale } = useI18n();

    //component lifecycle
    onBeforeMount(() => {
      currenSubject.value = props.subjects[0];
      subjectExists.value = true;
    });

    onMounted(() => {
      formatChildren();
    });

    //watchers
    watch(currenSubject, () => {
      resetContent();
    });
    watch(locale, () => {
      setTimeout(() => {
        currenSubject.value = props.subjects[0];
      }, 0);
    });

    //methods
    const color = (index: number) => {
      return index % 2 === 0 ? 'green' : 'orange';
    };

    const resetContent = () => {
      subjectExists.value = false;
      nextTick(() => {
        subjectExists.value = true;
        formatChildren();
      });
    };

    const formatChildren = () => {
      setTimeout(() => {
        if (content.value) {
          const children = content.value.querySelectorAll('*');
          children.forEach((child) => {
            child.classList.add('p2-r');
            child.classList.add('li-format');
          });
        }
      }, 1);
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