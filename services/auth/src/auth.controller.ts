import { Controller, Post, Body, Get, Req } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(private readonly jwtService: JwtService) {}

  @Post('signup')
  async signup(@Body() body: any) {
    return { id: '00000000-0000-0000-0000-000000000000', status: 'created' };
  }

  @Post('login')
  async login(@Body() body: { phone: string; password?: string }) {
    const payload = { sub: '00000000-0000-0000-0000-000000000000', role: 'rider' };
    return { access_token: this.jwtService.sign(payload) };
  }

  @Get('me')
  async me(@Req() req: any) {
    return { id: '00000000-0000-0000-0000-000000000000', phone: '+63...' };
  }
  }
