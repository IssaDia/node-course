const http = require('http');
const app = require('./app');


const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || 3000);

const errorHandle = (error) =>{
    if(error.syscall != "listen") {
        throw error;
    }
    
    const adress = server.address();
    const bind = typeof address === "string" ? `pipe ${address}` : `port: ${port}`;
    switch (error.code) {
        case 'EACCESS':
            console.error(`${bind} requires elevated privileges. `);
            process.exit(1);
            case 'EADDINUSE':
                console.error(`${bind} is already in use `);
                process.exit(1);
                break;
                default:
                    throw error;
                    
                }
}

const server = http.createServer(app);
server.on("error", errorHandle);
server.on("listening", () => {
  const adress = server.address();
  const bind = typeof address === "string" ? `pipe ${address}` : `port: ${port}`;
  console.log(`listening on ${bind}`);
});
server.listen(port);


app.set('port', port);