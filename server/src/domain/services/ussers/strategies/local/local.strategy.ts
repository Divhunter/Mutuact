import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../../auth.service";
import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import * as bcrypt from "bcryptjs";
import { validate } from "class-validator";
import { LoginDto } from "src/domain/dtos/users/login.dto";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: "email",
      passwordField: "password",
    });
  }

  async validate(email: string, password: string): Promise<any> {
    const loginDto = new LoginDto();
    loginDto.email = email;
    loginDto.password = password;
    // console.log(email, password);

    // Validation du loginDto avant que passport l'utilise
    const errors = await validate(loginDto);
    if (errors.length > 0) {
      const errorMessages = errors.map((error) => {
        const constraints = Object.values(error.constraints || {});
        return constraints.map((constraint) => constraint);
      });

      // Flatten the array of error messages
      const flattenedErrorMessages = [].concat(...errorMessages);

      throw new BadRequestException({ message: flattenedErrorMessages });
    }

    const user = await this.authService.findUserByEmail(email);
    if (!user) throw new NotFoundException("User not found");
    if (user.emailVerified !== true) throw new UnauthorizedException("Email non confirmé, veillez le confirmé d'abord!");

    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) throw new UnauthorizedException("Password does not match");

    Reflect.deleteProperty(user, "password");
    return user;
  }
}
