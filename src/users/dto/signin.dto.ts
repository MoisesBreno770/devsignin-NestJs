import { IsString } from "class-validator";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator/types/decorator/decorators";

export class SigninDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    password: string;
}