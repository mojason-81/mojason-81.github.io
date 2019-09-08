// Object declarations for various resume sections.
var bio = {
  "name":       "Jason Force",
  "role":       "An Object in Motion",
  "contact": {
    "email":    "jason.r.force@gmail.com",
    //"mobile":   "816-555-1234",  // Commenting out mobile number
    "linkedin": "https://www.linkedin.com/in/jasonforce5581",
    "google":   "https://plus.google.com/u/0/116492679110338493730/posts/",
    "twitter":  "https://twitter.com/mojason_81",
    "github":   "https://github.com/mojason-81",
    "location": "Blue Springs, MO"
  },
  "picture":    "images/me.jpg",
  "message":    "Welcome, to my resume",
  "skills":     ["HTML","CSS","JavaScript","jQuery","Ruby","Rails"],
  "display":    function() {
    var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
    var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contact.linkedin);
    var formattedGoogle = HTMLgoogle.replace("%data%", bio.contact.google);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contact.github);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    // Commenting out mobile number since I don't want it on the site
    //var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
    $("#header").prepend(formattedName, "<br>", formattedRole, "<br>");//, formattedMobile);
    $("#header").prepend(formattedBioPic);
    $("#topContacts").prepend(formattedEmail);
    $("#topContacts").prepend(formattedLinkedIn);
    $("#topContacts").prepend(formattedGoogle);
    $("#topContacts").prepend(formattedTwitter);
    $("#topContacts").prepend(formattedGitHub);
    $("#footerContacts").prepend(formattedEmail);
    $("#footerContacts").prepend(formattedLinkedIn);
    $("#footerContacts").prepend(formattedGoogle);
    $("#footerContacts").prepend(formattedTwitter);
    $("#footerContacts").prepend(formattedGitHub);
    if (bio.skills.length > 0){
      $("#header").append(HTMLskillsStart);
      for (var skill in bio.skills) {
        if (bio.skills.hasOwnProperty(skill)){
          $("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
        }
      }
    }
  }
};

var work = {
  "jobs": [
    {
      "employer":     "Red Nova Labs",
      "position":     "Software Developer",
      "location":     "Westwood, KS",
      "dates":        "Apr 2018 - Present",
      "url":          "http://www.rednovalabs.com",
      "description":  "Work in agile sprints to develop and maintain self-storage facility management software. Build applications that focus on great user experience. Write maintainable code with extensive tests and version control"
    },
    {
      "employer":     "Andrews McMeel Universal",
      "position":     "Software Developer",
      "location":     "Kansas City, MO",
      "dates":        "Jul 2017 - Apr 2018",
      "url":          "http://www.andrewsmcmeel.com/",
      "description":  "Develop and support Ruby on Rails web applications. Integrate vendor applications and services. Interact with system administrators, designers, and other software developers to engineer, troubleshoot and launch applications and enhancements. Take an active consulting role in cross-departmental projects when needed. Review and document existing software and processes and recommend improvements."
    },
    {
      "employer":     "Multi Service",
      "position":     "Software Engineer I",
      "location":     "Overland Park, KS",
      "dates":        "Oct 2015 - Jun 2017",
      "url":          "http://www.multiservice.com/home.html",
      "description":  "My team's current objective is to design and implement custom APIs and SPAs for a large footwear retailer and its associated stores to use so that we can process their transactions across the US and Canada. This project involves a combination of Rails API, EmberJS UI, and a monolithic application as appropriate, while working with the development and business teams at Red Wing and Multi Service in order to address all business needs in an agile way.<br>We strive to work as agile development team, working to produce features required for end users to more efficiently perform their work.  Daily, we work on the development and peer reviews of user stories on our kanban board."
    },
    {
      "employer":     "Smart Warehousing",
      "position":     "Jr Web Developer",
      "location":     "Edgerton, KS",
      "dates":        "Jun 2015 - Oct 2015",
      "url":          "http://smartwarehousing.com/",
      "description":  "Support web application stack -- CentOS, Apache, PostgreSQL, Perl.  Research / suggest code fixes for bugs.  Perform database queries to complete user requests for data correction and retrieval.  Perform database queries to gather information to aid in troubleshooting.  Respond to user trouble tickets in a timely manner.  Add / edit users."
    },
    {
      "employer":     "Rhythm Engineering",
      "position":     "Testing and Repair Specialist",
      "location":     "Lenexa, KS",
      "dates":        "Nov 2011 - Jun 2015",
      "url":          "http://rhythmtraffic.com/",
      "description":  "Working with team members, perform and refine test procedures on adaptive traffic control system equipment.  Troubleshoot and repair adaptive traffic control system equipment in-house and by assisting clients over the phone.  Work with team members to develop trending data for component failures in the field.  Responsible for inventory control.  Ensure equipment is shipped to clients in a timely manner.  Process client returns.  Repair and return client equipment in a timely manner."
    }
  ],
  "display":    function() {
    for (var job in work.jobs){
      if (work.jobs.hasOwnProperty(job)){
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        formattedEmployer = formattedEmployer.replace("%data-url%", work.jobs[job].url);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append((formattedEmployer + formattedTitle), formattedDates, formattedLocation, formattedDescription);
      }
    }
  }
};

