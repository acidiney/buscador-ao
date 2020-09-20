import { IsArray, IsDate, IsFQDN, IsString } from 'class-validator';

export class CreateStateDto {
    @IsString()
    readonly name: string;
    
    @IsString()
    readonly capital: string;
    
    @IsDate()
    readonly foundedAt: string;

    @IsString()
    readonly area: string;

    @IsString()
    readonly phonePrefix: string;

    @IsFQDN()
    readonly website: string;

    @IsArray()
    readonly counties: string[];
}
