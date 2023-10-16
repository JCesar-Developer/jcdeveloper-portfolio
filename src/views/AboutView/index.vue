<template>
	<main id="about-view" class="center">
		<div class="thin-container">

			<HeaderComponent />

      <!-- SECTION: PROFILE -->
      <section class="section-profile" style="border: solid 1px red;">

        <!-- Profile-img -->
        <div class="profile-picture" style="border: solid 1px blue;">
          <img src="https://via.placeholder.com/300" alt="Profile picture" />
        </div>
        
        <!-- Profile-description -->
        <div class="profile-description-container">
          <!-- Title -->
          <div class="profile-description-title">
            Julio César Asto Machuca
          </div>

          <div class="profile-description" style="border: solid 1px yellow;">
            <p class="p1-r">
              Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
            </p>
            <p class="p2-r">
              Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
              <br/><br/>
              Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
              <br/><br/>
              Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
            </p>
            <div class="text-container">
              <p class="text-title p3-r">
                TECHNOLOGY STACK
              </p>
              <ul>
                <li class="p2-r">UI/UX: <span class="t-gray">UI/UX Design Bases + Figma</span></li>
                <li class="p2-r">FRONT: <span class="t-gray">HTML + CSS + SASS + Bootstrap + Tailwind</span></li>
                <li class="p2-r">LANGUAGE: <span class="t-gray">JavaScript + TypeScript + EcmaSrip 6 (DOM Manipulation)</span></li>
                <li class="p2-r">VUE: <span class="t-gray">Vue2 + Vue3 + Nuxt + Jest</span></li>
                <li class="p2-r">ANGULAR: <span class="t-gray">Angular13 + Ionic</span></li>
              </ul>
            </div>
            <div class="text-container">
              <p class="text-title p3-r">
                CONTACT
              </p>
              <ul>
                <li class="p2-r">julioasto.92@gmail.com</li>
              </ul>
            </div>
            <div class="text-container">
              <p class="text-title p3-r">
                LINKS
              </p>
              <ul>
                <li class="p2-r">Resume</li>
                <li class="p2-r">LinkedIn</li>
                <li class="p2-r">GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION: PICTURES -->
      <section class="section-pictures">
        <div class="image-1" style="background-color: blue;">Image 1</div>
        <div class="image-2" style="background-color: red;">Image 2</div>
        <div class="image-3" style="background-color: blue;">Image 3</div>
        <div class="image-4" style="background-color: red;">Image 4</div>
        <div class="image-5" style="background-color: blue;">Image 5</div>
        <div class="image-6" style="background-color: red;">Image 6</div>
      </section>

      <!-- SECTION: MORE -->
      <section class="section-more">
        <div class="h1">
          More about me
        </div>
        <div class="more-content">
          <div class="subjects">
            <div v-for="(subject, index) of subjects" :key="subject.title"
            class="h2 pointer" :class="color(index)"
            @click="onChangeSubject( subject )">
              {{ subject.title }}
            </div>
          </div>
          <div class="subject-content">
            <p>{{ currenSubject.title }}</p>
            <p>{{ currenSubject.description }}</p>
          </div>
        </div>
      </section>

			<FooterComponent />

		</div>
	</main>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/header/index.vue';
import FooterComponent from '@/components/footer/index.vue';
import { Ref, ref, onBeforeMount } from 'vue';

const currenSubject: Ref<IAboutmeSubject> = ref({ id: 0, title: '', description: '' });

export interface IAboutmeSubject {
  id: number,
  title: string,
  description: string,
}

onBeforeMount(() => {
  currenSubject.value = subjects[0];
});

const onChangeSubject = ( subject: IAboutmeSubject ) => {
  currenSubject.value = subject;
}

const color = ( index: number ) => {
  return index % 2 === 0 ? 'green' : 'orange';
}

const subjects: IAboutmeSubject[] = [
  {
    id: 1,
    title: 'UI/UX',
    description: 'Pequeña descripción sobre UI/UX',
  },
  {
    id: 2,
    title: 'FRONT',
    description: 'Pequeña descripción sobre FRONT',
  },
  {
    id: 3,
    title: 'LANGUAGE',
    description: 'Pequeña descripción sobre LANGUAGE',
  },
  {
    id: 4,
    title: 'VUE',
    description: 'Pequeña descripción sobre VUE',
  },
  {
    id: 5,
    title: 'ANGULAR',
    description: 'Pequeña descipción sobre ANGULAR',
  },  
  {
    id: 6,
    title: 'VIDEO GAMES',
    description: 'Pequeña descipción sobre VIDEO GAMES',
  },
]

</script>

<style lang="scss">
@import '@/styles/variables.scss';

#about-view {

	.thin-container {
		display: flex;
		flex-direction: column;
		gap: 150px;

    .section-profile {
      display: flex;
      flex-direction: row;
      padding: 0 50px;
      gap: 50px;
    
      //Picture
      .profile-picture {
        width: 300px;
        height: 300px;

        img {
          border-radius: 50%;
        }
      }
      
      .profile-description-container {
        position: relative;

        .profile-description-title {
          position: absolute;
        }
      
        .profile-description {
          width: 100%;
          padding-top: 150px;
          display: flex;
          flex-direction: column;
          gap: 40px;

          //Title
          .profile-description-title {
            position: absolute;
            margin-top: 0;
          }
          

          .text-container {
            display: flex;
            flex-direction: column;
            gap: 10px;

            .text-title {
              font-weight: 700;
            }
            ul {
              margin: 0;
              padding: 0;
              li {
                list-style: none;
              }
            }
          }
        
        }
      }
    }
	
    .section-pictures {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(5, 1fr);
      gap: 15px; 
      width: 100%;
      height: 600px;

      .image-1 {
        grid-column: 1 / 2;
        grid-row: 1 / 4;
        //height: 400px;
      }

      .image-2 {
        grid-column: 2 / 3;
        grid-row: 1 / 3;
        //height: 400px;
      }

      .image-3 {
        grid-column: 3 / 4;
        grid-row: 1 / 4;
        //height: 400px;
      }

      .image-4 {
        grid-column: 1 / 2;
        grid-row: 4 / 6;
        //height: 400px;
      }

      .image-5 {
        grid-column: 2 / 3;
        grid-row: 3 / 6;
        //height: 400px;
      }

      .image-6 {
        grid-column: 3 / 4;
        grid-row: 4 / 6;
        //height: 400px;
      }

    }

    .section-more {
      .more-content {
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        gap: 40px;

        .subjects {
          display: flex;
          flex: 0 0 35%;
          flex-wrap: wrap;
          gap: 1rem;
          white-space: nowrap;

          .h2 {
            font-size: 24px;

            &.green {
              color: $g-500;
            }

            &.orange {
              color: $o-500;
            }
          }
        }

        .subject-content {
          border: solid 1px blue;
          flex: 1;
        }
      }
    }
  }
}
</style>