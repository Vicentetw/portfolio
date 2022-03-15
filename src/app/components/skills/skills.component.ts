import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: "What I do con esto? estoy en skills.component.ts",
    subTitle: "soun un subtítulo estoy en skills.component.ts",
    skills: [
      " texto1 skills.component.ts",
      " texto2 skills.component.ts",
      " texto3 skills.component.ts",
      " texto4 skills.component.ts",
      " texto5 skills.component.ts",
      " texto6 skills.component.ts",
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
