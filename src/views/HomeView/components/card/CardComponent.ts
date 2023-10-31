import { defineComponent, PropType, computed } from "vue"
import { IProject } from "@/interfaces/project-interface/IProject.interface"

export default defineComponent({
  props: {
    positionRight: { type: Boolean, default: false },
    cardData: { type: Object as PropType<IProject>, required: true }
  },

  setup( props ) {
    const innerWidth = computed(() => window.innerWidth ); 
    const description = computed(() => {
      if ( innerWidth.value < 576 && props.cardData.cardContent.description.text.length > 150 )
        return props.cardData.cardContent.description.text.slice(0, 150) + '...';
      else 
        return props.cardData.cardContent.description.text;
    });

    return {
      description,
      innerWidth,
    }
  }


})