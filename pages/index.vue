<template>
  <section id="home-visite">
    <div class="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div
        class="
          left-column
          items-center
          flex
          align-center
          justify-center
          h-full
          px-24
        "
      >
        <div>
          <h1 class="font-extrabold">3D INTERACTIVE EXHIBITION</h1>
          <h2 class="font-extralight">An experience created by Maxime Eloir</h2>
          <p class="my-5 font-extralight">
            This website follows the experiments carried out in 2019 and 2020
            with virtual tours of the Matisse departmental museum: after using
            javascript libraries as well as the Unreal Engine game engine,
            learning Three.JS and exploring the SHUTDOWN.gallery gave me the
            idea of ​​doing an interactive browser tour with people ! The
            aesthetics of the site have also been strongly influenced by
            SHUTDOWN.gallery which I love very much.
          </p>

          <nuxt-link to="/visites/3" class="btn-stroke">Our last exhibition</nuxt-link>
        </div>
      </div>
      <div class="items-center flex align-center h-full" style="background-image:url('image_pres_3.png')"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IndexPage",
  mounted(){
     this.$nextTick(() => {
    window.socket.emit("hello");
     })
  }
};
</script>

<style lang="scss">
section#home-visite {
  h1{
    font-weight: 800;
    font-size: 3rem;
    line-height: 1;
  }
  h2{
    font-weight: 200;
  }
  .grid {
    .left-column {
      background-color: rgb(15 23 42);
    }
  }
}
</style>