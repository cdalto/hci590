<template>
	<div class="bucket_wrapper">
		<div class="course_bucket">
			<div class="bucket_title">Introuductory Courses</div>
			<div class="course_box col-md-2">
				<div class="course_code">IT 411</div>
				<div class="course_name">Scripting for Interactive Systems</div>
			</div>
			<div class="course_box col-md-2">
				<div class="course_code">HCI 406</div>
				<div class="course_name">Website Design for HCI</div>
			</div>
			<div class="course_box col-md-2">
				<div class="course_code">HCI 402</div>
				<div class="course_name">Foundations of Digital Design</div>
			</div>
			<div class="course_box col-md-2">
				<div class="course_code">IT 403</div>
				<div class="course_name">Statistics and Data Analysis</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "CourseBucket"
};
</script>

<style scoped>
.bucket_wrapper {
  overflow: auto;
}
.course_bucket {
  background: #f5f5f5;
  overflow: auto;
  padding: 20px;
  margin-bottom: 20px;
  border: 0.5px solid #eee;
}
.course_box {
  background: #d0b892;
  width: 175px;
  margin-right: 20px;
  border-radius: 5px;
  display: inline-block;
  padding: 15px;
  box-shadow: 10px 10px 15px #ccc;
}
.bucket_title {
  color: #192f47;
  font-size: 22px;
  text-align: center;
  margin-bottom: 20px;
}
.course_code {
  color: #ffffff;
  font-weight: bold;
  font-size: 22px;
  text-align: center;
}
.course_name {
  color: #ffffff;
  text-align: center;
  font-size: 16px;
}
</style>