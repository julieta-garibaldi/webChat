import {Entity, hasMany, model, property} from '@loopback/repository';
import {mensajesChatWeb} from './mensajes-chat-web.model';

@model()
export class usuariosChatWeb extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  realm: string;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @hasMany(() => mensajesChatWeb)
  mensajesChatWebs: mensajesChatWeb[];

  constructor(data?: Partial<usuariosChatWeb>) {
    super(data);
  }
}

export interface usuariosChatWebRelations {
  // describe navigational properties here
}

export type usuariosChatWebWithRelations = usuariosChatWeb & usuariosChatWebRelations;
