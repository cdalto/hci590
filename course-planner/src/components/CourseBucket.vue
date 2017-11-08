<template>
	<div class="bucket_wrapper">
		<div class="course_bucket">
			<div class="bucket_title">{{heading}}</div>
			<div v-for="course in list" class="course_box col-md-2">
				<div class="course_code">{{course.code}}</div>
				<div class="course_name">{{course.name}}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "CourseBucket",
  props: ["list", "heading"]
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