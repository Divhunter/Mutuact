import { IsString, IsEmail, IsOptional, Matches, Length } from 'class-validator';

export class CreateProjetDto {
  @IsString({ message: 'Le prénom doit être une chaîne de caractères' })
  @Matches(/^[a-zA-ZÀÁÂÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝàáâæçèéêëìíîïñòóôõöùúûüý -]+$/, { message: 'Le prénom contient des caractères non autorisés' })
  @Length(3, 30, { message: 'Le prénom doit être entre 3 et 30 caractères' })
  firstName: string;

  @IsString({ message: 'Le nom doit être une chaîne de caractères' })
  @Matches(/^[a-zA-ZÀÁÂÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝàáâæçèéêëìíîïñòóôõöùúûüý -]+$/, { message: 'Le nom contient des caractères non autorisés' })
  @Length(3, 30, { message: 'Le nom doit être entre 3 et 30 caractères' })
  lastName: string;

  @IsEmail({}, { message: "L'adresse e-mail n'est pas valide" })
  email: string;

  @IsString({ message: 'Le numéro de téléphone doit être une chaîne de caractères' })
  @IsOptional()
  @Matches(/^\+?\d{9,14}(?:[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})?$/, {
    message: "Le numéro de téléphone n'est pas au bon format",
  })
  phone?: string;

  @IsString({ message: 'Le message doit être une chaîne de caractères' })
  @IsOptional()
  @Length(0, 500, { message: 'Le message doit avoir moins de 500 caractères' })
  @Matches(/^[a-zA-Zéèêîçàôïùû0-9]+(?:['\s\-?,:!%"@;’=°_()&$€.a-zA-Zéèêîçàôïûù0-9]+)*$/, {
    message: 'Le message contient des caractères non autorisés',
  })
  message?: string;
}

// MessageDto.ts
export class MessageDto {
  content: string;
  createdDate: Date;
}
