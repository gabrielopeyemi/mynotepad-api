import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class GetOneNoteDto {
  @ApiProperty()
  @IsNotEmpty()
  id: string;
}
