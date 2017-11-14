<template>
	<div class="bucket_wrapper">
	    <div class="course_bucket">
	      <div class="bucket_title">{{heading}}</div>
	      	<draggable v-model="list" @start="drag=true" @end="drag=false" :options="{group: getPanelId}" class="drop_area">
				  <div v-for="course in list" class="course_box">
					  <strong>{{course.code}}</strong> - {{course.name}}
					  <span class="glyphicon glyphicon-info-sign" data-toggle="modal" v-bind:data-target="['#course'+course.id]"></span>
					  <div class="modal fade" :id="'course' + course.id">
				  			<div class="modal-dialog">
								<div class="modal-content">
									  <div class="modal-header">
											<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
											<h4 class="modal-title">Course Details</h4>
									  </div>
									  <div class="modal-body info_box">
								  			<strong class="highlight">Code: </strong><span class="highlight">{{course.code}}</span><br/>
									  		<strong class="highlight">Name: </strong><span class="highlight">{{course.name}}</span><br/>
									  		<strong class="highlight">Type: </strong><span class="highlight">{{course.type}}</span><br/>
									  		<strong class="highlight">Description: </strong><span class="highlight">{{course.description}}</span><br/>
									  		<strong class="highlight">Offered in: </strong><span class="highlight" v-for="quarter in course.offered"><span><br/>{{ quarter }}</span></span><br/>
									  		<strong class="highlight">Prerequisites: </strong><span class="highlight" v-for="prerequisite in course.prereq"><span></br/>{{ prerequisite }}</span></span>
									  </div>
									  <div class="modal-footer">
											<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
									  </div>
								</div>
				  			</div>
				 	  </div> <!--Modal ends-->
			  	  </div>
	    	</draggable>
		</div>
	</div>
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
.drop_area {
  min-height: 150px;
  border: 1px dashed #ccc;
  padding-top:20px;
  padding-left:20px;
  padding-right:20px;
  padding-bottom:0px;
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
.glyphicon-info-sign {
  position: relative;
  top: 4px;
  left: 3px;
  font-size: 16px;
  cursor: pointer;
}
.modal-header {
  background-color: #90a9c7;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}
.modal-header .close {
  color: #ffffff;
  opacity: 1;
}
.info_box {
  border-bottom: 1px solid #cfcfcf;
}
.highlight {
  color: brown;
}
</style>