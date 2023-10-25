import { defineComponent, PropType, computed } from "vue"
import { ICard } from "@/interfaces/ICard.interface"

export default defineComponent({
  props: {
    positionRight: { type: Boolean, default: false },
    cardData: { type: Object as PropType<ICard>, required: true }
  },

  setup( props ) {
    const innerWidth = computed(() => window.innerWidth ); 
    const description = computed(() => {
      if ( innerWidth.value < 576 && props.cardData.description.text.length > 150 )
        return props.cardData.description.text.slice(0, 150) + '...';
      else 
        return props.cardData.description.text;
    })
    
    return {
      description,
      innerWidth,
    }
  }


})