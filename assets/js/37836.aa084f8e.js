"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37836],{62565:e=>{e.exports=JSON.parse('{"filePath":"/home/runner/work/refine/refine/packages/supabase/src/index.ts","description":"","displayName":"liveProvider","props":{"supabaseUrl":{"defaultValue":null,"description":"","name":"supabaseUrl","required":true,"type":{"name":"string"},"tags":{}},"supabaseKey":{"defaultValue":null,"description":"","name":"supabaseKey","required":true,"type":{"name":"string"},"tags":{}},"auth":{"defaultValue":null,"description":"Supabase Auth allows you to create and manage user sessions for access to data that is secured by access policies.","name":"auth","required":true,"type":{"name":"SupabaseAuthClient"},"tags":{}},"realtime":{"defaultValue":null,"description":"","name":"realtime","required":true,"type":{"name":"RealtimeClient"},"tags":{}},"realtimeUrl":{"defaultValue":null,"description":"","name":"realtimeUrl","required":true,"type":{"name":"string"},"tags":{}},"authUrl":{"defaultValue":null,"description":"","name":"authUrl","required":true,"type":{"name":"string"},"tags":{}},"storageUrl":{"defaultValue":null,"description":"","name":"storageUrl","required":true,"type":{"name":"string"},"tags":{}},"functionsUrl":{"defaultValue":null,"description":"","name":"functionsUrl","required":true,"type":{"name":"string"},"tags":{}},"rest":{"defaultValue":null,"description":"","name":"rest","required":true,"type":{"name":"PostgrestClient<any, \\"public\\", any>"},"tags":{}},"storageKey":{"defaultValue":null,"description":"","name":"storageKey","required":true,"type":{"name":"string"},"tags":{}},"fetch":{"defaultValue":null,"description":"","name":"fetch","required":false,"type":{"name":"((input: RequestInfo | URL, init?: RequestInit) => Promise<Response>)"},"tags":{}},"changedAccessToken":{"defaultValue":null,"description":"","name":"changedAccessToken","required":false,"type":{"name":"string"},"tags":{}},"headers":{"defaultValue":null,"description":"","name":"headers","required":true,"type":{"name":"{ [key: string]: string; }"},"tags":{}},"functions":{"defaultValue":null,"description":"Supabase Functions allows you to deploy and invoke edge functions.","name":"functions","required":true,"type":{"name":"FunctionsClient"},"tags":{}},"storage":{"defaultValue":null,"description":"Supabase Storage allows you to manage user-generated content, such as photos or videos.","name":"storage","required":true,"type":{"name":"StorageClient"},"tags":{}},"from":{"defaultValue":null,"description":"","name":"from","required":true,"type":{"name":"{ <TableName extends string, Table extends any>(relation: TableName): PostgrestQueryBuilder<any, Table, Table extends { Relationships: infer R; } ? R : unknown>; <ViewName extends string, View extends any>(relation: ViewName): PostgrestQueryBuilder<...>; (relation: string): PostgrestQueryBuilder<...>; }"},"tags":{}},"schema":{"defaultValue":null,"description":"Perform a query on a schema distinct from the default schema supplied via\\nthe `options.db.schema` constructor parameter.\\n\\nThe schema needs to be on the list of exposed schemas inside Supabase.","name":"schema","required":true,"type":{"name":"<DynamicSchema extends string>(schema: DynamicSchema) => PostgrestClient<any, DynamicSchema, any>"},"tags":{"param":"schema - The name of the schema to query"}},"rpc":{"defaultValue":null,"description":"Perform a function call.","name":"rpc","required":true,"type":{"name":"<FunctionName extends string, Function_ extends any>(fn: FunctionName, args?: Function_[\\"Args\\"] | undefined, options?: { head?: boolean | undefined; count?: \\"exact\\" | \\"planned\\" | \\"estimated\\" | undefined; } | undefined) => PostgrestFilterBuilder<...>"},"tags":{"param":"fn - The function name to call\\nargs - The arguments to pass to the function call\\noptions - Named parameters\\noptions.head - When set to `true`, `data` will not be returned.\\nUseful if you only need the count.\\noptions.count - Count algorithm to use to count rows returned by the\\nfunction. Only applicable for [set-returning\\nfunctions](https://www.postgresql.org/docs/current/functions-srf.html).\\n\\n`\\"exact\\"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the\\nhood.\\n\\n`\\"planned\\"`: Approximated but fast count algorithm. Uses the Postgres\\nstatistics under the hood.\\n\\n`\\"estimated\\"`: Uses exact count for low numbers and planned count for high\\nnumbers."}},"channel":{"defaultValue":null,"description":"Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.","name":"channel","required":true,"type":{"name":"(name: string, opts?: RealtimeChannelOptions | undefined) => RealtimeChannel"},"tags":{"param":"name - The name of the Realtime channel.\\nopts - The options to pass to the Realtime channel."}},"getChannels":{"defaultValue":null,"description":"Returns all Realtime channels.","name":"getChannels","required":true,"type":{"name":"() => RealtimeChannel[]"},"tags":{}},"removeChannel":{"defaultValue":null,"description":"Unsubscribes and removes Realtime channel from Realtime client.","name":"removeChannel","required":true,"type":{"name":"(channel: RealtimeChannel) => Promise<\\"ok\\" | \\"timed out\\" | \\"error\\">"},"tags":{"param":"channel - The name of the Realtime channel."}},"removeAllChannels":{"defaultValue":null,"description":"Unsubscribes and removes all Realtime channels from Realtime client.","name":"removeAllChannels","required":true,"type":{"name":"() => Promise<(\\"ok\\" | \\"timed out\\" | \\"error\\")[]>"},"tags":{}},"_getAccessToken":{"defaultValue":null,"description":"","name":"_getAccessToken","required":true,"type":{"name":"any"},"tags":{}},"_initSupabaseAuthClient":{"defaultValue":null,"description":"","name":"_initSupabaseAuthClient","required":true,"type":{"name":"any"},"tags":{}},"_initRealtimeClient":{"defaultValue":null,"description":"","name":"_initRealtimeClient","required":true,"type":{"name":"any"},"tags":{}},"_listenForAuthEvents":{"defaultValue":null,"description":"","name":"_listenForAuthEvents","required":true,"type":{"name":"any"},"tags":{}},"_handleTokenChanged":{"defaultValue":null,"description":"","name":"_handleTokenChanged","required":true,"type":{"name":"any"},"tags":{}}},"generatedAt":1697721949968}')}}]);