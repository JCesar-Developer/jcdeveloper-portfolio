<template>
	<router-view/>
</template>

<style lang="scss">
@import './styles/utilities.scss', './styles/typography.scss', './styles/color.scss', './styles/variables.scss';
* {
	h1, h2, h3, h4, h5, p {
		margin: 0;
		padding: 0;
	}

	font-family: 'Inter', sans-serif;
	font-weight: 300;
	font-size: 16px;
	color: white;

	a {
		text-decoration: none;
	}
}
body {
	margin: 0;
	padding: 0;
}
</style>
