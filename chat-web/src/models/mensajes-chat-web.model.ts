import {belongsTo, Entity, model, property} from '@loopback/repository';
import {usuariosChatWeb} from './usuarios-chat-web.model';

@model({
  settings: {
    foreignKeys: {
      fk_usuario_mensaje: {
        name: 'fk_usuario_mensaje',
        entity: 'usuariosChatWeb',
        entityKey: 'user',
        foreignKey: 'usuariosChatWebId',
      },
    },
  },
})

export class mensajesChatWeb extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_mensaje?: number;

  @property({
    type: 'date',
    required: false,
  })
  date_mensaje: Date;

  @property({
    type: 'string',
    required: true,
  })
  user_origen: string;


  @property({
    type: 'string',
    required: true,
  })
  mensaje: string;

  @property({
    type: 'string',
    required: true,
  })
  user_destino: string;

  @property({
    type: 'boolean',
    required: false,
  })
  mensaje_nuevo: boolean;

  @property({
    type: 'boolean',
    required: false,
  })
  esTexto: boolean;

  @belongsTo(() => usuariosChatWeb)
  usuariosChatWebId: number;

  constructor(data?: Partial<mensajesChatWeb>) {
    super(data);
  }
}

export interface mensajesChatWebRelations {
  // describe navigational properties here
}

export type mensajesChatWebWithRelations = mensajesChatWeb & mensajesChatWebRelations;
