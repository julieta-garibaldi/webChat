import {authenticate} from '@loopback/authentication';
import {
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param
} from '@loopback/rest';
import {
  mensajesChatWeb, usuariosChatWeb
} from '../models';
import {mensajesChatWebRepository} from '../repositories';

export class mensajesChatWebusuariosChatWebController {
  constructor(
    @repository(mensajesChatWebRepository)
    public mensajesChatWebRepository: mensajesChatWebRepository,
  ) { }

@authenticate('jwt')
  @get('/mensajes-chat-webs/{id}/usuarios-chat-web', {
    responses: {
      '200': {
        description: 'usuariosChatWeb belonging to mensajesChatWeb',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(usuariosChatWeb)},
          },
        },
      },
    },
  })
  async getusuariosChatWeb(
    @param.path.number('id') id: typeof mensajesChatWeb.prototype.id_mensaje,
  ): Promise<usuariosChatWeb> {
    return this.mensajesChatWebRepository.usuariosChatWeb(id);
  }
}
