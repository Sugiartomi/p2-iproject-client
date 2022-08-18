<template>
  <section>
    <div class="container bootstrap bootdey" id="principal-content">
      <div class="row">
        <div class="col-md-12">
          <article>
            <header>
              <h2 class="text-primary text-center"></h2>
            </header>

            <div class="row" id="design">
              <div class="col-md-4 col-md-offset-1">
                <div class="home-design-info">
                  <figure>
                    <img
                      id="gambar2"
                      class="img-circle img-thumbnail"
                      src="https://render.fineartamerica.com/images/rendered/default/shower-curtain/images/artworkimages/medium/1/1-mahatma-gandhi-wayne-pascall.jpg?&targetx=-85&targety=0&imagewidth=957&imageheight=819&modelwidth=787&modelheight=819&backgroundcolor=717171&orientation=0"
                    />
                  </figure>
                </div>
              </div>
              <div class="col-md-6">
                <div class="deets">
                  <h3 class="text-primary">Mahatma Gandi</h3>

                  <p>
                    The best way to find yourself <br />
                    is to lose yourself in the service of others
                  </p>
                </div>
              </div>
            </div>
            <br /><br />
            <div class="row" id="develop">
              <div class="col-md-4 col-md-push-7">
                <div class="home-dev-info">
                  <figure id="gambar2">
                    <img
                      class="img-circle img-thumbnail"
                      src="https://1.bp.blogspot.com/-bjnuJNGWlBw/WM_ml-UY_MI/AAAAAAAAAac/HQcRoF45d6oU2t_gVUdNf7qGGNNZ4hfDQCLcB/s1600/dalai%2Blama.jpg"
                    />
                  </figure>
                </div>
              </div>
              <div class="col-md-6 mt-4 col-md-pull-3">
                <div class="deets">
                  <h3 class="text-primary">Tenzin Gyatso</h3>
                  <p>
                    Be a good human being, a warmhearted, affectionate person.
                    <br />
                    That is my fundamental belief
                  </p>
                </div>
              </div>
            </div>
            <!-- /row -->
          </article>
        </div>
      </div>
    </div>
    <div id="boxquote">
      <div>
        <h3>Click button to get you spirit</h3>
      </div>
      <div><button @click="getQuote">click</button></div>
      <div>
        <h3>{{ quotes.text }}</h3>
      </div>
      <div style="margin-bottom: 100px">
        <p>
          -- <strong>{{ quotes.author }}</strong> --
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  methods: {
    ...mapActions(useCounterStore, ["spiritQuote"]),
    getQuote() {
      this.spiritQuote();
    },
  },
  computed: {
    ...mapState(useCounterStore, ["quotes"]),
  },
  created() {
    // this.fetchingQuote()
  },
};
</script>

<style>
#boxquote {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 600px; */
}

#boxquote button {
  margin-top: 20px;
  margin-bottom: 50px;
  height: 30px;
  width: 120px;
}

section {
  height: 400px;
  margin-bottom: 100px;
}
body {
  margin-top: 20px;
  margin-bottom: 30px;
}

#gambar2 {
  /* background-color: aqua; */
  width: 50%;
  height: 50%;
}

#principal-content {
  /* background-color: aqua; */
  width: 50%;
  margin-bottom: 50px;
}
</style>
