import { WarpPlugin } from "./v1.js";
// Do not expose legacy peer types through the V2 package's main declaration.
const definition = {
    id: "opencode-warp",
    setup() { },
    server: WarpPlugin,
};
export default definition;
//# sourceMappingURL=index.js.map