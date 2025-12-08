import { IsString, IsNumber, IsOptional }  from 'class-validator'
export class CreateMovieDto{
    @IsString()
    title:string;
    
    @IsNumber()
    year:number;

    @IsOptional()
    @IsNumber()
    rating?:number
} 