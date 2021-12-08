import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import { getBoolean } from '../helpers/global';

export class MongoConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    let urlMongo;
    const auth = process.env.MONGO_ENABLE || true;
    const user = process.env.MONGO_ROOT_USER || 'admin';
    const password = process.env.MONGO_ROOT_PASSWORD || 'admin';
    const host = process.env.MONGO_HOST || 'localhost';
    const base = process.env.MONGO_DATABASE || 'notenv_database';
    const port = process.env.MONGO_PORT || 27017;
    urlMongo = `mongodb://${user}:${password}@${host}:${port}/${base}?authSource=admin`;
    return {
      uri: urlMongo,
    };
  }
}
