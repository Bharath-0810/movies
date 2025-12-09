import { Controller, Get,Param, Post ,Body} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Get()
    findAll(){
        return 'this will return all movies'
    }
    @Get(':id')
    findOne(@Param('id') id: string): string{
        return `this will return movie with id: ${id}`;
    }
    @Post()
    create(@Body() createMovieDto: CreateMovieDto) {
       return this.moviesService.create(createMovieDto)
    }
}
