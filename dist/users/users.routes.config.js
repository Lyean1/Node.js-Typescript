"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const users_controllers_1 = __importDefault(require("./controllers/users.controllers"));
const users_middleware_1 = __importDefault(require("./middleware/users.middleware"));
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoutes');
    }
    configureRoutes() {
        this.app
            .route(`/users`)
            .get(users_controllers_1.default.listUsers)
            .post(users_middleware_1.default.validateRequiredUserBodyFields, users_middleware_1.default.validateSameEmailDoesntExist, users_controllers_1.default.createUser);
        this.app.param(`userId`, users_middleware_1.default.extractUserId);
        this.app
            .route(`/users/:userId`)
            .all(users_middleware_1.default.vaildateUserExists)
            .get(users_controllers_1.default.getUserById)
            .delete(users_controllers_1.default.removeUser);
        this.app.put(`/users/:userId`, [
            users_middleware_1.default.validateRequiredUserBodyFields,
            users_middleware_1.default.validateSameEmailBelongToSameUser,
            users_controllers_1.default.put,
        ]);
        this.app.patch(`/users/:userId`, [
            users_middleware_1.default.validatePatchEmail,
            users_controllers_1.default.patch,
        ]);
        return this.app;
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3VzZXJzL3VzZXJzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQW9FO0FBRXBFLHdGQUErRDtBQUMvRCxxRkFBNEQ7QUFFNUQsTUFBYSxXQUFZLFNBQVEseUNBQWtCO0lBQy9DLFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxHQUFHO2FBQ0gsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUNmLEdBQUcsQ0FBQywyQkFBZ0IsQ0FBQyxTQUFTLENBQUM7YUFDL0IsSUFBSSxDQUNELDBCQUFlLENBQUMsOEJBQThCLEVBQzlDLDBCQUFlLENBQUMsNEJBQTRCLEVBQzVDLDJCQUFnQixDQUFDLFVBQVUsQ0FDOUIsQ0FBQztRQUVOLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSwwQkFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxHQUFHO2FBQ0gsS0FBSyxDQUFDLGdCQUFnQixDQUFDO2FBQ3ZCLEdBQUcsQ0FBQywwQkFBZSxDQUFDLGtCQUFrQixDQUFDO2FBQ3ZDLEdBQUcsQ0FBQywyQkFBZ0IsQ0FBQyxXQUFXLENBQUM7YUFDakMsTUFBTSxDQUFDLDJCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFO1lBQzNCLDBCQUFlLENBQUMsOEJBQThCO1lBQzlDLDBCQUFlLENBQUMsaUNBQWlDO1lBQ2pELDJCQUFnQixDQUFDLEdBQUc7U0FDdkIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUU7WUFDN0IsMEJBQWUsQ0FBQyxrQkFBa0I7WUFDbEMsMkJBQWdCLENBQUMsS0FBSztTQUN6QixDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztDQUdKO0FBckNELGtDQXFDQyJ9