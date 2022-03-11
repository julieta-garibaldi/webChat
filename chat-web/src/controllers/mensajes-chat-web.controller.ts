import {authenticate} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param,


  patch, post,




  put,

  requestBody,
  response
} from '@loopback/rest';
import {mensajesChatWeb} from '../models';
import {mensajesChatWebRepository} from '../repositories';

@authenticate('jwt')
export class mensajesChatWebController {
  constructor(
    @repository(mensajesChatWebRepository)
    public mensajesChatWebRepository : mensajesChatWebRepository,
  ) {}

  @post('/mensajes-chat-webs')
  @response(200, {
    description: 'mensajesChatWeb model instance',
    content: {'application/json': {schema: getModelSchemaRef(mensajesChatWeb)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(mensajesChatWeb, {
            title: 'NewmensajesChatWeb',
            exclude: ['id_mensaje'],
          }),
        },
      },
    })
    mensajesChatWeb: Omit<mensajesChatWeb, 'id_mensaje'>,
  ): Promise<mensajesChatWeb> {
    return this.mensajesChatWebRepository.create(mensajesChatWeb);
  }

  @get('/mensajes-chat-webs/count')
  @response(200, {
    description: 'mensajesChatWeb model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(mensajesChatWeb) where?: Where<mensajesChatWeb>,
  ): Promise<Count> {
    return this.mensajesChatWebRepository.count(where);
  }

  @get('/mensajes-chat-webs')
  @response(200, {
    description: 'Array of mensajesChatWeb model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(mensajesChatWeb, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(mensajesChatWeb) filter?: Filter<mensajesChatWeb>,
  ): Promise<mensajesChatWeb[]> {
    return this.mensajesChatWebRepository.find(filter);
  }

  @get('/mensajes-chat-webs/historial')
  @response(200, {
    description: 'Array of mensajesChatWeb model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(mensajesChatWeb, {includeRelations: true}),
        },
      },
    },
  })
  async finder(
    @param.query.string('user_origen') user_origen: string,
    @param.query.string('user_destino') user_destino: string,
  ): Promise<mensajesChatWeb[]> {
    return this.mensajesChatWebRepository.find(this.mensajesChatWebRepository.filterHistorial(user_origen, user_destino));
  }

  @get('/mensajes-chat-webs/historialalternativo')
  @response(200, {
    description: 'Array of mensajesChatWeb model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(mensajesChatWeb, {includeRelations: true}),
        },
      },
    },
  })
  async finde(
    @param.query.string('user_origen') user_origen: string,
  ): Promise<mensajesChatWeb[]> {
    return this.mensajesChatWebRepository.find(this.mensajesChatWebRepository.filterHistorialAlternativo(user_origen));
  }

  @get('/unread-mensajes-chat-webs')
  @response(200, {
    description: 'Array of mensajesChatWeb model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(mensajesChatWeb, {includeRelations: false}),
        },
      },
    },
  })
  async unread(
    @param.query.string('user_destino') user_destino: string,
  ): Promise<mensajesChatWeb[]> {
    return this.mensajesChatWebRepository.dataSource.execute('CALL newMessage(?)', [user_destino]);
  }

  @get('/update-mensajes-chat-webs')
  @response(200, {
    description: 'Array of mensajesChatWeb model instances',
  })
  async update(
    @param.query.string('user_origen') user_origen: string,
    @param.query.string('user_destino') user_destino: string,
  ): Promise<any> {
    const users = user_origen +"&&&"+user_destino;
    return this.mensajesChatWebRepository.dataSource.execute('CALL separateUsers(?)', [users]);
  }

  @patch('/mensajes-chat-webs')
  @response(200, {
    description: 'mensajesChatWeb PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(mensajesChatWeb, {partial: true}),
        },
      },
    })
    mensajesChatWeb: mensajesChatWeb,
    @param.where(mensajesChatWeb) where?: Where<mensajesChatWeb>,
  ): Promise<Count> {
    return this.mensajesChatWebRepository.updateAll(mensajesChatWeb, where);
  }

  @get('/mensajes-chat-webs/{id}')
  @response(200, {
    description: 'mensajesChatWeb model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(mensajesChatWeb, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(mensajesChatWeb, {exclude: 'where'}) filter?: FilterExcludingWhere<mensajesChatWeb>
  ): Promise<mensajesChatWeb> {
    return this.mensajesChatWebRepository.findById(id, filter);
  }

  @patch('/mensajes-chat-webs/{id}')
  @response(204, {
    description: 'mensajesChatWeb PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(mensajesChatWeb, {partial: true}),
        },
      },
    })
    mensajesChatWeb: mensajesChatWeb,
  ): Promise<void> {
    await this.mensajesChatWebRepository.updateById(id, mensajesChatWeb);
  }

  @put('/mensajes-chat-webs/{id}')
  @response(204, {
    description: 'mensajesChatWeb PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() mensajesChatWeb: mensajesChatWeb,
  ): Promise<void> {
    await this.mensajesChatWebRepository.replaceById(id, mensajesChatWeb);
  }

  @del('/mensajes-chat-webs/{id}')
  @response(204, {
    description: 'mensajesChatWeb DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.mensajesChatWebRepository.deleteById(id);
  }
}
