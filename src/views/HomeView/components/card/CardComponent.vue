<template>
	<div id="card-container" class="d-flex justify-content-between" :class="{ 'right': positionRight }">

    <!-- Title -->
		<div class="title" :class="{ 'right': positionRight }">
			<span class="h2">{{ cardData.title }}</span>
		</div>

    <!-- Image -->
		<div class="image-container d-flex justify-content-center align-items-center" :class="{ 'right': positionRight }">	
      <img class="image" :src="cardData.cardContent.image" :alt="cardData.title">
		</div>

    <!-- Description -->
		<div class="description-card d-flex flex-column" :class="{ 'right': positionRight }">
			
      <span class="description-header p1-r garamond t-gray bold uppercase">{{ cardData.cardContent.description.title }}</span>
			<span class="description-body p2-r italic light" v-html="description"></span>
			
      <!-- Links -->
      <ul v-if="innerWidth > 576" class="links d-flex flex-column" :class="{ 'right': positionRight }">
        <li>
          <router-link class="link p2-r t-gray hover-bold hover-o-500" :to="{ name: `study-case-${cardData.template}`, params: { id: cardData.id } }">
            {{ $t( 'cards.read_more' ) }}
          </router-link>
        </li>
        <li v-if="cardData.demoUrl" >
          <a :href="cardData.demoUrl" class="link p2-r t-gray hover-bold hover-o-500" target="_blank">
            {{ $t( 'cards.demo' ) }}
          </a>
        </li>
        <li v-if="cardData.gitUrl">
          <a :href="cardData.gitUrl" class="link p2-r t-gray hover-bold hover-o-500" target="_blank">
            {{ $t( 'cards.source_code' ) }}
          </a>
        </li>
      </ul>
		</div>

    <!-- Links-btns -->
    <div v-if="innerWidth < 576" class="d-flex flex-column gap-3 w-100">
      <router-link :to="{ name: `study-case-${cardData.template}`, params: { id: cardData.id } }">
        <button class="btn btn-primary">
          {{ $t( 'cards.read_more' ) }}
        </button>
      </router-link>
      <button v-if="cardData.demoUrl" class="btn btn-secondary">
        <a :href="cardData.demoUrl" target="_blank">
          {{ $t( 'cards.demo' ) }}
        </a>
      </button>
      <template v-if="cardData.gitUrl">
        <button class="btn btn-tertiary">
          <a :href="cardData.gitUrl" target="_blank">
            {{ $t( 'cards.source_code' ) }}
          </a>
        </button>
      </template>
    </div>

	</div>
</template>

<script src="./CardComponent.ts" lang="ts"></script>
<style src="./CardComponent.scss" scoped lang="scss"></style>