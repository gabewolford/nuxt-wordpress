<script setup>
const config = useRuntimeConfig();
const { data, refresh, pending } = await useFetch(config.public.wordpressUrl, {
  method: "get",
  query: {
    query: `
    query HomePageQuery {
      pages(where: {id: 8}) {
        nodes {
          hero {
            heroHeading
            heroSubheading
            heroLinkTo
            heroButtonText
            heroImage {
              sourceUrl
              altText
            }
          }
          leftContentBlock {
            lcbHeading
            lcbSubheading
            lcbLinkTo
            lcbButtonText
            lcbImage {
              sourceUrl
              altText
            }
          }
        }
      }
    }
    `,
  },
});

const heroData = data._rawValue.data.pages.nodes[0].hero;
const headingText = heroData.heroHeading;
const subheadingText = heroData.heroSubheading;
const buttonText = heroData.heroButtonText;
const linkTo = heroData.heroLinkTo;
const imageUrl = heroData.heroImage.sourceUrl;
const altText = heroData.heroImage.altText;

const lcbData = data._rawValue.data.pages.nodes[0].leftContentBlock;
const lcbHeading = lcbData.lcbHeading;
const lcbSubheading = lcbData.lcbSubheading;
const lcbButtonText = lcbData.lcbButtonText;
const lcbLinkTo = lcbData.lcbLinkTo;
const lcbImage = lcbData.lcbImage.sourceUrl;
const lcbAltText = lcbData.lcbImage.altText;
</script>

<template>
  <Hero
    :heading="headingText"
    :subheading="subheadingText"
    :buttonText="buttonText"
    :linkTo="linkTo"
    :imageUrl="imageUrl"
    :altText="altText"
  />
  <LeftContentBlock
    :heading="lcbHeading"
    :subHeading="lcbSubheading"
    :buttonText="lcbButtonText"
    :linkTo="lcbLinkTo"
    :imageUrl="lcbImage"
    :altText="lcbAltText"
  />
  <BrandsBar />
</template>
