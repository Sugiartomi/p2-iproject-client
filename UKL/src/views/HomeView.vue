<template>

  <!-- MAIN PAGE -->
  <div class="container bootstrap snippets bootdey">
    
    <div class="row">
      <div class="col-lg-12">
        <div class="main-box no-header clearfix">
          <div class="main-box-body clearfix">
            <div class="table-responsive">
              <FormReport v-if="this.addForm == true" />

              <table class="table user-list">
                <thead>
                  <tr>
                    <th><span>User</span></th>
                    <th><span>Report</span></th>
                    <th><span>Location</span></th>
                    <th><span>Created</span></th>
                    <th class="text-center"><span>Status</span></th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>

                <TableBodyReport v-for="el in this.reports" :data="el" />

                <!-- <tr>
                    <td>
                      <img
                        src="https://bootdey.com/img/Content/user_3.jpg"
                        alt=""
                      />
                      <a href="#" class="user-link">Full name 2</a>
                      <span class="user-subhead">Admin</span>
                    </td>
                    <td>2013/08/12</td>
                    <td class="text-center">
                      <span class="label label-success">Active</span>
                    </td>
                    <td>
                      <a href="#">marlon@brando.com</a>
                    </td>
                    <td style="width: 20%">
                      <a href="#" class="table-link text-warning">
                        <span class="fa-stack">
                          <i class="fa fa-square fa-stack-2x"></i>
                          <i
                            class="fa fa-search-plus fa-stack-1x fa-inverse"
                          ></i>
                        </span>
                      </a>
                      <a href="#" class="table-link text-info">
                        <span class="fa-stack">
                          <i class="fa fa-square fa-stack-2x"></i>
                          <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                      <a href="#" class="table-link danger">
                        <span class="fa-stack">
                          <i class="fa fa-square fa-stack-2x"></i>
                          <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://bootdey.com/img/Content/user_2.jpg"
                        alt=""
                      />
                      <a href="#" class="user-link">Full name 3</a>
                      <span class="user-subhead">Member</span>
                    </td>
                    <td>2013/08/12</td>
                    <td class="text-center">
                      <span class="label label-danger">inactive</span>
                    </td>
                    <td>
                      <a href="#">marlon@brando.com</a>
                    </td>
                    <td style="width: 20%">
                      <a href="#" class="table-link text-warning">
                        <span class="fa-stack">
                          <i class="fa fa-square fa-stack-2x"></i>
                          <i
                            class="fa fa-search-plus fa-stack-1x fa-inverse"
                          ></i>
                        </span>
                      </a>
                      <a href="#" class="table-link text-info">
                        <span class="fa-stack">
                          <i class="fa fa-square fa-stack-2x"></i>
                          <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                      <a href="#" class="table-link danger">
                        <span class="fa-stack">
                          <i class="fa fa-square fa-stack-2x"></i>
                          <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </td>
                  </tr> 
                </tbody>-->
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- FORM -->
</template>

<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
import TableBodyReport from "../components/TableBodyReport.vue";
import FormReport from "../components/FormReport.vue";


export default {
  components: {
    TableBodyReport,
    FormReport,
  },
  computed: {
    ...mapWritableState(useCounterStore, ["isLogin", "addForm", "role"]),
    ...mapState(useCounterStore, ["reports"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchingReport"]),
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.fetchingReport();
      this.role = localStorage.getItem('role')
      this.isLogin = true;
    } else {
      this.$router.push("/login");
    }
  },
};
</script>
