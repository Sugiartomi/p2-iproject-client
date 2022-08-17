<template>
  <div class="modal show" id="modalCompose">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header modal-header-info">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-hidden="true"
            @click="cancelForm"
          >
            ×
          </button>
          <h4 class="modal-title">
            <span class="glyphicon glyphicon-envelope"></span> Send Report
          </h4>
        </div>
        <div class="modal-body">
          <form role="form" class="form-horizontal" @submit.prevent="laporBencana">
            <div class="form-group">
              <label class="col-sm-2" for="inputTo">Judul berita :</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="inputTo"
                  v-model="this.input.title"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2" for="inputSubject">Lokasi :</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="inputSubject"
                  v-model="this.input.location"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2" for="inputSubject">Total Korban :</label>
              <div class="col-sm-10">
                <input
                  type="number"
                  class="form-control"
                  id="inputSubject"
                  v-model="this.input.victim"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-12" for="inputBody"
                ><span class="glyphicon glyphicon-list"></span> Berita Acara
                :</label
              >
              <div class="col-sm-12">
                <textarea
                  class="form-control"
                  id="inputBody"
                  rows="8"
                  v-model="this.input.description"
                ></textarea>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              Send 
            </button>
          </form>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {

  data(){
    return {
      input : {
        title : "",
        description : "",
        victim : "",
        location : ""
      }
    }
  },
  computed : {
    ...mapWritableState( useCounterStore, ["addForm"])
  },
  methods : {
    ...mapActions( useCounterStore, ["addReport"] ),
    cancelForm(){
      this.addForm = false
    },
    laporBencana(){
      console.log("masuk");
      this.addReport(this.input)
  }}
}
</script>
