/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Header } from "../header/header";

export const protobufPackage = "bigstar.product";

export enum SortOrder {
  UNKNOWN = 0,
  ASCENDING = 1,
  DESCENDING = 2,
  UNRECOGNIZED = -1,
}

export function sortOrderFromJSON(object: any): SortOrder {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return SortOrder.UNKNOWN;
    case 1:
    case "ASCENDING":
      return SortOrder.ASCENDING;
    case 2:
    case "DESCENDING":
      return SortOrder.DESCENDING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SortOrder.UNRECOGNIZED;
  }
}

export function sortOrderToJSON(object: SortOrder): string {
  switch (object) {
    case SortOrder.UNKNOWN:
      return "UNKNOWN";
    case SortOrder.ASCENDING:
      return "ASCENDING";
    case SortOrder.DESCENDING:
      return "DESCENDING";
    case SortOrder.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Product {
  id: number;
  name: string;
  description: string;
  type: string;
  price: string;
}

export interface Empty {
}

export interface AllProductsRequest {
  header: Header | undefined;
  query: Empty | undefined;
}

export interface Result {
  product: Product | undefined;
}

export interface AllProductsResponse {
  header: Header | undefined;
  results: Result[];
}

export interface GetProductRequest {
  header: Header | undefined;
  productId: number;
}

export interface GetProductResponse {
  header: Header | undefined;
  result: Result | undefined;
}

export interface SearchQuery {
  searchStr: string;
  quantity: number;
  sort: SortOrder;
}

export interface SearchRequest {
  header: Header | undefined;
  query: SearchQuery | undefined;
}

export interface SearchResponse {
  header: Header | undefined;
  results: Result[];
}

function createBaseProduct(): Product {
  return { id: 0, name: "", description: "", type: "", price: "" };
}

export const Product = {
  encode(message: Product, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.type !== "") {
      writer.uint32(34).string(message.type);
    }
    if (message.price !== "") {
      writer.uint32(42).string(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Product {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.type = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.price = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Product {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      type: isSet(object.type) ? String(object.type) : "",
      price: isSet(object.price) ? String(object.price) : "",
    };
  },

  toJSON(message: Product): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.type !== undefined && (obj.type = message.type);
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },

  create<I extends Exact<DeepPartial<Product>, I>>(base?: I): Product {
    return Product.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Product>, I>>(object: I): Product {
    const message = createBaseProduct();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.type = object.type ?? "";
    message.price = object.price ?? "";
    return message;
  },
};

function createBaseEmpty(): Empty {
  return {};
}

export const Empty = {
  encode(_: Empty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Empty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmpty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): Empty {
    return {};
  },

  toJSON(_: Empty): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Empty>, I>>(base?: I): Empty {
    return Empty.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Empty>, I>>(_: I): Empty {
    const message = createBaseEmpty();
    return message;
  },
};

function createBaseAllProductsRequest(): AllProductsRequest {
  return { header: undefined, query: undefined };
}

export const AllProductsRequest = {
  encode(message: AllProductsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.query !== undefined) {
      Empty.encode(message.query, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllProductsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllProductsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.header = Header.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.query = Empty.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AllProductsRequest {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      query: isSet(object.query) ? Empty.fromJSON(object.query) : undefined,
    };
  },

  toJSON(message: AllProductsRequest): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.query !== undefined && (obj.query = message.query ? Empty.toJSON(message.query) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AllProductsRequest>, I>>(base?: I): AllProductsRequest {
    return AllProductsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AllProductsRequest>, I>>(object: I): AllProductsRequest {
    const message = createBaseAllProductsRequest();
    message.header = (object.header !== undefined && object.header !== null)
      ? Header.fromPartial(object.header)
      : undefined;
    message.query = (object.query !== undefined && object.query !== null) ? Empty.fromPartial(object.query) : undefined;
    return message;
  },
};

function createBaseResult(): Result {
  return { product: undefined };
}

export const Result = {
  encode(message: Result, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.product !== undefined) {
      Product.encode(message.product, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Result {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.product = Product.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Result {
    return { product: isSet(object.product) ? Product.fromJSON(object.product) : undefined };
  },

  toJSON(message: Result): unknown {
    const obj: any = {};
    message.product !== undefined && (obj.product = message.product ? Product.toJSON(message.product) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Result>, I>>(base?: I): Result {
    return Result.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Result>, I>>(object: I): Result {
    const message = createBaseResult();
    message.product = (object.product !== undefined && object.product !== null)
      ? Product.fromPartial(object.product)
      : undefined;
    return message;
  },
};

function createBaseAllProductsResponse(): AllProductsResponse {
  return { header: undefined, results: [] };
}

export const AllProductsResponse = {
  encode(message: AllProductsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      Result.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllProductsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllProductsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.header = Header.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.results.push(Result.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AllProductsResponse {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Result.fromJSON(e)) : [],
    };
  },

  toJSON(message: AllProductsResponse): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    if (message.results) {
      obj.results = message.results.map((e) => e ? Result.toJSON(e) : undefined);
    } else {
      obj.results = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AllProductsResponse>, I>>(base?: I): AllProductsResponse {
    return AllProductsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AllProductsResponse>, I>>(object: I): AllProductsResponse {
    const message = createBaseAllProductsResponse();
    message.header = (object.header !== undefined && object.header !== null)
      ? Header.fromPartial(object.header)
      : undefined;
    message.results = object.results?.map((e) => Result.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetProductRequest(): GetProductRequest {
  return { header: undefined, productId: 0 };
}

export const GetProductRequest = {
  encode(message: GetProductRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.productId !== 0) {
      writer.uint32(16).int32(message.productId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProductRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProductRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.header = Header.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.productId = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetProductRequest {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      productId: isSet(object.productId) ? Number(object.productId) : 0,
    };
  },

  toJSON(message: GetProductRequest): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.productId !== undefined && (obj.productId = Math.round(message.productId));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetProductRequest>, I>>(base?: I): GetProductRequest {
    return GetProductRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetProductRequest>, I>>(object: I): GetProductRequest {
    const message = createBaseGetProductRequest();
    message.header = (object.header !== undefined && object.header !== null)
      ? Header.fromPartial(object.header)
      : undefined;
    message.productId = object.productId ?? 0;
    return message;
  },
};

function createBaseGetProductResponse(): GetProductResponse {
  return { header: undefined, result: undefined };
}

export const GetProductResponse = {
  encode(message: GetProductResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProductResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.header = Header.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.result = Result.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetProductResponse {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      result: isSet(object.result) ? Result.fromJSON(object.result) : undefined,
    };
  },

  toJSON(message: GetProductResponse): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.result !== undefined && (obj.result = message.result ? Result.toJSON(message.result) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetProductResponse>, I>>(base?: I): GetProductResponse {
    return GetProductResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetProductResponse>, I>>(object: I): GetProductResponse {
    const message = createBaseGetProductResponse();
    message.header = (object.header !== undefined && object.header !== null)
      ? Header.fromPartial(object.header)
      : undefined;
    message.result = (object.result !== undefined && object.result !== null)
      ? Result.fromPartial(object.result)
      : undefined;
    return message;
  },
};

function createBaseSearchQuery(): SearchQuery {
  return { searchStr: "", quantity: 0, sort: 0 };
}

export const SearchQuery = {
  encode(message: SearchQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.searchStr !== "") {
      writer.uint32(10).string(message.searchStr);
    }
    if (message.quantity !== 0) {
      writer.uint32(16).int32(message.quantity);
    }
    if (message.sort !== 0) {
      writer.uint32(24).int32(message.sort);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SearchQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.searchStr = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.quantity = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.sort = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SearchQuery {
    return {
      searchStr: isSet(object.searchStr) ? String(object.searchStr) : "",
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      sort: isSet(object.sort) ? sortOrderFromJSON(object.sort) : 0,
    };
  },

  toJSON(message: SearchQuery): unknown {
    const obj: any = {};
    message.searchStr !== undefined && (obj.searchStr = message.searchStr);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.sort !== undefined && (obj.sort = sortOrderToJSON(message.sort));
    return obj;
  },

  create<I extends Exact<DeepPartial<SearchQuery>, I>>(base?: I): SearchQuery {
    return SearchQuery.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SearchQuery>, I>>(object: I): SearchQuery {
    const message = createBaseSearchQuery();
    message.searchStr = object.searchStr ?? "";
    message.quantity = object.quantity ?? 0;
    message.sort = object.sort ?? 0;
    return message;
  },
};

function createBaseSearchRequest(): SearchRequest {
  return { header: undefined, query: undefined };
}

export const SearchRequest = {
  encode(message: SearchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.query !== undefined) {
      SearchQuery.encode(message.query, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SearchRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.header = Header.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.query = SearchQuery.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SearchRequest {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      query: isSet(object.query) ? SearchQuery.fromJSON(object.query) : undefined,
    };
  },

  toJSON(message: SearchRequest): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.query !== undefined && (obj.query = message.query ? SearchQuery.toJSON(message.query) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<SearchRequest>, I>>(base?: I): SearchRequest {
    return SearchRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SearchRequest>, I>>(object: I): SearchRequest {
    const message = createBaseSearchRequest();
    message.header = (object.header !== undefined && object.header !== null)
      ? Header.fromPartial(object.header)
      : undefined;
    message.query = (object.query !== undefined && object.query !== null)
      ? SearchQuery.fromPartial(object.query)
      : undefined;
    return message;
  },
};

function createBaseSearchResponse(): SearchResponse {
  return { header: undefined, results: [] };
}

export const SearchResponse = {
  encode(message: SearchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      Result.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SearchResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.header = Header.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.results.push(Result.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SearchResponse {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Result.fromJSON(e)) : [],
    };
  },

  toJSON(message: SearchResponse): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    if (message.results) {
      obj.results = message.results.map((e) => e ? Result.toJSON(e) : undefined);
    } else {
      obj.results = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SearchResponse>, I>>(base?: I): SearchResponse {
    return SearchResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SearchResponse>, I>>(object: I): SearchResponse {
    const message = createBaseSearchResponse();
    message.header = (object.header !== undefined && object.header !== null)
      ? Header.fromPartial(object.header)
      : undefined;
    message.results = object.results?.map((e) => Result.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
