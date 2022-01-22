import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'usuariosChatWeb', table: 'administradores'}
  }
})
export class Administradores extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mysql: {columnName: 'lastname', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  lastname: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mysql: {columnName: 'name', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  name: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Administradores>) {
    super(data);
  }
}

export interface AdministradoresRelations {
  // describe navigational properties here
}

export type AdministradoresWithRelations = Administradores & AdministradoresRelations;
