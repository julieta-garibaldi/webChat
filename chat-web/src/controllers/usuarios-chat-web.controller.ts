import {
  Count,
  CountSchema, Filter, FilterExcludingWhere,
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
import {usuariosChatWeb} from '../models';
import {usuariosChatWebRepository} from '../repositories';


export class usuariosChatWebController {
  constructor(
    @repository(usuariosChatWebRepository)
    public usuariosChatWebRepository: usuariosChatWebRepository,
  ) { }

  @post('/usuarios-chat-webs')
  @response(200, {
    description: 'usuariosChatWeb model instance',
    content: {'application/json': {schema: getModelSchemaRef(usuariosChatWeb)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(usuariosChatWeb, {
            title: 'NewusuariosChatWeb',
            exclude: ['id'],
          }),
        },
      },
    })
    usuariosChatWeb: Omit<usuariosChatWeb, 'id_usuario'>,
  ): Promise<usuariosChatWeb> {
    return this.usuariosChatWebRepository.create(usuariosChatWeb);
  }

  @get('/usuarios-chat-webs/count')
  @response(200, {
    description: 'usuariosChatWeb model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(usuariosChatWeb) where?: Where<usuariosChatWeb>,
  ): Promise<Count> {
    return this.usuariosChatWebRepository.count(where);
  }

  @get('/usuarios-chat-webs')
  @response(200, {
    description: 'Array of UsuariosChatWeb model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(usuariosChatWeb, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(usuariosChatWeb) filter?: Filter<usuariosChatWeb>,
  ): Promise<usuariosChatWeb[]> {
    return this.usuariosChatWebRepository.find(filter);
  }

  @get('/usuarios-chat-webs/login')
  @response(200, {
    description: 'Array of usuariosChatWeb model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(usuariosChatWeb, {includeRelations: true}),
        },
      },
    },
  })
  async finder(
    @param.query.string('user') user: string,
    @param.query.string('password') password: string,
  ): Promise<usuariosChatWeb[]> {
    return this.usuariosChatWebRepository.find(this.usuariosChatWebRepository.filterLogIn(user, password));
  }

  @get('/usuarios-chat-webs/nouser')
  @response(200, {
    description: 'Array of usuariosChatWeb model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(usuariosChatWeb, {includeRelations: false}),
        },
      },
    },
  })
  async findy(
    @param.query.string('username') username: string,
  ): Promise<usuariosChatWeb[]> {
    return this.usuariosChatWebRepository.find(this.usuariosChatWebRepository.filterNoUser(username));
  }


  @patch('/usuarios-chat-webs')
  @response(200, {
    description: 'usuariosChatWeb PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(usuariosChatWeb, {partial: true}),
        },
      },
    })
    usuariosChatWeb: usuariosChatWeb,
    @param.where(usuariosChatWeb) where?: Where<usuariosChatWeb>,
  ): Promise<Count> {
    return this.usuariosChatWebRepository.updateAll(usuariosChatWeb, where);
  }

  @get('/usuarios-chat-webs/{id}')
  @response(200, {
    description: 'usuariosChatWeb model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(usuariosChatWeb, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(usuariosChatWeb, {exclude: 'where'}) filter?: FilterExcludingWhere<usuariosChatWeb>
  ): Promise<usuariosChatWeb> {
    return this.usuariosChatWebRepository.findById(id, filter);
  }

  @patch('/usuarios-chat-webs/{id}')
  @response(204, {
    description: 'usuariosChatWeb PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(usuariosChatWeb, {partial: true}),
        },
      },
    })
    usuariosChatWeb: usuariosChatWeb,
  ): Promise<void> {
    await this.usuariosChatWebRepository.updateById(id, usuariosChatWeb);
  }

  @put('/usuarios-chat-webs/{id}')
  @response(204, {
    description: 'usuariosChatWeb PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() usuariosChatWeb: usuariosChatWeb,
  ): Promise<void> {
    await this.usuariosChatWebRepository.replaceById(id, usuariosChatWeb);
  }

  @del('/usuarios-chat-webs/{id}')
  @response(204, {
    description: 'usuariosChatWeb DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.usuariosChatWebRepository.deleteById(id);
  }






}
