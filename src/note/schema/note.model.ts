import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as MongooseTimestamp from 'mongoose-timestamp';

@Schema()
class Note extends Document {
  @Prop({ required: true, unique: true })
  noteId: string;

  @Prop({ required: true, unique: true })
  title: string;

  @Prop({ required: true })
  content: string;
}

const NoteSchema = SchemaFactory.createForClass(Note);

NoteSchema.plugin(MongooseTimestamp);

export { NoteSchema, Note };
