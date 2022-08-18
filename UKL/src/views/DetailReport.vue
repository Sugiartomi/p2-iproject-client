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
            <h4>Pelapor : {{detailReport.data.User.username}}</h4>
            <h4>Status penanganan : {{detailReport.data.status}}</h4>
            <div class="text-muted mb-4">
              <br /><br />
              Lokasi : <strong>{{this.detailReport.data.location}}</strong>
              <br /><br />
              Jumlah korban : <strong>{{this.detailReport.data.victim}}</strong>
              <br /><br />
              Berita acara :
              <br><br>
              <p>
                  {{this.detailReport.data.description}}
              </p>
              <br><br>
                  <h2>Peta Lokasi</h2>
            </div>
            
  
          </div>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="600"
                height="500"
                id="gmap_canvas"
                :src="this.detailReport.mapUrl"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe
              ><a href="https://putlocker-is.org">putlocker</a><br />
            </div>
          </div>

          <div class="media-body ml-5" id="desc-case">
            <h2 class="font-weight-bold mb-4">Informasi Lingkungan</h2>
            <h4>( Tanggal : {{this.detailReport.survey.date}} )</h4>
            <div class="text-muted mb-4">
              <br /><br />
              <p>Koordinat : {{this.detailReport.lat}},{{this.detailReport.long}}</p>
              <p>Suhu udara tertinggi : {{this.detailReport.survey.tempmax}} °C</p>
              <p>Suhu udara terendah : {{this.detailReport.survey.tempmin}} °C</p>
              <p>Kelembapan udara : {{this.detailReport.survey.humidity}} RH</p>
              <p>Kecepatan angin : {{this.detailReport.survey.windspeed}} Knots</p>
              <p>Jarak Pandang : {{this.detailReport.survey.visibility}} NM (Nautical Meter) </p>
            </div>
            <div class="text-muted mb-4">
              Cuaca : 
              <p>{{this.detailReport.survey.description}}</p>

            </div>
            <div class="text-muted mb-4">
              Jam kiatan rescue : <br>
              <p>Berdasarkan perkiraan cuaca dan pergerakan matahari, kegiatan rescue sebaiknya dimuali pada pukul <strong>{{this.detailReport.survey.sunrise}}</strong> sampai dengan <strong>{{this.detailReport.survey.sunset}}</strong>, diharapkan kegiatan akan maksimal mengingat pencahaan yang masih cukup terang. Dianjurkan untuk menghentikan kegiatan jika sudah melebihi jam operasional</p>
            </div>
            <div class="text-muted mb-4">
            
            </div>
          </div>
        </div>
      </div>
      <!-- <hr class="m-0" /> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    data(){
        return {

        }
    },
    computed : {
        ...mapState( useCounterStore, ["detailReport"])
    },
    methods : {
        ...mapActions( useCounterStore, ["fetchingReportById"])
    },
    created(){
        
        let id = this.$route.path.slice(8)
        this.fetchingReportById(id)

        console.log(this.detailReport.mapUrl);
    }
}
</script>

<style>
#box-1 {
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 50px;
}

#desc-case {
    /* background-color: aqua; */
  margin-left: 50px;
  float:  left;
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
  margin-top: 20px;
  margin-bottom: 50px;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 500px;
  width: 600px;
}
</style>
