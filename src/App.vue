<template>
  <div id="app">
    <main class="mw6 center">
      <add-hero-button text="Add Hero" @add-hero="addHero" />
      <twitter-short-profile
        v-for="hero in heroes"
        :key="hero.name"
        :superhero="hero"
      />
    </main>
  </div>
</template>

<script>
import TwitterShortProfile from "./components/TwitterShortProfile.vue";
import AddHeroButton from "./components/AddHeroButton.vue";

const heroes = [
  {
    name: "Prof. Xavier",
    twitter: "@profx",
    pic:
      "http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0004.gif",
  },
  {
    name: "Spiderman",
    twitter: "@spidey",
    pic:
      "http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0008.gif",
  },
  {
    name: "Wolverine",
    pic:
      "http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0011.gif",
    twitter: "@logan",
  },
  {
    name: "Cyclops",
    twitter: "@oneye",
    pic:
      "http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0005.gif",
  },
  {
    name: "Storm",
    twitter: "@rainsitpours",
    pic:
      "http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0007.gif",
  },
  {
    name: "Phoenix",
    twitter: "@jeangrey",
    pic:
      "http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0016.gif",
  },
];

export default {
  name: "App",
  components: {
    TwitterShortProfile,
    AddHeroButton,
  },
  data: function() {
    return {
      storage: heroes,
      heroes: [],
    };
  },
  methods: {
    addHero() {
      this.storage.length > 0 && this.heroes.push(this.storage.pop());
    },
  },
};
</script>
