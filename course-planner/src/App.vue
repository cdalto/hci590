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
        <CourseList :list="introductory_courses" heading="Introductory Courses"></CourseList>
        <CourseList :list="foundation_courses" heading="Foundation Courses"></CourseList>
        <CourseList :list="advanced_courses" heading="Advanced Courses"></CourseList>
        <CourseList :list="major_elective_courses" heading="Major Electives"></CourseList>
        <CourseList :list="open_elective_courses" heading="Open Electives"></CourseList>
      </div>
    </div>
    <div class="col-md-9">
        <CourseBucket :list="introductory_courses" heading="Introductory Courses"></CourseBucket>
        <CourseBucket :list="foundation_courses" heading="Foundation Courses"></CourseBucket>
        <CourseBucket :list="advanced_courses" heading="Advanced Courses"></CourseBucket>
        <CourseBucket :list="major_elective_courses" heading="Major Electives"></CourseBucket>
        <CourseBucket :list="open_elective_courses" heading="Open Electives"></CourseBucket>
    </div>
	</div>
</section>
  </div>
</template>

<script>
import CourseList from "./components/CourseList";
import CourseBucket from "./components/CourseBucket";
import { Drag, Drop } from 'vue-drag-drop';

export default {
  name: "app",
  components: {
    CourseList,
    CourseBucket,
    Drag,
    Drop
  },
  data() {
    return {
      introductory_courses: [
        {
          id: 1,
          name: "Scripting for Interactive Systems",
          code: "IT 411",
          type: "Introductory",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"]
        },
        {
          id: 2,
          name: "Website Design for HCI",
          code: "HCI 406",
          type: "Introductory",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"]
        },
        {
          id: 3,
          name: "Foundations of Digital Design",
          code: "HCI 402",
          type: "Introductory",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"]
        },
        {
          id: 4,
          name: "Statistics and Data Analysis",
          code: "IT 403",
          type: "Introductory",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"]
        }
      ],
      foundation_courses: [
        {
          id: 5,
          name: "Introduction to User-Centered Design",
          code: "HCI 440",
          type: "Foundation",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"]
        },
        {
          id: 6,
          name: "Introduction to User-Centered Development",
          code: "HCI 441",
          type: "Foundation",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"]
        },
        {
          id: 7,
          name: "Foundations of Human Computer Interaction",
          code: "HCI 450",
          type: "Foundation",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["IT 403"]
        },
        {
          id: 7,
          name: "Prototyping and Implemenation",
          code: "HCI 430",
          type: "Foundation",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["HCI 440"]
        }
      ],
      advanced_courses: [
        {
          id: 8,
          name: "Inquiry Methods and Use Analysis",
          code: "HCI 445",
          type: "Advanced",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["IT 403", "HCI 440"]
        },
        {
          id: 9,
          name: "IInteraction Design and Information Architecture",
          code: "HCI 454",
          type: "Advanced",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["HCI 406", "HCI 440"]
        },
        {
          id: 10,
          name: "Usability Evaluation Methods",
          code: "HCI 460",
          type: "Advanced",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["IT 403", "HCI 440"]
        },
        {
          id: 11,
          name: "Digital Design",
          code: "HCI 470",
          type: "Advanced",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["HCI 402", "HCI 406"]
        },
        {
          id: 12,
          name: "Accessibility and Design for Diverse Users",
          code: "HCI 511",
          type: "Advanced",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["HCI 445", "HCI 460"]
        },
        {
          id: 13,
          name: "Global User Research",
          code: "HCI 514",
          type: "Advanced",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["HCI 445", "HCI 460"]
        },
        {
          id: 14,
          name: "Design Ethnography",
          code: "HCI 515",
          type: "Advanced",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["HCI 445", "HCI 454", "HCI 430"]
        }
      ],
      major_elective_courses: [
        {
          id: 15,
          name: "Designing for Content Management Systems",
          code: "HCI 421",
          type: "Major Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["HCI 406"]
        },
        {
          id: 16,
          name: "Multimedia",
          code: "HCI 422",
          type: "Major Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["HCI 440"]
        },
        {
          id: 17,
          name: "Information Visualization and Infographics",
          code: "HCI 512",
          type: "Major Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["IT 403", "HCI 470"]
        },
        {
          id: 18,
          name: "Learner-Centered Design",
          code: "HCI 520",
          type: "Major Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["IT 403", "HCI 440", "HCI 450"]
        },
        {
          id: 19,
          name: "UX Strategy and Web Analytics",
          code: "HCI 522",
          type: "Major Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["IT 460"]
        },
        {
          id: 20,
          name: "Mobile Design",
          code: "HCI 530",
          type: "Major Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["HCI 454"]
        },
        {
          id: 21,
          name: "Social Interaction Design",
          code: "HCI 553",
          type: "Major Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["HCI 454"]
        },
        {
          id: 22,
          name: "User Experience Design Practicum",
          code: "HCI 580",
          type: "Major Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["HCI 445", "HCI 454"]
        },
        {
          id: 23,
          name: "Topics in Human-Computer Interaction",
          code: "HCI 590",
          type: "Major Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"]
        }
      ],
      open_elective_courses: [
        {
          id: 24,
          name: "Information Security Management",
          code: "CNS 440",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"]
        },
        {
          id: 25,
          name: "Data Analysis and Regression",
          code: "CNS 423",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["IT 403"]
        },
        {
          id: 26,
          name: "Advanced Data Analysis",
          code: "CSC 424",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["CSC 423"]
        },
        {
          id: 27,
          name: "Database Design",
          code: "CSC 451",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"]
        },
        {
          id: 28,
          name: "Data Visualization",
          code: "CSC 465",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["IT 403", "IT 411"]
        },
        {
          id: 29,
          name: "Cognitive Science",
          code: "CSC 587",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["CSC 403", "HCI 460"]
        },
        {
          id: 30,
          name: "E-Commerce Web Site Engineering",
          code: "ECT 455",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["IT 411", "HCI 430"]
        },
        {
          id: 31,
          name: "Intranets and Portals",
          code: "ECT 480",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["ECT 424"]
        },
        {
          id: 32,
          name: "Customer Relationship Management Technologies",
          code: "ECT 586",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["ECT 424"]
        },
        {
          id: 33,
          name: "Game Design Workshop",
          code: "GAM 424",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"]
        },
        {
          id: 34,
          name: "Requirements Elicitation, Analysis, and Specification",
          code: "IS 485",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["PM 430", "IS 422", "IS 430"]
        },
        {
          id: 35,
          name: "Social Issues of Computing",
          code: "IS 511",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"]
        },
        {
          id: 36,
          name: "Enterprise System Implementation",
          code: "IS 570",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["PM 430"]
        },
        {
          id: 37,
          name: "Web Architecture",
          code: "IT 432",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["IT 411"]
        },
        {
          id: 38,
          name: "Topics in Information Technology",
          code: "IT 590",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"]
        },
        {
          id: 39,
          name: "Decisions in Marketing Management",
          code: "MKT 555",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"]
        },
        {
          id: 40,
          name: "Fundamentals of IT Project Management",
          code: "PM 430",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"]
        },
        {
          id: 41,
          name: "Software and Systems Project Management",
          code: "SE 477",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"]
        },
        {
          id: 42,
          name: "Collaborative Technologies for Leading Projects",
          code: "PM 440",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"]
        },
        {
          id: 43,
          name: "Perception and Cognition",
          code: "PSY 404",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"]
        },
        {
          id: 44,
          name: "The Psychology of Judgment and Decision- Making",
          code: "PSY 473",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"]
        },
        {
          id: 45,
          name: "Industrial and Organizational Psychology",
          code: "PSY 473",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"]
        },
        {
          id: 46,
          name: "Object Oriented Modeling",
          code: "SE 430",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"]
        },
        {
          id: 47,
          name: "Requirements Engineering",
          code: "SE 482",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"]
        }
      ]
    };
  }
};
</script>

<style>
.navbar {
  background: #90a9c7;
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
</style>
