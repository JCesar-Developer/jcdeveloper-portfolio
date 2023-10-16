import { defineComponent, PropType } from "vue"
import { ICard } from "@/interfaces/ICard.interface"

export default defineComponent({
  props: {
    positionRight: { type: Boolean, default: false },
    cardData: { type: Object as PropType<ICard>, required: true }
  }
})