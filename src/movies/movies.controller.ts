import { Controller, Get,Param } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    findAll(){
        return 'this will return all movies'
    }
     @Get(':id')
    findOne(@Param('id') id: string): string{
        return `this will return movie with id: ${id}`;
    }
}
