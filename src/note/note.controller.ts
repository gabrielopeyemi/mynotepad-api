import { Body, Controller, Post, Get, Param, Delete } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateNoteDto } from './Dto/create-note.dto';
import { GetOneNoteDto } from './Dto/get-one-note.dto';
import { NoteService } from './note.service';

@ApiTags('Notes')
@Controller('note')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Post('create')
  async createNewNote(@Body() createNoteDto: CreateNoteDto) {
    const data = await this.noteService.createNewNote(createNoteDto);
    return data;
  }

  @Get('get-all-notes')
  async getAllNotes() {
    const data = await this.noteService.findAllNotes();
    return { data, success: true };
  }

  @Get('id/:id')
  async getOneNote(@Param() { id }: GetOneNoteDto) {
    const data = await this.noteService.findOneNote(id);
    return { data };
  }

  @Delete('delete/:id')
  async delete(@Param() { id }: GetOneNoteDto){
    console.log({ id });
    const data = await this.noteService.delete(id);
    return { data };
  }
}
