"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOriginatorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_originator_dto_1 = require("./create-originator.dto");
class UpdateOriginatorDto extends (0, mapped_types_1.PartialType)(create_originator_dto_1.CreateOriginatorDto) {
}
exports.UpdateOriginatorDto = UpdateOriginatorDto;
//# sourceMappingURL=update-originator.dto.js.map