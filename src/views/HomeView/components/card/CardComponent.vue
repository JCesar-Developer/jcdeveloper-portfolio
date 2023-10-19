<template>
	<div class="card-container" :class="{ 'right': positionRight }">

    <!-- Title -->
		<div class="title" :class="{ 'right': positionRight }">
			<span class="h2">{{ cardData.title }}</span>
		</div>

    <!-- Image -->
		<div class="image-container" :class="{ 'right': positionRight }">	
      <img class="image" :src="cardData.imageUrl" :alt="cardData.title">
		</div>

    <!-- Description -->
		<div class="description-card" :class="{ 'right': positionRight }">
			<span class="description-header p1-r garamond">{{ cardData.description.title }}</span>
			<span class="description-body p2-r" v-html="cardData.description.text"></span>
			
      <!-- Links -->
      <ul class="links" :class="{ 'right': positionRight }">
        <li>
          <router-link class="link p2-r" :to="{ name: 'study-case', params: { case: cardData.title } }">
            {{ $t( 'cards.read_more' ) }}
          </router-link>
        </li>
        <li>
          <a :href="cardData.gitUrl" class="link p2-r" target="_blank">
            {{ $t( 'cards.source_code' ) }}
          </a>
        </li>
      </ul>
		</div>

	</div>
</template>

<script src="./CardComponent.ts" lang="ts"></script>
<style src="./CardComponent.scss" scoped lang="scss"></style>