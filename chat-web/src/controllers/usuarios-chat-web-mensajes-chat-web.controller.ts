import {authenticate} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody
} from '@loopback/rest';
import {
  mensajesChatWeb, usuariosChatWeb
} from '../models';
import {usuariosChatWebRepository} from '../repositories';

@authenticate('jwt')
export class usuariosChatWebmensajesChatWebController {
  constructor(
    @repository(usuariosChatWebRepository) protected usuariosChatWebRepository: usuariosChatWebRepository,
  ) { }

  @get('/usuarios-chat-webs/{id}/mensajes-chat-webs', {
    responses: {
      '200': {
        description: 'Array of usuariosChatWeb has many mensajesChatWeb',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(mensajesChatWeb)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<mensajesChatWeb>,
  ): Promise<mensajesChatWeb[]> {
    return this.usuariosChatWebRepository.mensajesChatWebs(id).find(filter);
  }

  @post('/usuarios-chat-webs/{id}/mensajes-chat-webs', {
    responses: {
      '200': {
        description: 'usuariosChatWeb model instance',
        content: {'application/json': {schema: getModelSchemaRef(mensajesChatWeb)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof usuariosChatWeb.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(mensajesChatWeb, {
            title: 'NewmensajesChatWebInusuariosChatWeb',
            exclude: ['id_mensaje'],
            optional: ['usuariosChatWebId']
          }),
        },
      },
    }) mensajesChatWeb: Omit<mensajesChatWeb, 'id_mensaje'>,
  ): Promise<mensajesChatWeb> {
    return this.usuariosChatWebRepository.mensajesChatWebs(id).create(mensajesChatWeb);
  }

  @patch('/usuarios-chat-webs/{id}/mensajes-chat-webs', {
    responses: {
      '200': {
        description: 'usuariosChatWeb.mensajesChatWeb PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(mensajesChatWeb, {partial: true}),
        },
      },
    })
    mensajesChatWeb: Partial<mensajesChatWeb>,
    @param.query.object('where', getWhereSchemaFor(mensajesChatWeb)) where?: Where<mensajesChatWeb>,
  ): Promise<Count> {
    return this.usuariosChatWebRepository.mensajesChatWebs(id).patch(mensajesChatWeb, where);
  }

  @del('/usuarios-chat-webs/{id}/mensajes-chat-webs', {
    responses: {
      '200': {
        description: 'usuariosChatWeb.mensajesChatWeb DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(mensajesChatWeb)) where?: Where<mensajesChatWeb>,
  ): Promise<Count> {
    return this.usuariosChatWebRepository.mensajesChatWebs(id).delete(where);
  }
}
