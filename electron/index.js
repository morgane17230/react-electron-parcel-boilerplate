process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
process.env.NODE_ENV === 'production'
    ? require('./prod.js')
    : require('./dev.js');