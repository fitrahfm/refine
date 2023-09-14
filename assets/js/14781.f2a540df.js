"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14781],{14781:e=>{e.exports=JSON.parse('{"filePath":"/home/runner/work/refine/refine/packages/ably/src/index.ts","description":"","displayName":"liveProvider","props":{"auth":{"defaultValue":null,"description":"An {@link Types.AuthPromise} object.","name":"auth","required":true,"type":{"name":"AuthPromise"},"tags":{}},"channels":{"defaultValue":null,"description":"A {@link Types.Channels} object.","name":"channels","required":true,"type":{"name":"Channels<RealtimeChannelPromise>"},"tags":{}},"connection":{"defaultValue":null,"description":"A {@link Types.ConnectionPromise} object.","name":"connection","required":true,"type":{"name":"ConnectionPromise"},"tags":{}},"request":{"defaultValue":null,"description":"Makes a REST request to a provided path. This is provided as a convenience for developers who wish to use REST API functionality that is either not documented or is not yet included in the public API, without having to directly handle features such as authentication, paging, fallback hosts, MsgPack and JSON support.","name":"request","required":true,"type":{"name":"<T = any>(method: string, path: string, params?: any, body?: any, headers?: any) => Promise<HttpPaginatedResponse<T>>"},"tags":{"param":"method - The request method to use, such as `GET`, `POST`.\\npath - The request path.\\nparams - The parameters to include in the URL query of the request. The parameters depend on the endpoint being queried. See the [REST API reference](https://ably.com/docs/api/rest-api) for the available parameters of each endpoint.\\nbody - The JSON body of the request.\\nheaders - Additional HTTP headers to include in the request.","returns":"A promise which, upon success, will be fulfilled with the {@link Types.HttpPaginatedResponse } response object returned by the HTTP request. This response object will contain an empty or JSON-encodable object. Upon failure, the promise will be rejected with an {@link Types.ErrorInfo } object which explains the error."}},"stats":{"defaultValue":null,"description":"Queries the REST `/stats` API and retrieves your application\'s usage statistics. Returns a {@link Types.PaginatedResult} object, containing an array of {@link Types.Stats} objects. See the [Stats docs](https://ably.com/docs/general/statistics).","name":"stats","required":true,"type":{"name":"(params?: any) => Promise<PaginatedResult<Stats>>"},"tags":{"param":"params - A set of parameters which are used to specify which statistics should be retrieved. This parameter should be a {@link Types.StatsParams } object. For reasons of backwards compatibility this parameter will also accept `any`; this ability will be removed in the next major release of this SDK. If you do not provide this argument, then this method will use the default parameters described in the {@link Types.StatsParams } interface.","returns":"A promise which, upon success, will be fulfilled with a {@link Types.PaginatedResult } object containing an array of {@link Types.Stats } objects. Upon failure, the promise will be rejected with an {@link Types.ErrorInfo } object which explains the error."}},"time":{"defaultValue":null,"description":"Retrieves the time from the Ably service as milliseconds since the Unix epoch. Clients that do not have access to a sufficiently well maintained time source and wish to issue Ably {@link Types.TokenRequest`TokenRequest`s} with a more accurate timestamp should use the {@link Types.ClientOptions.queryTime} property instead of this method.","name":"time","required":true,"type":{"name":"() => Promise<number>"},"tags":{"returns":"A promise which, upon success, will be fulfilled with the time as milliseconds since the Unix epoch. Upon failure, the promise will be rejected with an {@link Types.ErrorInfo } object which explains the error."}},"batchPublish":{"defaultValue":null,"description":"Publishes a {@link Types.BatchPublishSpec} object to one or more channels, up to a maximum of 100 channels.\\nPublishes one or more {@link Types.BatchPublishSpec} objects to one or more channels, up to a maximum of 100 channels.","name":"batchPublish","required":true,"type":{"name":"{ (spec: BatchPublishSpec): Promise<BatchResult<BatchPublishSuccessResult | BatchPublishFailureResult>>; (specs: BatchPublishSpec[]): Promise<...>; }"},"tags":{"param":"spec - A {@link Types.BatchPublishSpec } object.\\nspecs - An array of {@link Types.BatchPublishSpec } objects.","returns":"A promise which, upon success, will be fulfilled with a {@link Types.BatchResult } object containing information about the result of the batch publish for each requested channel. Upon failure, the promise will be rejected with an {@link Types.ErrorInfo } object which explains the error.\\nA promise which, upon success, will be fulfilled with an array of {@link Types.BatchResult } objects containing information about the result of the batch publish for each requested channel for each provided {@link Types.BatchPublishSpec }. This array is in the same order as the provided {@link Types.BatchPublishSpec } array. Upon failure, the promise will be rejected with an {@link Types.ErrorInfo } object which explains the error."}},"batchPresence":{"defaultValue":null,"description":"Retrieves the presence state for one or more channels, up to a maximum of 100 channels. Presence state includes the `clientId` of members and their current {@link Types.PresenceAction}.","name":"batchPresence","required":true,"type":{"name":"(channels: string[]) => Promise<BatchResult<BatchPresenceSuccessResult | BatchPresenceFailureResult>[]>"},"tags":{"param":"channels - An array of one or more channel names, up to a maximum of 100 channels.","returns":"A promise which, upon success, will be fulfilled with a {@link Types.BatchResult } object containing information about the result of the batch presence request for each requested channel. Upon failure, the promise will be rejected with an {@link Types.ErrorInfo } object which explains the error."}},"push":{"defaultValue":null,"description":"A {@link Types.PushPromise} object.","name":"push","required":true,"type":{"name":"PushPromise"},"tags":{}},"clientId":{"defaultValue":null,"description":"A client ID, used for identifying this client when publishing messages or for presence purposes. The `clientId` can be any non-empty string, except it cannot contain a `*`. This option is primarily intended to be used in situations where the library is instantiated with a key. A `clientId` may also be implicit in a token used to instantiate the library; an error will be raised if a `clientId` specified here conflicts with the `clientId` implicit in the token.","name":"clientId","required":true,"type":{"name":"string"},"tags":{}},"close":{"defaultValue":null,"description":"Calls {@link Types.ConnectionBase.close`connection.close()`} and causes the connection to close, entering the closing state. Once closed, the library will not attempt to re-establish the connection without an explicit call to {@link Types.ConnectionBase.connect`connect()`}.","name":"close","required":true,"type":{"name":"() => void"},"tags":{}},"connect":{"defaultValue":null,"description":"Calls {@link Types.ConnectionBase.connect`connection.connect()`} and causes the connection to open, entering the connecting state. Explicitly calling `connect()` is unnecessary unless the {@link Types.ClientOptions.autoConnect} property is disabled.","name":"connect","required":true,"type":{"name":"() => void"},"tags":{}}},"generatedAt":1694682241045}')}}]);