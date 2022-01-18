module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8a436f1d7fe514618a0dc005c958d6ec'),
  },
});
