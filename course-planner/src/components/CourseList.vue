<template>
	<div class="panel panel-default">
		<div class="panel-heading">
	  	<h4 class="panel-title">
				<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Introductory</a>
	  	</h4>
		</div>
		<div id="collapseOne" class="panel-collapse collapse in">
	  	<div class="panel-body">
				<div class="course_label">
					<span>IT 411 - Scripting for Interactive Systems</span>
				</div>
				<div class="course_label">
					<span>HCI 406 - Website Design for HCI</span>
				</div>
				<div class="course_label">
					<span>HCI 402 - Foundations of Digital Design</span>
				</div>
				<div class="course_label">
					<span>IT 403 - Statistics and Data Analysis</span>
				</div>
	  	</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "CourseList",
  data() {
    return {};
  }
};
</script>

<style scoped>
.panel-group .panel,
.panel {
  border-radius: 0px;
}
.course_label {
  padding: 5px 10px;
  background: #124684;
  color: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>
