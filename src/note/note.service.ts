import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNoteDto } from './Dto/create-note.dto';
import { Note } from './schema/note.model';
import { v4 as uuidv4 } from 'uuid';
import { GetOneNoteDto } from './Dto/get-one-note.dto';

@Injectable()
export class NoteService {
  constructor(@InjectModel('Note') private readonly noteModel: Model<Note>) {}

  async createNewNote(createNoteDto): Promise<any> {
    const { title, content } = createNoteDto;
    const myuuid = uuidv4();

    const newNote = new this.noteModel({
      noteId: myuuid,
      title,
      content,
    });
    const data = await newNote.save();
    return {
      data,
      success: true,
    };
  }

  async findAllNotes(): Promise<any> {
    const data = await this.noteModel.find().exec();
    return data;
  }

  async findOneNote(id): Promise<any> {
    const data = this.findOne(id);
    return data;
  }

  async delete(id) {
    const res = this.noteModel.findById(id);
    if (!res) {
      throw new NotFoundException('note not found');
      return;
    }
    const data = await this.noteModel.deleteOne({ _id: id });
    return { message: 'note has be deleted', success: true };
  }

  private async findOne(noteId: string): Promise<any> {
    let note;
    try {
      note = await this.noteModel.findById(noteId).exec();
    } catch (err) {
      throw new NotFoundException('Could not find note.');
    }
    if (!note) {
      throw new NotFoundException('Could not find transaction.');
    }
    return note;
  }
}
