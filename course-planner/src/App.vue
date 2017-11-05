<template>
  <div id="app">
<header>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
		  <a class="navbar-brand" href="#"><img class="logo" src="./assets/logo.png"/></a>
          <a class="navbar-brand" href="#">Your HCI Course Planner</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
		  <ul class="nav navbar-nav navbar-right">
			  <li class="dropdown">
				<a href="#" class="dropdown-toggle" data-toggle="dropdown">Hi, Stuart&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-user"></span> <b class="caret"></b></a>
				<ul class="dropdown-menu">
				  <li><a href="#">Profile</a></li>
				  <li><a href="#">Settings</a></li>
				  <li><a href="#">Logout</a></li>
				</ul>
			  </li>
		   </ul>
      </div>
    </div><!--/.nav-collapse -->
    </nav>
	</header>

<section>
	<div class="container" id="coursePanel">
    <div class="col-md-3">
      <CourseList/>
    </div>
    <div class="col-md-9">
      <CourseBucket/>
    </div>
	</div>
</section>
  </div>
</template>

<script>
import CourseList from "./components/CourseList";
import CourseBucket from "./components/CourseBucket";

export default {
  name: "app",
  components: {
    CourseList,
    CourseBucket
  },
  data() {
    return {
      introductory_courses: [
         {id:1, name: "Scripting for Interactive Systems", code: "IT 411", type: "Introductory", offered: ["Fall", "Winter", "Spring"], prereq:["None"]},
         {id:2, name: "Website Design for HCI", code: "HCI 406", type: "Introductory", offered: ["Fall", "Winter", "Spring"], prereq: ["None"]},
         {id:3, name: "Foundations of Digital Design", code: "HCI 402", type: "Introductory", offered: ["Fall", "Winter", "Spring"], prereq: ["None"]},
         {id:4, name: "Statistics and Data Analysis", code: "IT 403", type: "Introductory", offered: ["Fall", "Winter", "Spring"], prereq: ["None"]}
      ],
      foundation_courses: [
         {id:5, name: "Introduction to User-Centered Design", code: "HCI 440", type: "Foundation", offered: ["Fall", "Winter", "Spring"], prereq: ["None"]},
         {id:6, name: "Introduction to User-Centered Development", code: "HCI 441", type: "Foundation", offered: ["Fall", "Winter", "Spring"], prereq: ["None"]},
         {id:7, name: "Foundations of Human Computer Interaction", code: "HCI 450", type: "Foundation", offered: ["Fall", "Winter", "Spring"], prereq: ["IT 403"]},
         {id:7, name: "Prototyping and Implemenation", code: "HCI 430", type: "Foundation", offered: ["Fall", "Winter", "Spring"], prereq: ["HCI 440"]}
      ],
      advanced_courses: [
         {id:8, name: "Inquiry Methods and Use Analysis", code: "HCI 445", type: "Advanced", offered: ["Fall", "Winter", "Spring"], prereq: ["IT 403", "HCI 440"]},
         {id:9, name: "IInteraction Design and Information Architecture", code: "HCI 454", type: "Advanced", offered: ["Fall", "Winter", "Spring"], prereq: ["HCI 406", "HCI 440"]},
         {id:10, name: "Usability Evaluation Methods", code: "HCI 460", type: "Advanced", offered: ["Fall", "Winter", "Spring"], prereq: ["IT 403","HCI 440"]},
         {id:11, name: "Digital Design", code: "HCI 470", type: "Advanced", offered: ["Fall", "Winter", "Spring"], prereq: ["HCI 402", "HCI 406"]},
         {id:12, name: "Accessibility and Design for Diverse Users", code: "HCI 511", type: "Advanced", offered: ["Fall", "Winter", "Spring"], prereq: ["HCI 445", "HCI 460"]},
         {id:13, name: "Global User Research", code: "HCI 514", type: "Advanced", offered: ["Fall", "Winter", "Spring"], prereq: ["HCI 445", "HCI 460"]},
         {id:14, name: "Design Ethnography", code: "HCI 515", type: "Advanced", offered: ["Fall", "Winter", "Spring"], prereq: ["HCI 445", "HCI 454", "HCI 430"]}
      ],
      major_elective_courses: [
         {id:15, name: "Designing for Content Management Systems", code: "HCI 421", type: "Major Elective", offered: ["Fall", "Winter", "Spring"], prereq: ["HCI 406"]},
         {id:16, name: "Multimedia", code: "HCI 422", type: "Major Elective", offered: ["Fall", "Winter", "Spring"], prereq: ["HCI 440"]},
         {id:17, name: "Information Visualization and Infographics", code: "HCI 512", type: "Major Elective", offered: ["Fall", "Winter", "Spring"], prereq: ["IT 403", "HCI 470"]},
         {id:18, name: "Learner-Centered Design", code: "HCI 520", type: "Major Elective", offered: ["Fall", "Winter", "Spring"], prereq: ["IT 403", "HCI 440", "HCI 450"]},
         {id:19, name: "UX Strategy and Web Analytics", code: "HCI 522", type: "Major Elective", offered: ["Fall", "Winter", "Spring"], prereq: ["IT 460"]},
         {id:20, name: "Mobile Design", code: "HCI 530", type: "Major Elective", offered: ["Fall", "Winter", "Spring"], prereq: ["HCI 454"]},
         {id:21, name: "Social Interaction Design", code: "HCI 553", type: "Major Elective", offered: ["Fall", "Winter", "Spring"], prereq: ["HCI 454"]},
         {id:22, name: "User Experience Design Practicum", code: "HCI 580", type: "Major Elective", offered: ["Fall", "Winter", "Spring"], prereq: ["HCI 445","HCI 454"]},
         {id:23, name: "Topics in Human-Computer Interaction", code: "HCI 590", type: "Major Elective", offered: ["Fall", "Winter", "Spring"], prereq: ["None"]},
      ],
      open_elective_courses: []
    };
  }

};
</script>

<style>
/* header styles begin */
.navbar {
  background: #124684;
}
.navbar a,
.navbar a:hover {
  color: #ffffff;
}
.nav > li > a:focus,
.nav > li > a:hover,
.nav .open > a,
.nav .open > a:focus,
.nav .open > a:hover {
  background: none;
}
.logo {
  display: inline-block !important;
  height: 40px;
  width: 40px;
  margin-top: -9px;
}
/* header styles end */

/* left panel styles begin */
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
/* left panel styles end */

/* course bucket styles begin */
.bucket_wrapper {
  overflow: auto;
}
.course_bucket {
  background: #f5f5f5;
  overflow: auto;
  padding: 20px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
}
.course_box {
  background: #124684;
  width: 175px;
  margin-right: 20px;
  display: inline-block;
  padding: 15px;
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
/* course bucket styles end */
</style>
