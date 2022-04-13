export class Persona{
    id:number;
    nombre:string;
    apellido:string;
    dni:string;
    nacionalidad:string;
    full_name:string;
    image:string;
    position:string;
    

   constructor(id:number, nombre:string, apellido:string,dni:string, nacionalidad:string, full_name:string, image:string, position:string )
   { 
       this.id=id;
       this.nombre=nombre;
       this.apellido=apellido;
       this.dni=dni;
       this.nacionalidad=nacionalidad;
       this.full_name=full_name;
       this.image=image;
       this.position=position;
       
   }

}