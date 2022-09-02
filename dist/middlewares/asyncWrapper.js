"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asyncWrapper = (controller) => (req, res, next) => {
    controller(req)
        .then((data) => res.json(data))
        .catch(next);
};
exports.default = asyncWrapper;
//# sourceMappingURL=asyncWrapper.js.map