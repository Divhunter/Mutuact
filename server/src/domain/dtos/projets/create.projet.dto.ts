import { IsString, IsEmail, IsOptional, Matches, Length } from "class-validator";

export class CreateProjetDto {
  @IsString()
  @Matches(/^[a-zA-ZÀÁÂÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝàáâæçèéêëìíîïñòóôõöùúûüý -]+$/)
  @Length(3, 30)
  firstName: string;

  @IsString()
  @Matches(/^[a-zA-ZÀÁÂÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝàáâæçèéêëìíîïñòóôõöùúûüý -]+$/)
  @Length(3, 30)
  lastName: string;

  @IsEmail({}, { message: "L'adresse e-mail n'est pas valide" })
  email: string;

  @IsString()
  @IsOptional()
  @Matches(/^\+?\d{9,14}(?:[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})?$/)
  phone?: string;

  @IsString()
  @IsOptional()
  @Length(0, 500)
  @Matches(/^[a-zA-Zéèêîçàôïùû0-9]+(?:['\s\-?,:!%"@;’=°_()&$€.a-zA-Zéèêîçàôïûù0-9]+)*$/)
  message?: string;
}

// MessageDto.ts
export class MessageDto {
  @IsString()
  @IsOptional()
  @Length(0, 500)
  @Matches(/^[a-zA-Zéèêîçàôïùû0-9]+(?:['\s\-?,:!%"@;’=°_()&$€.a-zA-Zéèêîçàôïûù0-9]+)*$/)
  content: string;
  createdDate: Date;
}
