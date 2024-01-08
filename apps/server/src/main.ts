import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { initTRPC } from '@trpc/server';
import cors from 'cors';
import appRouter from './router/appRouter';
import { dbConection } from './db/connectionDB';
import { log } from 'console';
import { createUsersTable } from './users/model/usersSchema';

const t = initTRPC.create();

const httpServer = createHTTPServer({
  router: appRouter,
  middleware: cors(),
});


httpServer.listen(3000);
httpServer.server.on('listening', ()=>{

    console.log("tRPC server is listening on port 3000🚀😊");
    dbConection().then((res)=> {console.log(res)
      createUsersTable()
    }).catch((error)=>console.error(error))
})
