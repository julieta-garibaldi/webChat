import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, Filter, repository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {mensajesChatWeb, mensajesChatWebRelations, usuariosChatWeb} from '../models';
import {usuariosChatWebRepository} from './usuarios-chat-web.repository';

export class mensajesChatWebRepository extends DefaultCrudRepository<
  mensajesChatWeb,
  typeof mensajesChatWeb.prototype.id_mensaje,
  mensajesChatWebRelations
> {

  public readonly usuariosChatWeb: BelongsToAccessor<usuariosChatWeb, typeof mensajesChatWeb.prototype.id_mensaje>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('usuariosChatWebRepository') protected usuariosChatWebRepositoryGetter: Getter<usuariosChatWebRepository>,
  ) {
    super(mensajesChatWeb, dataSource);
    this.usuariosChatWeb = this.createBelongsToAccessorFor('usuariosChatWeb', usuariosChatWebRepositoryGetter,);
    this.registerInclusionResolver('usuariosChatWeb', this.usuariosChatWeb.inclusionResolver);
  }

  filterHistorial(user_origen: string, user_destino: string): Filter<mensajesChatWeb> {
    return {
      fields: {
        id_mensaje: true,
        date_mensaje: true,
        user_origen: true,
        mensaje: true,
        user_destino: true,
        mensaje_nuevo: true,
        esTexto: true,
        usuariosChatWebId: true,

      },
      where: {
        or: [
          { and: [{ user_origen: user_origen }, { user_destino: user_destino }] },
          { and: [{ user_origen: user_destino }, { user_destino: user_origen }]}
        ]
      },
      order: ['date_mensaje ASC'],
    }
  }

  filterHistorialAlternativo(user_origen: string): Filter<mensajesChatWeb> {
    return {
      fields: {
        id_mensaje: true,
        date_mensaje: true,
        user_origen: true,
        mensaje: true,
        user_destino: true,
        mensaje_nuevo: true,
        esTexto: true,
        usuariosChatWebId: true,

      },
      where: {
        or: [
          {user_origen: user_origen },
          {user_destino: user_origen},
        ]
      },
      order: ['date_mensaje ASC'],


    }
  }
}
