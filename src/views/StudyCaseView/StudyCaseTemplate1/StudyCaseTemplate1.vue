<template >
  <div v-if="project" id="template-container" class="d-flex flex-column align-items-center">

    <!-- LINK BUTTONS -->
    <LinkButtons v-if="innerWidth > 576" :demoUrl="project.demoUrl" :gitUrl="project.gitUrl"/>

    <!-- Title -->
    <header class="text-center">
      <div class="p3-r letter-spaced mb-2">{{ project.overtitle }}</div> 
      <div class="h1 uppercase">{{ project.title }}</div>
    </header>

    <section v-if="!projectContent" class="text-center">
        <h1 class="mt-5">{{ $t( 'general.building_content' ) }}</h1>
    </section>

    <!-- IF: NO-CONTENT -->
    <template v-else>

      <!-- HERO -->
      <section class="d-flex flex-column align-items-center">
        <HeroImage v-if="hero" :image="hero"/>

        <!-- tags -->
        <div v-if="tags" id="tags-container" class="sm-continer row w-100 justify-content-center mt-4">
          <div class="d-flex flex-row flex-wrap col-12 col-lg-8 p-0 gap-2 justify-content-center">
            <TagComponent v-for="(tag, index) in tags" :key="index" :tag="tag" />
          </div>
        </div>
      </section>

      <!-- DESCRIPTION 1 -->
      <section v-if="description1" id="description-1" class="sm-container row justify-content-center">
        <div class="row col-12 col-lg-8 gap-30 gap-sm-0 p-0">
          
          <TextContainer class="col-12 col-sm-4 p-0 ps-sm-2" 
          :title="description1.title" uppercase>
            <p class="p2-r" v-html="description1.text"></p>
          </TextContainer>

          <h4 class="h4 col-12 col-sm-8 p-0 pe-sm-2" v-html="description1.highlight_text"></h4>
        
        </div>
      </section>

      <!-- MULTIMEDIA 1 -->
      <section v-if="multimedia1" class="sm-container row justify-content-center">
        <div class="col-12 col-lg-8 p-0">
          <MediaSelector :multimedia="multimedia1"/>
        </div>
      </section>

      <!-- DESCRIPTION 2 -->
      <section v-if="description2" class="sm-container row justify-content-center">
        <div class="d-flex flex-column gap-3 gap-sm-5 col-12 col-lg-8 p-0">

          <TextContainer :title="description2.title" uppercase>
            <h4 class="h4" v-html="description2.highlight_text"></h4>
          </TextContainer>

          <div class="row justify-content-end">
            <div class="col-12 col-sm-9">
              <p class="ul-margin p2-r" v-html="description2.text"></p>
            </div>
          </div>

        </div>
      </section>

      <!-- MULTIMEDIA 2 -->
      <section v-if="multimedia2" class="sm-container row justify-content-center">
        <div class="col-12 col-lg-8 p-0">
          <MediaSelector :multimedia="multimedia2"/>
        </div>
      </section>

      <!-- DESCRIPTION 3 -->
      <section v-if="description3" class="sm-container row justify-content-center">
        <div class="col-12 col-lg-8 row gap-3 gap-sm-0 p-0">
          
          <h4 class="h4 col-sm-4 p-0 pe-sm-4" v-html="description3.highlight_text"></h4>
          <p class="ul-margin p2-r col-sm-8 p-0 ps-sm-2" v-html="description3.text"></p>
          
        </div>      
      </section>
      
      <!-- MULTIMEDIA 3 -->
      <section id="multimedia-3" v-if="multimedia3">
        <MediaSelector :multimedia="multimedia3"/>
      </section>

      <!-- OUTCOME -->
      <section v-if="outcome" class="row justify-content-center">
        <TextContainer :title="outcome.title" uppercase class="sm-container col-sm-9 col-lg-7 p-0 g-0">
          <div class="p2-r" v-html="outcome.text"></div>
        </TextContainer>
      </section>

    </template>
    

  </div>
</template>

<script src="./StudyCaseTemplate1" lang="ts"></script>
<style src="./StudyCaseTemplate1.scss" scoped lang="scss"></style>