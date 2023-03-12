import { Module } from '@nestjs/common';
import { ClientsModule ,Transport} from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  // allow us to inject a number of services that our application can use to dispatch events and messages to the microservices
  imports: [
    ClientsModule.register([{
      name:'COMMUNICATION',
      transport : Transport.TCP,
    },{
      name:'ANALYTICS',
      transport : Transport.TCP,
      options:{port:3001}
    }
  
  ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
