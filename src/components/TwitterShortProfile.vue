<script>
export default {
  name: "twitter-short-profile",
  props: {
    superhero: Object,
  },
  methods: {
    isFollowing(hero) {
      this.$set(hero, "isFollowing", !hero.isFollowing);
      if (hero.isFollowing === true) {
        console.log(`Following ${hero.name}`);
      } else {
        console.log(`Unfollowing ${hero.name}`);
      }
    },
  },
};
</script>

<template>
  <article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
    <div class="dtc w2 w3-ns v-mid">
      <img
        :src="superhero.pic"
        class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
      />
    </div>
    <div class="dtc v-mid pl3">
      <h1 class="f6 f5-ns fw6 lh-title black mv0">{{ superhero.name }}</h1>
      <h2 class="f6 fw4 mt0 mb0 black-60">{{ superhero.twitter }}</h2>
    </div>
    <div class="dtc v-mid">
      <form class="w-100 tr" @submit.prevent="isFollowing(superhero)">
        <button
          class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"
          type="submit"
        >
          {{ superhero.isFollowing ? "- Unfollow" : "+ Follow" }}
        </button>
      </form>
    </div>
  </article>
</template>
