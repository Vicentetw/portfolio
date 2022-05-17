import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaSkillComponent } from './modifica-skill.component';

describe('ModificaSkillComponent', () => {
  let component: ModificaSkillComponent;
  let fixture: ComponentFixture<ModificaSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
