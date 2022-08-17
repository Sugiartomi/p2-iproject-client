<template>
  <div class="container bootstrap-snippet header-container">
    <div class="bg-white">
      <div class="container py-5">
        <div
          class="media col-md-10 col-lg-8 col-xl-7 p-0 my-4 mx-auto"
          id="box-1"
        >
          <div class="media-body ml-5" id="desc-case">
            <h2 class="font-weight-bold mb-4">Berita Bencana</h2>
            <h4>Pelapor : user</h4>
            <div class="text-muted mb-4">
              <br /><br />
              Lokasi :
              <br /><br />
              Jumlah korban :
              <br /><br />
              Berita acara :
            </div>
            <div class="text-muted mb-4"></div>
            <div class="text-muted mb-4"></div>
            <div class="text-muted mb-4">
              Lorem ipsum dolor sit amet, nibh suavitate qualisque ut nam. Ad
              harum primis electram duo, porro principes ei has.
            </div>
            <div class="text-muted mb-4">
              Lorem ipsum dolor sit amet, nibh suavitate qualisque ut nam. Ad
              harum primis electram duo, porro principes ei has.
            </div>
            <div class="text-muted mb-4">
              Lorem ipsum dolor sit amet, nibh suavitate qualisque ut nam. Ad
              harum primis electram duo, porro principes ei has.
            </div>
          </div>

          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="600"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=-7.9812,112.629&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe
              ><a href="https://putlocker-is.org">putlocker</a><br />
            </div>
          </div>

          <div class="media-body ml-5" id="desc-case">
            <h2 class="font-weight-bold mb-4">Berita Bencana</h2>
            <h4>Pelapor : user</h4>
            <div class="text-muted mb-4">
              <br /><br />
              Lokasi :
              <br /><br />
              Jumlah korban :
              <br /><br />
              Berita acara :
            </div>
            <div class="text-muted mb-4"></div>
            <div class="text-muted mb-4"></div>
            <div class="text-muted mb-4">
              Lorem ipsum dolor sit amet, nibh suavitate qualisque ut nam. Ad
              harum primis electram duo, porro principes ei has.
            </div>
            <div class="text-muted mb-4">
              Lorem ipsum dolor sit amet, nibh suavitate qualisque ut nam. Ad
              harum primis electram duo, porro principes ei has.
            </div>
            <div class="text-muted mb-4">
              Lorem ipsum dolor sit amet, nibh suavitate qualisque ut nam. Ad
              harum primis electram duo, porro principes ei has.
            </div>
          </div>
        </div>
      </div>
      <!-- <hr class="m-0" /> -->
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    methods : {
        ...mapActions( useCounterStore, ["fetchingReportById"])
    },
    created(){
        console.log("masuk");
        console.log(this.$route.path);
    }
}
</script>

<style>
#box-1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

#desc-case {
  margin-left: 50px;
}

#img-case {
  width: 20%;
  height: 20%;
}

.mapouter {
  position: relative;
  text-align: center;
  height: 500px;
  width: 600px;
  margin-left: 50px;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 500px;
  width: 600px;
}
</style>
