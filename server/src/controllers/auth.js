const authService = require('../service/auth');

class AuthController {
  // eslint-disable-next-line class-methods-use-this,consistent-return
  async registration(req, res) {
    try {
      const newUser = await authService.registration(req, res);
      res.cookie('refreshToken', newUser.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.status(201).json(newUser);
    } catch (error) {
      /* empty */
    }

    // #swagger.tags = ['Auth']
    // #swagger.summary = 'Registration'
    // #swagger.description = 'New user registration with the provided information'
    /*  #swagger.parameters['obj'] = {
               in: 'body',
               description: 'User object',
               schema: {
                    $name: 'John',
                    surname: 'Doe',
                    $gender: 'man',
                    $phone: '+380123456789',
                    $password: '123456789f',
                    $repeatPassword: '123456789',
                    email: 'john.doe@example.com',
                    $floor: 5,
                    $room: 34,
                    $role: 'admin',
                    avatar: ''
                }
        } */
    /* #swagger.responses[200] = {
            description: 'Successful response',
            schema: {
                id: 5,
                name: 'John',
                surname: 'Doe',
                gender: 'man',
                phone: '+380123456789',
                password: '$2b$04$g4415yNFT4BGk8aoxufQpuNYX5byukyoJjdzJvGuMnSTf4r2p6lga',
                email: 'john.doe@example.com',
                floor: 5,
                room: 34,
                role: 'admin',
                avatar: ''
            }
        } */
  }

  // eslint-disable-next-line class-methods-use-this,consistent-return
  async login(req, res) {
    try {
      const user = await authService.login(req, res);
      res.cookie('refreshToken', user.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.status(200).json(user);
    } catch (error) {
      /* empty */
    }

    // #swagger.tags = ['Auth']
    // #swagger.summary = 'Login'
    // #swagger.description = 'Log in account'
    /*  #swagger.parameters['obj'] = {
               in: 'body',
               description: 'User object',
               schema: {
                    $phoneOrEmail: '+380123456789',
                    $password: '123456789qwe'
                }
        } */
    /* #swagger.responses[200] = {
            description: 'Successful response',
            schema: {
                id: 5,
                name: 'John',
                surname: 'Doe',
                gender: 'man',
                phone: '+380123456789',
                password: '$2b$04$g4415yNFT4BGk8aoxufQpuNYX5byukyoJjdzJvGuMnSTf4r2p6lga',
                email: 'john.doe@example.com',
                floor: 5,
                room: 34,
                role: 'admin',
                avatar: ''
            }
        } */
  }
}

module.exports = new AuthController();
