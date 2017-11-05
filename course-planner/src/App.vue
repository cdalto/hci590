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
      <div class="panel-group" id="accordion">
        <CourseList/>
      </div>
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
