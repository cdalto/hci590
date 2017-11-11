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
        <div class="alert alert-warning alert-dismissable">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            Drag and drop courses from the course list on the left to the corresponding course bucket on the right.
        </div>
        <CourseBucket :list="introductory_courses_bucket" heading="Introductory Courses"></CourseBucket>
        <CourseBucket :list="foundation_courses_bucket" heading="Foundation Courses"></CourseBucket>
        <CourseBucket :list="advanced_courses_bucket" heading="Advanced Courses"></CourseBucket>
        <CourseBucket :list="major_elective_courses_bucket" heading="Major Electives"></CourseBucket>
        <CourseBucket :list="open_elective_courses_bucket" heading="Open Electives"></CourseBucket>
    </div>
	</div>
</section>
  </div>
</template>

<script>
import CourseList from "./components/CourseList";
import CourseBucket from "./components/CourseBucket";
import { Drag, Drop } from "vue-drag-drop";

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
          prereq: ["None"],
          description: "Introductory scripting for developing interactive web pages. Overview of HTML and CSS. Elementary programming concepts using JavaScript for learning control structures, functions, arrays, and object use. User interface development concepts include event handling and use of JavaScript libraries such as jQuery. Review of web clients, servers and architecture."
        },
        {
          id: 2,
          name: "Website Design for HCI",
          code: "HCI 406",
          type: "Introductory",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"],
          description: "Web design introduced in a user-centered context. Application of visual design principles and common design patterns for web sites and mobile interfaces. Page markup using HTML and CSS addressing responsive web design, accessibility, and search engine optimization."
        },
        {
          id: 3,
          name: "Foundations of Digital Design",
          code: "HCI 402",
          type: "Introductory",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"],
          description: "Shape, line on two-dimensional surfaces. Color. Composition rules as they apply to digitally created documents. Digital manipulation of two-dimensional images. Use of commercially available draw and paint tools to create two-dimensional designs."
        },
        {
          id: 4,
          name: "Statistics and Data Analysis",
          code: "IT 403",
          type: "Introductory",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"],
          description: "Introduction to univariate data analysis methods. Descriptive statistics and data visualization methods. Overview of sampling techniques for data collection, and introduction to statistical inference methods for decision making including simple linear regression, estimation procedures using confidence intervals and hypothesis testing."
        }
      ],
      foundation_courses: [
        {
          id: 5,
          name: "Introduction to User-Centered Design",
          code: "HCI 440",
          type: "Foundation",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"],
          description: "The user-interface development process. Introduction to methods for practicing user-centered design including user and task analysis, user interface design principles and testing using low-fidelity prototypes. Students may not receive credit for this course and HCI 441."
        },
        {
          id: 6,
          name: "Introduction to User-Centered Development",
          code: "HCI 441",
          type: "Foundation",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"],
          description: "Overview of the user-centered design (UCD) process with an additional emphasis on user interface development. Coverage of UCD process includes effective, low-cost methods for user research, interaction design and evaluation. User interface development involves application of front-end development languages (HTML and JavaScript) and frameworks (jQery). This course is offered to students with programming experience as an alternative to IT 411 and HCI 440. Students may not receive credit for this course and HCI 440."
        },
        {
          id: 7,
          name: "Foundations of Human Computer Interaction",
          code: "HCI 450",
          type: "Foundation",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["IT 403"],
          description: "Application of engineering and psychological theory to the design of computer systems. Overview of applicable research methods and research on perception, cognition, errors, and screen design. Attention will be given to creating and applying guidelines derived from research."
        },
        {
          id: 7,
          name: "Prototyping and Implemenation",
          code: "HCI 430",
          type: "Foundation",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["HCI 440"],
          description: "Overview of prototyping methods ranging from low-fidelity to interactive script-based prototypes. Analysis of prototyping tools and their relative advantages. Projects include prototype development over multiple iterations using a variety of strategies."
        }
      ],
      advanced_courses: [
        {
          id: 8,
          name: "Inquiry Methods and Use Analysis",
          code: "HCI 445",
          type: "Advanced",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["IT 403", "HCI 440"],
          description: "This course provides students with the skills necessary to acquire and organize user information for the purpose of developing task and systems analyses. Topics covered include survey construction and administration, structured observation, interviewing, and participatory design. Students learn to evaluate and organize user information toward making analysis and design decisions. Human communication and presentation skills are developed."
        },
        {
          id: 9,
          name: "Interaction Design and Information Architecture",
          code: "HCI 454",
          type: "Advanced",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["HCI 406", "HCI 440"],
          description: "Information architecture and interactive page design. Perception and use of menus, labels and user controls. Structuring information for navigation and presentation. Selecting and placing user controls for optimizing task flow on pages and across pages. Creating wire frames and using content managers."
        },
        {
          id: 10,
          name: "Usability Evaluation Methods",
          code: "HCI 460",
          type: "Advanced",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["IT 403", "HCI 440"],
          description: "Survey of evaluation methods that can be applied to user interfaces. Methods include expert inspections, walkthroughs, usability testing and analytical approaches. Students evaluate existing systems by applying some of these methods."
        },
        {
          id: 11,
          name: "Digital Design",
          code: "HCI 470",
          type: "Advanced",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["HCI 402", "HCI 406"],
          description: "Focus on the visual aspects of interfaces for information and communication technologies (ICTs). Evaluate, critique and create ICT interfaces using design principles. Learn to choose color, type, layout and imagery to create aesthetic and usable ICT interfaces. Introduction to information visualization. Applying course concepts, students create and develop their own web-based portfolio."
        },
        {
          id: 12,
          name: "Accessibility and Design for Diverse Users",
          code: "HCI 511",
          type: "Advanced",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["HCI 445", "HCI 460"],
          description: "Methods and principles for designing interactive technologies for diverse users, including children, elderly, and people with disabilities and alternative skills. Analysis of how current technologies address diverse user needs and considerations about how technologies might be improved to better meet diverse user needs. Class projects include a web accessibility evaluation based on current w3 standards and an in-depth research project in which students ideate a new technology or evaluate an existing technology in which they work directly with people who have disabilities."
        },
        {
          id: 13,
          name: "Global User Research",
          code: "HCI 514",
          type: "Advanced",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["HCI 445", "HCI 460"],
          description: "Theories and approaches for conducting HCI research and creating digital media for international audiences. Varied topics include (a) cultural models and global differences that influence design of digital artifacts (b) approaches to conducting usability and other types of user research and (c) information communication and technologies for development (ICT4D)."
        },
        {
          id: 14,
          name: "Design Ethnography",
          code: "HCI 515",
          type: "Advanced",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["HCI 445", "HCI 454", "HCI 430"],
          description: "This discussion course focuses on topics related to ethnographic methods such as activity theory, value sensitive design, online ethnography and reflexivity. Students will conduct participatory observations, interviews, and diary studies (all methods designed to engage with users 'in the wild') and translate the results from those studies into design implications. In this service learning course, students will work with community partners to conduct ethnographic studies and design a tool for the organization based on the results from the formative study."
        }
      ],
      major_elective_courses: [
        {
          id: 15,
          name: "Designing for Content Management Systems",
          code: "HCI 421",
          type: "Major Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["HCI 406"],
          description: "Design and development of Web sites using common database-driven content management systems (CMSs) and publishing tools such as those used to manage blogs, community portals, and other content-heavy websites. Discussions of how familiarity with CMS tools assists the role of the user experience designer. Visual design and theme customization using prior knowledge of CSS. Taxonomy systems, installation of add-on modules, and user management using today's widely used systems."
        },
        {
          id: 16,
          name: "Multimedia",
          code: "HCI 422",
          type: "Major Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["HCI 440"],
          description: "Multimedia interface design. Underlying technological issues including synchronization and coordination of multiple media, file formats for images, animations, sound and text. Hypertext. Information organization. Survey of multimedia authoring software. Topics in long distance multimedia (World Wide Web). Students will critique existing applications and create several multimedia applications."
        },
        {
          id: 17,
          name: "Information Visualization and Infographics",
          code: "HCI 512",
          type: "Major Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["IT 403", "HCI 470"],
          description: "Communicating information through visualizations. Students learn how to choose effective means to visualize data for (a) their intended audience(s) and (b) for the message they intend to communicate. Students practice creating and evaluating visualizations using a variety of tools and methods."
        },
        {
          id: 18,
          name: "Learner-Centered Design",
          code: "HCI 520",
          type: "Major Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["IT 403", "HCI 440", "HCI 450"],
          description: "Design and evaluation of technology-based learning systems. Theories and models of human perception and cognition as they apply to learning, instruction and training. Application of established principles for analyzing and designing learning systems. Projects include evaluating existing learning systems and the creation of a learning system."
        },
        {
          id: 19,
          name: "UX Strategy and Web Analytics",
          code: "HCI 522",
          type: "Major Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["IT 460"],
          description: "In this course, students examine how to align user experience (UX) approaches with business strategy. Topics include: (a) examining how business and UX strategies are aligned; (b) translation of business goals into measurable metrics; and (c) assessing metrics using services such as Google Analytics."
        },
        {
          id: 20,
          name: "Mobile Design",
          code: "HCI 530",
          type: "Major Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["HCI 454"],
          description: "Theoretical and practical issues for designing mobile devices. Design strategy, patterns and research within a mobile context. Students will learn to create useful, usable and enjoyable experiences that consider the unique capabilities and constraints of mobile platforms. Project deliverables includes wireframes for diverse platforms such as responsive mobile web, iOS, and Android native apps."
        },
        {
          id: 21,
          name: "Social Interaction Design",
          code: "HCI 553",
          type: "Major Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["HCI 454"],
          description: "UX principles and strategies for designing social apps and web sites. Analysis and use of interaction patterns for organizing, sharing, and discussing content. Application of theories relating to social networks, privacy and social capital. Students apply user-centered processes to the design of a social app."
        },
        {
          id: 22,
          name: "User Experience Design Practicum",
          code: "HCI 580",
          type: "Major Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["HCI 445", "HCI 454"],
          description: "Working with clients, students choose and practice appropriate methods learned in the HCI foundational courses to address business goals and user needs. Course coverage includes best practices for consulting, effective communication with clients and coworkers, understanding business and organizational needs, and setting realistic goals and expectations."
        },
        {
          id: 23,
          name: "Topics in Human-Computer Interaction",
          code: "HCI 590",
          type: "Major Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"],
          description: "Specific topics selected by the instructor. Topic varies with each offering. Contact instructor for more information."
        }
      ],
      open_elective_courses: [
        {
          id: 24,
          name: "Information Security Management",
          code: "CNS 440",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"],
          description: "Survey of information security management as it applies to information systems analysis, design, and operations. Managing information assets and the security infrastructure. Emphasis on managing security-related risk, as well as the process of developing, implementing, and maintaining organizational policies, standards, procedures, and guidelines. Identifying and evaluating information assets, threats, and vulnerabilities. Quantitative and qualitative risk analysis, risk mitigation, residual risk, and risk treatment as they relate to information security. Topics include information security vulnerabilities, threats, and risk management; security policies and standards; security audits; access controls; network perimeter protection, data protection; physical security; security education training and awareness. Introduction to compliance, as well as the CISSP domains."
        },
        {
          id: 25,
          name: "Data Analysis and Regression",
          code: "CNS 423",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["IT 403"],
          description: "Multiple regression and correlation, residual analysis, analysis of variance, and robustness. These topics will be studied from a data analytic perspective, supported by an investigation of available statistical software."
        },
        {
          id: 26,
          name: "Advanced Data Analysis",
          code: "CSC 424",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["CSC 423"],
          description: "The course will teach advanced statistical techniques to discover information from large sets of data. The course topics include visualization techniques to summarize and display high dimensional data, dimensional reduction techniques such as principal component analysis and factor analysis, clustering techniques for discovering patterns from large datasets, and classification techniques for decision making. The methods will be implemented using standard computer packages."
        },
        {
          id: 27,
          name: "Database Design",
          code: "CSC 451",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"],
          description: "Requirement analysis, conceptual design, logical design and implementation of relational databases. Emphasis will be on E-R modeling and E-R mapping, along with basic normalization and SQL for database implementation."
        },
        {
          id: 28,
          name: "Data Visualization",
          code: "CSC 465",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["IT 403", "IT 411"],
          description: "An introduction to data visualization techniques to enhance the exploration and analysis of large data sets from a wide range of fields including commercial, financial, medical, scientific and engineering applications. Topics include visual encoding of numeric data, graphical integrity and effective visualization design, visualizing distributions and correlation, false-color techniques for feature extraction and enhancement, basic network visualization and graph layout, isosurface generation, geospatial visualization and volumetric rendering techniques. The course explores both existing visualization software packages and code interfaces for data visualization."
        },
        {
          id: 29,
          name: "Cognitive Science",
          code: "CSC 587",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["CSC 403", "HCI 460"],
          description: "A study of the relationships between our knowledge of human and computer intelligence. Levels of analysis of intelligent system, examples of cognitive models, and exposure to current publications, with an emphasis on those related to human computer interaction. Students will participate in the design and testing of models of human intelligence, both experimentally and using computer models."
        },
        {
          id: 30,
          name: "E-Commerce Web Site Engineering",
          code: "ECT 455",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["IT 411", "HCI 430"],
          description: "An introduction to Web site engineering methods and processes to support e-commerce development. Web site engineering life cycle and user-centered design, including site goals, business models, value propositions, user analysis, information architecture, interface and navigation design, usability guidelines, database, testing, hosting strategies, usage metrics, and collaborative development. Technologies for e-commerce, shopping cart, digital payments, promotion strategies, and security issues. Students will build fully functional Web sites using database and client- and server-side technologies."
        },
        {
          id: 31,
          name: "Intranets and Portals",
          code: "ECT 480",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["ECT 424"],
          description: "Intranet development methodology. Data warehousing concept and On-Line analytic processing (OLAP) for information management. Enterprise information portals (EIP). Transforming information into knowledge. Major applications involve: decision support, customer applications and content personalization for intranet. Students will conduct case studies and projects."
        },
        {
          id: 32,
          name: "Customer Relationship Management Technologies",
          code: "ECT 586",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["ECT 424"],
          description: "An in-depth study of customer relationship management (CRM) technologies and applications. The special focus will be on the application of CRM technologies for managing the customer lifecycle across Internet and offline channels. Topics include customer identification, data integration, personalization technologies, web and email interaction techniques; sales force automation applications; call centers, field service and logistics applications; customer self-service and customer knowledge management technologies. Students will review and compare specific eCRM technologies and develop an Internet customer interaction system to support an eCRM strategy in group project."
        },
        {
          id: 33,
          name: "Game Design Workshop",
          code: "GAM 424",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"],
          description: "This course is an introduction to both the theory and practice of game design. Students will explore fundamental elements of game design and put these concepts to work in designing, prototyping, playtesting, and developing both physical and computer games. The course will cover formal elements of games, game dynamics, game narratives, and the dramatic components of games. Students will study the game design process including brainstorming, conceptualization, creation of design documentation, and play-testing."
        },
        {
          id: 34,
          name: "Requirements Elicitation, Analysis, and Specification",
          code: "IS 485",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["PM 430", "IS 422", "IS 430"],
          description: "This course focuses on the concepts and skills needed to elicit, analyze, specify, and manage requirements for a software or systems level project. Students will learn to identify and work with stakeholders through conducting a variety of requirements gathering techniques including interviewing, surveying, ethnography, and Joint Application Design (JAD) sessions, to identify and analyze requirements conflicts and negotiate solutions, to model requirements and specify them in unambiguous ways, and to manage requirements throughout the software lifecycle using change controls, traceability, and impact analysis techniques. The requirements process will be examined in both traditional and agile environments. Current topics such as requirements for product lines or distributed development teams will also be explored as time permits."
        },
        {
          id: 35,
          name: "Social Issues of Computing",
          code: "IS 511",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"],
          description: "This course aims to provide a broad survey of the individual, organizational, and cultural impacts of computers and to stimulate reflection upon the social and ethical issues provoked by current and projected uses of computers. Some topics include an in-depth look at computers as they relate to workplaces, communities, public policy, legal issues, education, privacy, and moral values."
        },
        {
          id: 36,
          name: "Enterprise System Implementation",
          code: "IS 570",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["PM 430"],
          description: "This course is targeted towards information systems professionals who are involved in the planning and implementation of large scale, cross-functional enterprise systems. Students will examine the characteristics of technology efforts that change and transform the way people perform their tasks and how the new technology structures the flows of information and decision making using workflow modeling methods. Through case studies and exercises students gain insights into the elements of successful implementations leading to the preparation of a change management plan. Emphasis is placed on developing mechanisms for communicating and training all affected agents."
        },
        {
          id: 37,
          name: "Web Architecture",
          code: "IT 432",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["IT 411"],
          description: "Overview of Web application development for non-programmers. Hands-on exposure to the Model, View, Controller (MVC) framework using a common web framework. Topics include HTML/CSS, data modeling, authentication, AJAX and security issues. Students create and modify dynamic web sites."
        },
        {
          id: 38,
          name: "Topics in Information Technology",
          code: "IT 590",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"],
          description: "Advanced study focusing on a specific area of information technology each quarter. May be repeated for credit."
        },
        {
          id: 39,
          name: "Decisions in Marketing Management",
          code: "MKT 555",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"],
          description: "Students are provided with an overview of the marketing process for consumer-oriented firms. Focus is placed on decision-making that aligns a firm's market offerings with the wants and needs of targeted segments of customers within a continuously changing environment. Written cases/projects are part of the course assignment."
        },
        {
          id: 40,
          name: "Fundamentals of IT Project Management",
          code: "PM 430",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"],
          description: "This course concentrates on monitoring, managing and controlling assets and resources on a single IT project. Topics covered are risk management; procurement and contract management; time and cost estimating; controlling and tracking techniques; quality assurance; testing and audit. Students will use common project management software for resource allocation and balancing."
        },
        {
          id: 41,
          name: "Software and Systems Project Management",
          code: "SE 477",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"],
          description: "Project Management is presented from a practitioner's view. The four basic building blocks of software project management: people, process, tools, and measurements are covered. Special emphasis is placed on professional standards such as the Project Management Book of Knowledge and IEEE Software Engineering Standards. Specific topics include Managing People, Selecting Project Tools, Leadership & Motivation, Software Development Processes, Estimation, Risk Analysis, Scheduling and Tracking, Leveraging Measurements, and Project Completion. Consideration is given to rapid development and project cultural issues."
        },
        {
          id: 42,
          name: "Collaborative Technologies for Leading Projects",
          code: "PM 440",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"],
          description: "Study of the process of virtual teaming with emphasis on facilitation of different time project activities and facilitation of same time meetings. Students will learn how small group psychology and group communication theories inform specific behaviors in the design and leadership of meetings. Several meeting types including information briefing, focus group, document writing, decision making, requirements gathering, and teaching/training will be explored. In addition, the course surveys current collaboration technologies and discusses how to select among those technologies usability and fit to purpose of a meeting agenda."
        },
        {
          id: 43,
          name: "Perception and Cognition",
          code: "PSY 404",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"],
          description: "Survey of classical and instrumental conditioning, biological constraints, attention, memory, cognition, and practical applications. Major theoretical approaches include stimulus-response, early cognitive theories and information processing theory."
        },
        {
          id: 44,
          name: "The Psychology of Judgment and Decision- Making",
          code: "PSY 473",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"],
          description: "An introduction to research in judgment and choice behaviors. Judgment refers to how people evaluate information and make predictions. Choice concerns how people select a course of action among alternatives."
        },
        {
          id: 45,
          name: "Industrial and Organizational Psychology",
          code: "PSY 680",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"],
          description: "Application of theories and methods of psychology to the study of human behavior in business, industry, and other organizations. Cross-level with PSY 380."
        },
        {
          id: 46,
          name: "Object Oriented Modeling",
          code: "SE 430",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"],
          description: "Object-oriented modeling techniques for analysis and design. Provides the tools and techniques needed to solve complex, real-world software engineering problems in an object-oriented manner, using the most effective elements of the Unified Process. The course covers the essential concepts and notation of the Unified Modeling Language (UML), the standard notation for object-oriented analysis and design. Team project."
        },
        {
          id: 47,
          name: "Requirements Engineering",
          code: "SE 482",
          type: "Open Elective",
          offered: ["Fall", "Winter", "Spring"],
          prereq: ["None"],
          description: "Requirements Engineering (RE) plays a critical role in the software development process. This course will introduce related vocabulary, concepts, and techniques, and will examine the role of RE in software and systems engineering. The course will cover topics related to eliciting, validating, negotiating, analyzing, specifying, and managing requirements. Popular RE tools will also be introduced."
        }
      ],
      introductory_courses_bucket: [],
      foundation_courses_bucket: [],
      advanced_courses_bucket: [],
      major_elective_courses_bucket: [],
      open_elective_courses_bucket: []
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