var education = {
  "schools": [
    {
      "name":     "ITT Technical Institute",
      "location": "Omaha, NE",
      "degree":   "A.A.S.",
      "majors":   ["Computer and Electronics Engineering Technology"],
      "date":     2009,
      "url":      "https://www.itt-tech.edu/teach/list/ceet.cfm"
    }
  ],
  "onlineCourses": [
    {
      "title":  "Front End Developer Nanodegree",
      "school": "Udacity",
      "date":   "2016",
      "url":    "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title":  "Ruby on Rails Developer Blueprint",
      "school": "Skillcrush",
      "date":   2015,
      "url":    "http://skillcrush.com/blueprint/ruby-rails-developer/"
    },
    {
      "title":  "Web Developer Blueprint",
      "school": "Skillcrush",
      "date":   2015,
      "url":    "http://skillcrush.com/blueprint/web-developer/"
    },
    {
      "title":  "HTML/CSS Path",
      "school": "CodeSchool",
      "date":   2015,
      "url":    "https://www.codeschool.com/users/1380690"
    },
    {
      "title":  "Ruby, JS, jQuery, HTML/CSS",
      "school": "Codecademy",
      "date":   2015,
      "url":    "https://www.codecademy.com/"
    }
  ],
  "display":    function() {
    for (var item in education.schools){
      if (education.schools.hasOwnProperty(item)){
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[item].name);
        var formattedSchoolCity = HTMLschoolLocation.replace("%data%", education.schools[item].location);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[item].degree);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[item].majors[0]);
        var formattedDate = HTMLschoolDates.replace("%data%", education.schools[item].date);
        formattedSchoolName = formattedSchoolName.replace("%urldata%", education.schools[item].url);
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").prepend(formattedSchoolName + formattedDegree);
        $(".education-entry:last").append(formattedSchoolCity);
        $(".education-entry:last").append(formattedDate);
        $(".education-entry:last").append(formattedMajor);
        $(".education-entry:last").append("<hr>");
      }
    }
    $(".education-entry").append(HTMLonlineClasses);
    for (item in education.onlineCourses){
      if (education.onlineCourses.hasOwnProperty(item)){
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[item].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[item].school);
        var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[item].date);
        //var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[item].url);
        formattedTitle = formattedTitle.replace("%urldata%", education.onlineCourses[item].url);
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedTitle + formattedSchool);
        $(".education-entry:last").append(formattedOnlineDate, "<br>");
        //$(".education-entry:last").append(formattedURL);
        $(".education-entry:last").append("<hr>");
      }
    }
  }
};

var project = {
  "projects": [
    {
      "title":        "Portfolio",
      "description":  "My online portfolio.",
      "url":          "https://mojason-81.github.io/",
      "image":        ["./images/portfolio2.jpg"],
      "dates":        "2015"
    },
    {
      "title":        "An Unfinished Read",
      "description":  "A site showcasing all the books on my shelf I have failed to finish.",
      "url":          "https://mojason-81.github.io/books-unread/",
      "image":        ["./images/book_bw.jpg"],
      "dates":        "2015"
    },
    {
      "title":        "Frogger Clone",
      "description":  "This is a clone of the classic game, Frogger.",
      "url":          "https://mojason-81.github.io/frogger-clone/",
      "image":        ["./images/frogger.jpg"],
      "dates":        "2015"
    },
    {
      "title":        "Neighborhood Map",
      "description":  "Interactive map utilizing Knockout.js, Google Maps, and Wikipedia APIs.",
      "url":          "https://mojason-81.github.io/neighborhood-map/",
      "image":        ["./images/neighborhood-map.jpg"],
      "dates":        "2016"
    }
  ],
  "display":  function() {
    for (var item in project.projects){
      if (project.projects.hasOwnProperty(item)){
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[item].title);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[item].description);
        var formattedImage = HTMLprojectImage.replace("%data%", project.projects[item].image[0]);
        formattedTitle = formattedTitle.replace("%urldata%", project.projects[item].url);
        var formattedDate = HTMLprojectDates.replace("%data%", project.projects[item].dates);
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDate);
        $(".project-entry:last").append(formattedDescription);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};

// International name
/*
var inName = function(){
  var nameArr = bio.name.split(" ");
  fname = nameArr[0].slice(0,1).toUpperCase() + nameArr[0].slice(1).toLowerCase();
  lname = nameArr[1].toUpperCase();
  return fname + " " + lname;
};
*/

//Calling functions to display resume info
bio.display();
work.display();
education.display();
project.display();
// $("#mapDiv").append(googleMap);
// $("#main").append(internationalizeButton);
