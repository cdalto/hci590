<template>
	<div class="panel panel-default">
		<div class="panel-heading">
	  	<h4 class="panel-title">
				<a data-toggle="collapse" data-parent="#accordion" :href="getPanelHref">{{heading}}</a>
	  	</h4>
		</div>
		<div :id="getPanelId" class="panel-collapse collapse">
	  	<div class="panel-body">
				<drag v-for="course in list" :key="course.code" :class="{[course]: true}" :transferData="{ course, list }" class="course_label">
					<span>{{course.code}} - {{course.name}}</span>
				</drag>
	  	</div>
		</div>
	</div>
</template>

<script>
import { Drag, Drop } from "vue-drag-drop";

export default {
  name: "CourseList",
  components: { Drag, Drop },
  props: ["list", "heading"],
  computed: {
  	getPanelId(){
  		var panel_title = this.heading.replace(" ","");
  		return panel_title;
  	},
  	getPanelHref(){
  		var panel_link = this.heading.replace(" ","");
  		return "#" + panel_link;
  	}
  },
  data() {
    return {}
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
.course_label {
  padding: 5px 10px;
  background: #d0b892;
  color: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 5px 5px 10px #ccc;
}
</style>
