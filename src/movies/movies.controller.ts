import { Controller, Get } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    findAll(){
        return 'this will return all movies'
    }
}
