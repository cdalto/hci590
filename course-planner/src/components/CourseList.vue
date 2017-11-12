<template>
	<div class="panel panel-default">
		<div class="panel-heading">
	  	<h4 class="panel-title">
				<a data-toggle="collapse" data-parent="#accordion" :href="getPanelHref"><span class="glyphicon glyphicon-chevron-right"></span>{{heading}}</a>
	  	</h4>
		</div>
		<div :id="getPanelId" class="panel-collapse collapse">
	  	<div class="panel-body">
				<draggable v-model="list" @start="drag=true" @end="drag=false" :options="{group: getPanelId}" class="course_list_area">
					<div v-for="course in list" :key="course.code" class="course_label">
						<span>{{course.code}} - {{course.name}}</span>
					</div>
				</draggable>
	  	</div>
		</div>
	</div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "CourseList",
  components: { draggable },
  props: ["list", "heading"],
  computed: {
    getPanelId() {
      var panel_title = this.heading.replace(" ", "");
      return panel_title;
    },
    getPanelHref() {
      var panel_link = this.heading.replace(" ", "");
      return "#" + panel_link;
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.panel {
  border: 0.5px solid #efefef;
  box-shadow: none;
}
.panel-group .panel,
.panel {
  border-radius: 0px;
}
.panel-group .panel-heading + .panel-collapse > .list-group,
.panel-group .panel-heading + .panel-collapse > .panel-body {
  border-top: 0.5px solid #eee;
}
.panel-default > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #eee;
}
.panel-default > .panel-heading {
  background-color: #f5f5f5;
  background-image: none;
  border-radius: 0px;
}
.course_list_area {
  min-height: 10px;
}
.course_label {
  padding: 5px 10px;
  background: #d0b892;
  color: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 5px 5px 10px #ccc;
}
.glyphicon-chevron-down,
.glyphicon-chevron-right {
  margin-right: 5px;
}
</style>
