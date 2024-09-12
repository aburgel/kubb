[API](../../../packages.md) / [@kubb/oas](../index.md) / Model

# Model\<TOAS, TName\>

```ts
type Model<TOAS, TName>: TOAS extends Checks<TName>["ModelWithSchemasNamed"] ? FromSchema<TOAS["components"]["schemas"][TName]> : TOAS extends Checks<TName>["ModelWithDefinitionsNamed"] ? FromSchema<TOAS["definitions"][TName]> : never;
```

## Type Parameters

• **TOAS** *extends* [`OASDocument`](../namespaces/OasTypes/type-aliases/OASDocument.md)

• **TName** *extends* `TOAS` *extends* `Checks`\[`"ModelWithSchemas"`\] ? keyof `TOAS`\[`"components"`\]\[`"schemas"`\] : `TOAS` *extends* `Checks`\[`"ModelWithDefinitions"`\] ? keyof `TOAS`\[`"definitions"`\] : `never`

## Defined in

[packages/oas/src/infer/model.ts:27](https://github.com/kubb-project/kubb/blob/dcebbafbee668a7722775212bce85eec29e39573/packages/oas/src/infer/model.ts#L27)