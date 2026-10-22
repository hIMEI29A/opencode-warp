interface Definition {
    id: string;
    setup(): void;
    server(input: unknown, options?: unknown): Promise<unknown>;
}
declare const definition: Definition;
export default definition;
//# sourceMappingURL=index.d.ts.map