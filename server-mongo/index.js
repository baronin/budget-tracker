import express from 'express';
import cors from 'cors';
import corsOptions from './cors/cors.config.js';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import swaggerUi from 'swagger-ui-express';
import AuthRouter from './routers/authRouter.js';
import UserRouter from './routers/userRouter.js';
import swaggerSpec from './swagger_output.json' assert {type: 'json'};

const PORT = process.env.PORT || 5050;
const DB_URI = process.env.MONGO_URI || 'mongodb+srv://baronindev:7Z65p6GUUHURBHBN@osbb.k5j86qf.mongodb.net/?retryWrites=true&w=majority';

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.static('static/files'));
app.use(express.static('static/images'));
app.use(fileUpload({}));
app.use('/auth', AuthRouter);
app.use('/api', UserRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const startApp = async (port, uri) => {
  try {
    await mongoose.connect(uri);
    app.listen(port, () => {
      console.log(`SERVER HAS BEEN STARTED ON PORT: ${port}`);
    });
  } catch (e) {
    console.dir(e)
    throw new Error(e.message);
  }
};
startApp(PORT, DB_URI).then();
