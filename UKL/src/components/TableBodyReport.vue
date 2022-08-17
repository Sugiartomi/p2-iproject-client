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
        <a @click="changePage">{{ data.title }}</a></td>
      <td>{{ data.createdAt.substring(0, 10) }}</td>
      <td class="text-center">
        <span class="label label-default">{{ data.status }}</span>
      </td>

      <td style="width: 20%">
        <a href="#" class="table-link text-warning">
          <span class="fa-stack">
            <i class="fa fa-square fa-stack-2x"></i>
            <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
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
  </tbody>
</template>

<script>
export default {
  props: ["data"],
  methods : {
    changePage(){
      this.$router.push(`/report/${this.data.id}`)
    }
  }
};
</script>
