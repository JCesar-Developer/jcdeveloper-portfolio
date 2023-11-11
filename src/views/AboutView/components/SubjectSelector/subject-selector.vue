<template>
  <div id="subject-selector" class="d-flex flex-column flex-md-row">
    
    <!-- Subjects -->
    <div class="subjects">
      <div v-for="(subject, index) of subjects" :key="subject.title" class="subject h2 pointer hover-ts-green" :class="[color(index), {'current-subject': (subject.id == currenSubject!.id)}]" @click="changeSubject( subject )">
        {{ subject.title }}
      </div>
    </div>

    <!-- Subject-content -->
    <TextContainer v-if="subjectExists" :title="currenSubject!.title" uppercase>
      <p ref="content" class="p2-r ul-format" v-html="currenSubject!.description"></p>
    </TextContainer>

  </div>
</template>

<script src="./subject-selector" lang="ts"></script>
<style src="./subject-selector.scss" scoped lang="scss"></style>