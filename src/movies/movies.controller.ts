import { Controller, Get,Param, Post ,Body,Put} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Get()
    findAll(){
        return this.moviesService.findAll()
    }
    @Get(':id')
     findOne(@Param('id') id: string){
        return  this.moviesService.findOne(id)
    }
    @Post()
    create(@Body() createMovieDto: CreateMovieDto) {
       return this.moviesService.create(createMovieDto)
    }
    @Put(':id')
    edit(@Param('id') id: string, @Body() createMovieDto: CreateMovieDto) {
       return this.moviesService.edit(id,createMovieDto)
    }
}
