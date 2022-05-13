import { Component,Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Educacion } from 'src/app/entidades/educacion';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from 'src/app/services/educacion.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css'],
  providers:[EducacionService]
})
export class ModificaComponent implements OnInit {
  
  educacionList: Educacion[] = [];
  isUserLogged!:boolean
  formBorra=false;
  formCarga=false;
  formModifica=false;
  educationForm!: FormGroup;
  public editEducacion!: Educacion;
  public deleteEducacion!: Educacion;

  constructor(public authService: AuthService, private educacionService: EducacionService, public formBuilder: FormBuilder) { 
    this.educationForm = formBuilder.group(
      {
      id: [''],
      fechaInicio: [''],
      fechaEgreso: ['', Validators.required],
      titulo: ['', Validators.required],
      institucion: ['', Validators.required],
      idPersona: ['', Validators.required],
    }
    );
    

  }
  public getEstudios(): void {
    this.educacionService.getEducacion().subscribe(
      (response:Educacion[]) => {
        this.educacionList = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddEstudios(addForm: NgForm):void {
    document.getElementById('add-estudios-modal')?.click();
    this.educacionService.addEducacion(addForm.value).subscribe(
      (response: Educacion) => {
        console.log(response);
        this.getEstudios();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    )
    
  } 
  save(event: Event) {
    event.preventDefault();
    if (this.educationForm.valid) {
      const value = this.educationForm.value;
      this.educacionService.addEducacion(value);
      
    } else {
      this.educationForm.markAllAsTouched();
    }
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

  loadForm(educacion: Educacion) {
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
      this.educacionService.addEducacion(educacion).subscribe(
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
    let educacion: Educacion = this.educationForm.value;
    if (confirm("¿Está seguro que desea modificar la educación seleccionada?")) {
     this.educacionService.addEducacion(educacion).subscribe(
      () => {
        this.reloadData();
      }
    )
  }  
  }

  onNuevaEducation() {
    let educacion: Educacion = this.educationForm.value;
    if (confirm("¿Está seguro que desea modificar la educación seleccionada?")) {
     this.educacionService.addEducacion(educacion).subscribe(
      () => {
        this.reloadData();
      }
    )
  }  
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



  
  public onUpdateEducacion(editEducacion: Educacion):void {
    this.educacionService.modificarEducacion(editEducacion).subscribe(
    (response: Educacion) => {
      console.log(response);
      this.reloadData();
      
    }
  )
  
}

public onOpenModal(educacion: Educacion, mode: string): void{
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');
  if (mode === 'add') {
    button.setAttribute('data-target', '#addEstudiosModal');
  }
  if (mode === 'edit') {
    this.editEducacion = educacion;
    button.setAttribute('data-target', '#updateEstudiosModal');
  }
  if (mode === 'delete') {
    this.deleteEducacion = educacion;
    button.setAttribute('data-target', '#deleteEstudiosModal');
  }
  container?.appendChild(button);
  button.click();
}



}
