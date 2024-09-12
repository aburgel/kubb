[API](../../../packages.md) / [@kubb/core](../index.md) / PluginFactoryOptions

# PluginFactoryOptions\<TName, TOptions, TResolvedOptions, TContext, TResolvePathOptions\>

```ts
type PluginFactoryOptions<TName, TOptions, TResolvedOptions, TContext, TResolvePathOptions>: object;
```

## Type Parameters

• **TName** *extends* `string` = `string`

• **TOptions** *extends* `object` = `object`

• **TResolvedOptions** *extends* `object` = `TOptions`

• **TContext** = `any`

• **TResolvePathOptions** *extends* `object` = `object`

## Type declaration

### context

```ts
context: TContext;
```

### key

```ts
key: PluginKey<TName | string>;
```

Same behaviour like what has been done with `QueryKey` in `@tanstack/react-query`

### name

```ts
name: TName;
```

### options

```ts
options: TOptions;
```

### resolvedOptions

```ts
resolvedOptions: TResolvedOptions;
```

### resolvePathOptions

```ts
resolvePathOptions: TResolvePathOptions;
```

## Defined in

[types.ts:103](https://github.com/kubb-project/kubb/blob/dcebbafbee668a7722775212bce85eec29e39573/packages/core/src/types.ts#L103)