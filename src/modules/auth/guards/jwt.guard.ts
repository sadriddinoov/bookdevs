import { AuthGuard } from '@nestjs/passport'

export class JWtGuard extends AuthGuard('jwt') {}