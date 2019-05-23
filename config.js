const config = module.exports = { };

config.host = 'localhost';
config.user = 'vagrant'; //env var: PGUSER
config.database = 'music'; //env var: PGDATABASE
config.password = 'labber'; //env var: PGPASSWORD
config.port = 5432; //env var: PGPORT


  // const config = {
  //   user: cfg.user, //env var: PGUSER
  //   database: cfg.database, //env var: PGDATABASE
  //   password: cfg.password, //env var: PGPASSWORD
  //   port: cfg.port //env var: PGPORT
  // };
 