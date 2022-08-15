"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
var port = 3000;
app.get('/', (req, res) => {
    res.send('Teste Server');
});
const server = app.listen(port, () => {
    console.log(`Server is listing on port ${port}`);
});
server.on('error', e => console.error("Error", e));
//# sourceMappingURL=app.js.map