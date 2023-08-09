import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class DatabaseConfigService implements TypeOrmOptionsFactory {
  constructor(private _configService: ConfigService) {}

  private _getValue(key: string): string | any {
    const value = this._configService.get(key);
    if (!value) throw new Error(`Config error: missing env.${key}`);
    return value;
  }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: this._getValue('DATABASE_TYPE'),
      host: this._getValue('DATABASE_HOST'),
      port: +this._getValue('DATABASE_PORT'),
      username: this._getValue('DATABASE_USER'),
      password: this._getValue('DATABASE_PASSWORD'),
      database: this._getValue('DATABASE_NAME'),
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      autoLoadEntities: this._getValue('DATABASE_AUTOLOADENTITIES'),
      synchronize: this._getValue('DATABASE_SYNCHRONIZE'),
    };
  }
}
