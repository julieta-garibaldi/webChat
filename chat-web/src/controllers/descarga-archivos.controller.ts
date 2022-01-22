import {inject} from '@loopback/core';
import {
  get,

  HttpErrors, oas,
  param,
  Response,
  RestBindings
} from '@loopback/rest';
import fs from 'fs';
import path from 'path';
import {promisify} from 'util';
import {Keys as llaves} from '../config/keys';

const readdir = promisify(fs.readdir);

/**
 * A controller to handle file downloads using multipart/form-data media type
 */
export class DescargaArchivosController {

  constructor(
  ) { }

  /**
   *
   * @param recordId
   * @param response
   */
  @get('/archivo')
  @oas.response.file()
  async descargarArchivo(
    @param.query.string('filename') filename: string,
    @inject(RestBindings.Http.RESPONSE) response: Response,
  ) {
    const rutaCarpeta = path.join(__dirname, llaves.carpetaArchivoPersonas);
    const archivo = this.ValidarNombreArchivo(rutaCarpeta, filename);
    //console.log("folder: " + folder)
    //console.log("fname: " + fileName)
    response.download(archivo, rutaCarpeta);
    return response;
  }

  /**
   * Validate file names to prevent them goes beyond the designated directory
   * @param fileName - File name
   */
  private ValidarNombreArchivo(archivo: string, folder: string) {
    const resolved = path.resolve(archivo, folder);
    if (resolved.startsWith(archivo)) return resolved;
    // The resolved file is outside sandbox
    throw new HttpErrors[400](`La ruta del archivo es inválida: ${folder}`);
  }

}