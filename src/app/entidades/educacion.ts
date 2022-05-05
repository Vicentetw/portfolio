export class Educacion{
    id:number;
    fechaInicio:string;
    fechaEgreso:string;
    titulo:string;
    institucion:string;
    idPersona:number;
    
        

   constructor(id:number, fechaInicio:string, fechaEgreso:string, titulo:string, institucion:string, idPersona:number )
   { 
       this.id=id;
       this.fechaInicio=fechaInicio;
       this.fechaEgreso=fechaEgreso;
       this.titulo=titulo;
      this.institucion=institucion;
      this.idPersona=idPersona;
      
      
   }

}