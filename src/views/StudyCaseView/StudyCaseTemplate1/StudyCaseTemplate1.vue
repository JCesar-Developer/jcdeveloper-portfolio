<template >
  <div v-if="project" id="template-container" class="d-flex flex-column align-items-center">

    <!-- PROVISIONAL-TITLE -->
    <div v-if="!hero" class="text-center">
      <div class="p3-r letter-spaced mb-2">{{ project.subtitle }}</div>
      <div class="h1 uppercase">{{ project.title }}</div>
    </div>

    <!-- SECTION: HERO -->
    <section v-if="hero" class="section-hero row justify-content-center gap-30 gap-sm-50">

      <!-- Title -->
      <div class="text-center">
        <div class="p3-r letter-spaced mb-2">{{ project.subtitle }}</div>
        <div class="h1 uppercase">{{ project.title }}</div>
      </div>

      <!-- Main image -->
      <div class="image p-0" :style="{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(133, 133, 168, 1)), url(${hero.image})`}">
        <div class="border-img-bottom"></div>
      </div>

      <!-- Description -->
      <div class="padding-container change-order row justify-content-between col-12 col-lg-8 gap-4 gap-sm-0 p-0">
        <!-- Highligted text -->
        <h4 class="h4 col-12 col-sm-8 p-0 pe-sm-4" v-html="hero.highlight_text"></h4>

        <div class="authors col-12 col-sm-4 p-0 ps-sm-2">
          <TextContainer :title="hero.authors.title">
            <div>
              <p v-for="(author, index) in hero.authors.authors" :key="index" class="p2-r pb-1" v-html="author"></p>
            </div>
          </TextContainer>
        </div>
      </div>
    </section>

    <!-- SECTION: SOLUTION -->
    <section v-if="solution" class="section-solution row justify-content-center">
      <div class="col-12 col-lg-8 d-flex flex-column align-items-center gap-30 gap-sm-50 p-0">

        <!-- Image -->
        <img :src="solution.image" alt="Solution image" class="w-100 padding-container"/>
        
        <!-- Solution -->
        <div class="padding-container">
          <div class="row gap-30 gap-sm-50">
            <div class="col-12">
              <TextContainer :title="solution.title" uppercase>
                <h4 class="h4" v-html="solution.highlight_text"></h4>
              </TextContainer>
            </div>
          
            <div class="col-12 row justify-content-end">
              <div class="col-12 col-sm-9">
                <p class="p2-r" v-html="solution.solution_description"></p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    
    <!-- SECTION: PROCESS -->
    <section v-if="processImgs" class="section-process row justify-content-center padding-container">
      <div v-if="innerWidth > 576" class="row p-0 w-100">
        <img v-for="(image, index) of processImgs" :key="index" :src="image" alt="Process image" class="col-6 col-sm-4 col-lg-3 p-2"/>
      </div>

      <SwiperGridImage v-else :images="processImgs" class="p-0"></SwiperGridImage>
    </section>

    <!-- SECTION: PROCESS EXPLANATION -->
    <section v-if="processExplanation" class="section-process-explanation row justify-content-center">
      <div class="padding-container col-12 col-lg-8 row gap-3 gap-sm-0 p-0">
        <h4 class="h4 col-sm-4 p-0 pe-sm-4" v-html="processExplanation.highlight_text"></h4>
        <p class="p2-r col-sm-8 p-0 ps-sm-2" v-html="processExplanation.explanation"></p>
      </div>
      <img :src="processExplanation.image" alt="Process explanation image" class="col-4 p-0"/>
    </section>

    <!-- SECTION: OUTCOME -->
    <section v-if="outcome" class="section-outcome row justify-content-center">
      <TextContainer :title="outcome.title" uppercase class="padding-container col-10 col-sm-9 col-lg-7 p-0 g-0">
        <div v-html="outcome.explanation"></div>
      </TextContainer>
    </section>
  </div>
</template>

<script src="./StudyCaseTemplate1" lang="ts"></script>
<style src="./StudyCaseTemplate1.scss" scoped lang="scss"></style>