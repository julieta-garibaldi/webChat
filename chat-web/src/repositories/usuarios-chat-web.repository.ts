import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, Filter, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {mensajesChatWeb, usuariosChatWeb, usuariosChatWebRelations} from '../models';
import {mensajesChatWebRepository} from './mensajes-chat-web.repository';

export class usuariosChatWebRepository extends DefaultCrudRepository<
  usuariosChatWeb,
  typeof usuariosChatWeb.prototype.id,
  usuariosChatWebRelations
> {

  public readonly mensajesChatWebs: HasManyRepositoryFactory<mensajesChatWeb, typeof usuariosChatWeb.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('mensajesChatWebRepository') protected mensajesChatWebRepositoryGetter: Getter<mensajesChatWebRepository>,
  ) {
    super(usuariosChatWeb, dataSource);
    this.mensajesChatWebs = this.createHasManyRepositoryFactoryFor('mensajesChatWebs', mensajesChatWebRepositoryGetter,);
    this.registerInclusionResolver('mensajesChatWebs', this.mensajesChatWebs.inclusionResolver);
  }

  filterLogIn(user: string, password: string): Filter<usuariosChatWeb> {
    return {
      fields: {
        id: true,
        realm: false,
        username: true,
        email: false,
      },
      where: {
        username: user,
      }
    }
  }

  filterNoUser(username: string): Filter<usuariosChatWeb> {
    return {
      fields: {
        id: true,
        realm: false,
        username: true,
        email: false,
      },
      where: {
        username: {neq: username}
      },
    }
  }


}
