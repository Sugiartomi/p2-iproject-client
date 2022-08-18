<template>
  <tbody>
    <tr>
      <td>
        <img
          src="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png"
          alt=""
        />
        <a href="#" class="user-link">{{ data.User.username }}</a>
        <span class="user-subhead">{{ data.User.email }}</span>
      </td>
      <td>
        <a @click="changePage">{{ data.title }}</a>
      </td>
      <td>{{data.location}}</td>
      <td>{{ data.createdAt.substring(0, 10) }}</td>
      <td class="text-center">
        <span v-if="this.role =='admin'">
          <form action="">
            <select
              name=""
              v-model="data.status"
              @change="changeStatus"
            >
            <option value="pending">Pending</option>
            <option value="action">Action</option>
            <option value="done">Done</option>
            </select>
          </form>
        </span>
        <span v-if="this.role !=='admin'">
          {{data.status}}
        </span>
      </td>
      <td style="width: 20%">
        <a @click="changePage" class="table-link text-warning">
          <span class="fa-stack">
            <i class="fa fa-square fa-stack-2x"></i>
            <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
          </span>
          
        </a>
        
        <a @click="deleteRep" v-if="this.role =='admin'" class="table-link danger">
          <span class="fa-stack">
            <i class="fa fa-square fa-stack-2x"></i>
            <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
           
          </span>
        </a>
      </td>
    </tr>
  </tbody>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
  props: ["data"],
  computed : {
    ...mapState( useCounterStore, ["role"])
  },
  methods: {
    ...mapActions( useCounterStore, ["changeTheStatus", "deleteReport", "fetchingReport"]),
    changeStatus(){
      this.changeTheStatus(this.data.status, this.data.id)
    },
    changePage() {
      this.$router.push(`/report/${this.data.id}`);
    },
    deleteRep(){
      this.deleteReport(this.data.id)
      this.fetchingReport()
    }
  },
};
</script>
