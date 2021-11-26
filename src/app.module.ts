import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { NoteModule } from './note/note.module';

@Module({
  imports: [
    NoteModule,
    MongooseModule.forRoot(
      'mongodb+srv://gabby:9dfEFP5FxEZXy6AU@cluster0.crsxy.mongodb.net/mynotepay?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
