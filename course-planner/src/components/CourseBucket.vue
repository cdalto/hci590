<template>
	<div class="bucket_wrapper">
    <div class="course_bucket">
      <div class="bucket_title">{{heading}}</div>
<<<<<<< HEAD
		  <div v-for="course in list" class="course_box">
		  <strong>{{course.code}}</strong> - {{course.name}}
		  <span class="glyphicon glyphicon-info-sign pull-right" data-toggle="modal" data-target="#myModal"></span>
	  	  </div>
	  	  <div class="modal fade" id="myModal">
	  		<div class="modal-dialog">
				<div class="modal-content">
					  <div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true" v-on:click.prevent="remove_course_details">&times;</button>
							<h4 class="modal-title">Course Details</h4>
					  </div>
					  <div class="modal-body info_box" v-for="obj in CourseList">
				  			<span>#{{obj.id}}</span><br/>
					  		<strong>Course code: </strong><span>{{obj.code}}</span><br/>
					  		<strong>Course name: </strong><span>{{obj.course}}</span><br/>
					  		<strong>Course type: </strong><span>{{obj.type}}</span><br/>
					  		<strong class="highlight">Offered in: </strong><span v-for="quarter in obj.offered"><span><br/>{{ quarter }}</span></span><br/>
					  		<strong class="highlight">Prerequisites: </strong><span v-for="prerequisite in obj.prereq"><span></br/>{{ prerequisite }}</span></span>
					  </div>
					  <div class="modal-footer">
							<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					  </div>
				</div>
	  		</div>
		  </div> <!--Modal ends-->
    </draggable>
	</div>
=======
      <draggable v-model="list" @start="drag=true" @end="drag=false" :options="{group: getPanelId}" class="bucket_area">
		    <div v-for="course in list" :key="course.code" class="course_box"><strong>{{course.code}}</strong> - {{course.name}}
	  	  </div>
      </draggable>
	  </div>
  </div>
>>>>>>> ea25f5af739caa69f6859d37d5a59a998600964e
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "CourseBucket",
  components: { draggable },
  props: ["list", "heading"],
  computed: {
    getPanelId() {
      var panel_title = this.heading.replace(" ", "");
      return panel_title;
    }
  }
};
</script>

<style scoped>
.bucket_area {
  min-height: 10px;
}
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
  color: #fff;
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
.glyphicon-info-sign
{
	top: 48px;
    left: 4px;
    font-size: 16px;
    cursor: pointer;
}
</style>