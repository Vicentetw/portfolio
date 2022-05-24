import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Educacion } from 'src/app/entidades/educacion';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from 'src/app/services/educacion.service';
import { NgbConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css'],
  providers:[EducacionService]
})
export class ModificaComponent implements OnInit {
  educacionList: Educacion[] = [];
  isUserLogged!:boolean

  educationForm: FormGroup;
  constructor(public authService: AuthService, private educacionService: EducacionService, private formBuilder: FormBuilder,ngbConfig: NgbConfig) { 
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

    this.isUserLogged = this.authService.estaLogeado;
    
    this.reloadData();
  }
  private reloadData() {
    this.educacionService.obtenerDatosEducacion().subscribe(mdata => {
      this.educacionList=mdata;
      console.log('Data2 ', mdata);
    })
    
  }

  private clearForm() {
    this.educationForm.setValue({
      id: '',
      fechaInicio: '',
      fechaEgreso: '',
      titulo:'',
      institucion:'',
      idPersona: ''
    })
  }

  private loadForm(educacion: Educacion) {
    this.educationForm.setValue({
      id: educacion.id,
      fechaInicio: educacion.fechaInicio,
      fechaEgreso: educacion.fechaEgreso,
      titulo: educacion.titulo,
      institucion: educacion.institucion,
      idPersona:educacion.idPersona
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
