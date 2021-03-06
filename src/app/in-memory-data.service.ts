import {InMemoryDbService} from 'angular-in-memory-web-api'

export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        const legajos= [
            { id: 11, name: 'Mr. Nice',type:'DNI' },
            { id: 12, name: 'Narco',type:'Cedula' },
            { id: 13, name: 'Bombasto',type:'otros' },
            { id: 14, name: 'Celeritas',type:'Alta' },
            { id: 15, name: 'Magneta',type:'Ordenanza' },
            { id: 16, name: 'RubberMan',type:'DNI' },
            { id: 17, name: 'Dynama',type:'DNI' },
            { id: 18, name: 'Dr IQ',type:'DNI' },
            { id: 19, name: 'Magma',type:'DNI' },
            { id: 20, name: 'Tornado',type:'DNI' }
          ];

        const users= [
            {id: 11,usuario:"user1",password:"qweasd",token:"asdas1234"},
            {id: 12,usuario:"user2",password:"qweasd",token:"asdas1236"},
            {id: 13,usuario:"user3",password:"qweasd",token:"asdas1237"},
            {id: 13,usuario:"1",password:"1",token:"asdas1237"}
        ];

        const recibos=[
            {id: 0,legajo: 273665,anio : 2017,mes: 6,nroLiquidacion:3423256,tipo:"sueldo",nombre:"archivo de sueldos",comentarios:"zaraza"},
            {id: 1,legajo: 273634,anio : 2017,mes: 6,nroLiquidacion:3423256,tipo:"sueldo",nombre:"archivo de sueldos",comentarios:"zaraza"},
            {id: 2,legajo: 273645,anio : 2017,mes: 3,nroLiquidacion:3423256,tipo:"aguinaldo",nombre:"archivo de sueldos",comentarios:"zaraza"},
            {id: 3,legajo: 273663,anio : 2017,mes: 4,nroLiquidacion:3423256,tipo:"sueldo",nombre:"archivo de sueldos",comentarios:"zaraza"}
        ]

          return {legajos,users,recibos};
    }
}
