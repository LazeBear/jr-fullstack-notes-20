const authGuard = require('../../middleware/authGuard');
const { validateToken } = require('../../utils/jwt');
jest.mock('../../utils/jwt');
// const validateToken = jest.fn()

describe('authentication guard middleware', () => {
  // lifehook function
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return 401 if authorization header is not defined', () => {
    // setup
    const req = {
      header: jest.fn(),
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
    };
    res.status.mockReturnValue(res);
    const next = jest.fn();

    // execute
    authGuard(req, res, next);

    // compare
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      error: 'missing authorization header',
    });
  });

  it('should call next function when token is valid', () => {
    const token = 'any_token';
    const req = {
      header: jest.fn(),
    };
    req.header.mockReturnValue(`Bearer ${token}`);
    const res = {
      status: jest.fn(),
      json: jest.fn(),
    };
    res.status.mockReturnValue(res);
    const next = jest.fn();
    validateToken.mockImplementation((token) => {
      // if (token xxxxx)
      return {
        id: 'fake_id',
      };
    });

    authGuard(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(validateToken).toHaveBeenCalledWith(token);
  });
});

// test coverage 90% 98% 100%
