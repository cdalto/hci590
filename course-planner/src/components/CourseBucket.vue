<template>
	<div class="bucket_wrapper">
		<drop class="course_bucket" @drop="handleDrop(list, ...arguments)">
			<div class="bucket_title">{{heading}}</div>
		</drop>
	</div>
</template>

<script>
import { Drag, Drop } from "vue-drag-drop";

export default {
  name: "CourseBucket",
  components: { Drag, Drop },
  props: ["list", "heading"],
  methods: {
    handleDrop(toList, data) {
      const fromList = data.list;
      if (fromList) {
        toList.push(data.item);
        fromList.splice(fromList.indexOf(data.item), 1);
        toList.sort((a, b) => a > b);
      }
    }
  }
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