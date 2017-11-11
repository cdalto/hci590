<template>
	<div class="bucket_wrapper">
    <draggable v-model="list" @start="drag=true" @end="drag=false" class="course_bucket">
      <div class="bucket_title">{{heading}}</div>
		  <div v-for="course in list" class="course_box"><strong>{{course.code}}</strong> - {{course.name}}
	  	  </div>
    </draggable>
	</div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "CourseBucket",
  components: { draggable },
  props: ["list", "heading"],
  methods: {}
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
  color:#fff;
  margin-bottom: 20px;
  vertical-align: top;
  height: 110px;
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