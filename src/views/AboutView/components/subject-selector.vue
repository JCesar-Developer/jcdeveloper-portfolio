<template>
  <div class="more-content">
    
    <!-- Subjects -->
    <div class="subjects">
      <div v-for="(subject, index) of subjects" :key="subject.title"
      class="h2 pointer" :class="color(index)"
      @click="changeSubject( subject )">
        {{ subject.title }}
      </div>
    </div>

    <!-- Subject-content -->
    <TextContainer v-if="currenSubject" :title="currenSubject.title" uppercase>
      <p ref="content" class="content p2-r" v-html="currenSubject.description"></p>
    </TextContainer>

  </div>
</template>

<script setup lang="ts">
import { defineProps, Ref, ref, onBeforeMount, onMounted, watch } from 'vue';
import TextContainer from './text-container.vue';
import { IMoreAboutDescription } from '@/interfaces/IAbout.interface';
import { useI18n } from 'vue-i18n';

  //definitions
  const props = defineProps({
    subjects: { type: Array as () => IMoreAboutDescription[], required: true },
  });

  //variables
  const currenSubject: Ref<IMoreAboutDescription|null> = ref(null);
  const content = ref<HTMLElement|null>(null);
  const { locale } = useI18n();

  //component lifecycle
  onBeforeMount(() => {
    currenSubject.value = props.subjects[0];
  });

  onMounted(() => {
    formatChildren();
  });

  watch(currenSubject, () => {
    formatChildren();
  });
  watch( locale, () => {
    setTimeout(() => {
      currenSubject.value = props.subjects[0];
    }, 0);
  });

  //methods
  const color = ( index: number ) => {
    return index % 2 === 0 ? 'green' : 'orange';
  }

  const formatChildren = () => {
    setTimeout( () => {
      if (content.value) {
        const children = content.value.querySelectorAll('*');
        children.forEach((child) => {
          child.classList.add('p2-r');
          child.classList.add('li-format');
        });
      }
    }, 0)
  }

  const changeSubject = ( subject: IMoreAboutDescription ) => {
    currenSubject.value = subject;
  }
</script>

<style scoped lang="scss">
@import '@/styles/color.scss';

.more-content {
display: flex;
flex-direction: row;
gap: 40px;
margin-top: 20px;

  .subjects {
    align-content: flex-start;
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 30%;
    gap: 1rem;
    white-space: nowrap;

    .h2 {
      font-size: 24px;
      &.green { color: $g-500; }
      &.orange { color: $o-500; }
    }
  }

  .subject-content {
    flex: 1;

    .content {
      margin-top: 20px;
    }
  }
}
</style>