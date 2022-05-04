import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { EducacionService } from 'src/app/services/educacion.service';
import { Educacion } from 'src/app/interfaces/Educacion';
import { EtidadEducacion } from 'src/app/entidades/educacion';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  providers:[EducacionService]
})
export class EducationComponent implements OnInit {
  educacionList: Educacion[] = [];
  educationForm: FormGroup;
  public educacion: any
  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private educacionService:EducacionService
    
    ) { 
      this.educationForm = this.formBuilder.group({
        id: [''],
        fechaInicio: ['', [Validators.required]],
        fechaEgreso: ['', [Validators.required]],
        titulo: ['', [Validators.required]],
        institucion: ['', [Validators.required]],
        idPersona: ['', [Validators.required]]
      });
 }

    
 ngOnInit(): void {
   
  

  
  
  this.reloadData();
}

private reloadData() {
  this.educacionService.obtenerDatosEducacion().subscribe(
    (data) => {
      this.educacionList = data;
    }
  );
}

private clearForm() {
  this.educationForm.setValue({
    id: '',
    fechaInicio: '',
    fechaEgreso: '',
    titulo: '',
    institucion: '',
    idPersoa:''
  })
}

private loadForm(educacion: Educacion) {
  this.educationForm.setValue({
    id: educacion.id,
    fechaInicio: educacion.fechaInicio,
    fechaEgreso: educacion.fechaEgreso,
    titulo: educacion.titulo,
    institucion: educacion.institucion,
    idPersona: educacion.idPersona
  })
}

onSubmit() {
  let educacion: Educacion = this.educationForm.value;
  if (this.educationForm.get('id')?.value == '') {
    this.educacionService.guardarNuevaEducacion(educacion).subscribe(
      (newEducation: Educacion) => {
        this.educacionList.push(newEducation);
      }
    );
  } else {
    this.educacionService.modificarEducacion(educacion).subscribe(
      () => {
        this.reloadData();
      }
    )
  }
}

onNewEducation() {
  this.clearForm();
}

onEditEducation(index: number) {
  let educacion: Educacion = this.educacionList[index];
  this.loadForm(educacion);
}

onDeleteEducation(index: number) {
  let educacion: Educacion = this.educacionList[index];
  if (confirm("¿Está seguro que desea borrar la educación seleccionada?")) {
    this.educacionService.borrarEducacion(educacion.id).subscribe(
      () => {
        this.reloadData();
      }
    )
  }
}

}
