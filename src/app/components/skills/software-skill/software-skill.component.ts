import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-skill',
  templateUrl: './software-skill.component.html',
  styleUrls: ['./software-skill.component.css']
})
export class SoftwareSkillComponent implements OnInit {

  constructor() { }
  skillsSection = {
    softwareSkills: [
      {
        skillName: "html-5",
        fontAwesomeClassname: "fab fa-html5"
      },
      {
        skillName: "css3",
        fontAwesomeClassname: "fab fa-css3-alt"
      },
      {
        skillName: "sass",
        fontAwesomeClassname: "fab fa-sass"
      },
      {
        skillName: "JavaScript",
        fontAwesomeClassname: "fab fa-js"
      },
      {
        skillName: "Angularjs",
        fontAwesomeClassname: "fab fa-angular"
      },
      {
        skillName: "nodejs",
        fontAwesomeClassname: "fab fa-node"
      },
      {
        skillName: "npm",
        fontAwesomeClassname: "fab fa-npm"
      },
      {
        skillName: "sql-database",
        fontAwesomeClassname: "fas fa-database"
      },
      {
        skillName: "python",
        fontAwesomeClassname: "fab fa-python"
      },
      // {
      //   skillName: "Tensorflow",
      //   fontAwesomeClassname: "logos-tensorflow"
      // },
      // {
      //   skillName: "Firebase",
      //   fontAwesomeClassname: "simple-icons:firebase"
      // }

    ]
  };
  ngOnInit(): void {
  }

}
