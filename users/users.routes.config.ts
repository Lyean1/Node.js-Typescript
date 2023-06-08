import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";
import UsersControllers from "./controllers/users.controllers";
import UsersMiddleware from "./middleware/users.middleware";

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes(): express.Application {
        this.app
            .route(`/users`)
            .get(UsersControllers.listUsers)
            .post(
                UsersMiddleware.validateRequiredUserBodyFields,
                UsersMiddleware.validateSameEmailDoesntExist,  
                UsersControllers.createUser  
            );

        this.app.param(`userId`, UsersMiddleware.extractUserId);
        this.app
            .route(`/users/:userId`)
            .all(UsersMiddleware.vaildateUserExists)
            .get(UsersControllers.getUserById)
            .delete(UsersControllers.removeUser);

        this.app.put(`/users/:userId`, [
            UsersMiddleware.validateRequiredUserBodyFields,
            UsersMiddleware.validateSameEmailBelongToSameUser,
            UsersControllers.put,
        ]);

        this.app.patch(`/users/:userId`, [
            UsersMiddleware.validatePatchEmail,
            UsersControllers.patch,
        ]);

        return this.app;
    }
    

}
