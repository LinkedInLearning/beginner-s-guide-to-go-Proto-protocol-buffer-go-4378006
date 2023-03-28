/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Header } from "../header/header";

export const protobufPackage = "bigstar.character";

export interface Character {
  id: number;
  name: string;
  category: string;
  bio: string;
  description: string;
}

export interface Empty {
}

export interface AllCharactersRequest {
  header: Header | undefined;
  query: Empty | undefined;
}

export interface Result {
  character: Character | undefined;
}

export interface AllCharactersResponse {
  header: Header | undefined;
  results: Result[];
}

export interface GetCharacterRequest {
  header: Header | undefined;
  characterId: number;
}

export interface GetCharacterResponse {
  header: Header | undefined;
  result: Result | undefined;
}

function createBaseCharacter(): Character {
  return { id: 0, name: "", category: "", bio: "", description: "" };
}

export const Character = {
  encode(message: Character, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.category !== "") {
      writer.uint32(26).string(message.category);
    }
    if (message.bio !== "") {
      writer.uint32(34).string(message.bio);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Character {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCharacter();
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

          message.category = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.bio = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Character {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      category: isSet(object.category) ? String(object.category) : "",
      bio: isSet(object.bio) ? String(object.bio) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: Character): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.category !== undefined && (obj.category = message.category);
    message.bio !== undefined && (obj.bio = message.bio);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  create<I extends Exact<DeepPartial<Character>, I>>(base?: I): Character {
    return Character.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Character>, I>>(object: I): Character {
    const message = createBaseCharacter();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.category = object.category ?? "";
    message.bio = object.bio ?? "";
    message.description = object.description ?? "";
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

function createBaseAllCharactersRequest(): AllCharactersRequest {
  return { header: undefined, query: undefined };
}

export const AllCharactersRequest = {
  encode(message: AllCharactersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.query !== undefined) {
      Empty.encode(message.query, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllCharactersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllCharactersRequest();
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

  fromJSON(object: any): AllCharactersRequest {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      query: isSet(object.query) ? Empty.fromJSON(object.query) : undefined,
    };
  },

  toJSON(message: AllCharactersRequest): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.query !== undefined && (obj.query = message.query ? Empty.toJSON(message.query) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AllCharactersRequest>, I>>(base?: I): AllCharactersRequest {
    return AllCharactersRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AllCharactersRequest>, I>>(object: I): AllCharactersRequest {
    const message = createBaseAllCharactersRequest();
    message.header = (object.header !== undefined && object.header !== null)
      ? Header.fromPartial(object.header)
      : undefined;
    message.query = (object.query !== undefined && object.query !== null) ? Empty.fromPartial(object.query) : undefined;
    return message;
  },
};

function createBaseResult(): Result {
  return { character: undefined };
}

export const Result = {
  encode(message: Result, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.character !== undefined) {
      Character.encode(message.character, writer.uint32(10).fork()).ldelim();
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

          message.character = Character.decode(reader, reader.uint32());
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
    return { character: isSet(object.character) ? Character.fromJSON(object.character) : undefined };
  },

  toJSON(message: Result): unknown {
    const obj: any = {};
    message.character !== undefined &&
      (obj.character = message.character ? Character.toJSON(message.character) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Result>, I>>(base?: I): Result {
    return Result.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Result>, I>>(object: I): Result {
    const message = createBaseResult();
    message.character = (object.character !== undefined && object.character !== null)
      ? Character.fromPartial(object.character)
      : undefined;
    return message;
  },
};

function createBaseAllCharactersResponse(): AllCharactersResponse {
  return { header: undefined, results: [] };
}

export const AllCharactersResponse = {
  encode(message: AllCharactersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      Result.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllCharactersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllCharactersResponse();
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

  fromJSON(object: any): AllCharactersResponse {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Result.fromJSON(e)) : [],
    };
  },

  toJSON(message: AllCharactersResponse): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    if (message.results) {
      obj.results = message.results.map((e) => e ? Result.toJSON(e) : undefined);
    } else {
      obj.results = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AllCharactersResponse>, I>>(base?: I): AllCharactersResponse {
    return AllCharactersResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AllCharactersResponse>, I>>(object: I): AllCharactersResponse {
    const message = createBaseAllCharactersResponse();
    message.header = (object.header !== undefined && object.header !== null)
      ? Header.fromPartial(object.header)
      : undefined;
    message.results = object.results?.map((e) => Result.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetCharacterRequest(): GetCharacterRequest {
  return { header: undefined, characterId: 0 };
}

export const GetCharacterRequest = {
  encode(message: GetCharacterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.characterId !== 0) {
      writer.uint32(16).int32(message.characterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCharacterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCharacterRequest();
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

          message.characterId = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetCharacterRequest {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      characterId: isSet(object.characterId) ? Number(object.characterId) : 0,
    };
  },

  toJSON(message: GetCharacterRequest): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.characterId !== undefined && (obj.characterId = Math.round(message.characterId));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCharacterRequest>, I>>(base?: I): GetCharacterRequest {
    return GetCharacterRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetCharacterRequest>, I>>(object: I): GetCharacterRequest {
    const message = createBaseGetCharacterRequest();
    message.header = (object.header !== undefined && object.header !== null)
      ? Header.fromPartial(object.header)
      : undefined;
    message.characterId = object.characterId ?? 0;
    return message;
  },
};

function createBaseGetCharacterResponse(): GetCharacterResponse {
  return { header: undefined, result: undefined };
}

export const GetCharacterResponse = {
  encode(message: GetCharacterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCharacterResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCharacterResponse();
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

  fromJSON(object: any): GetCharacterResponse {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      result: isSet(object.result) ? Result.fromJSON(object.result) : undefined,
    };
  },

  toJSON(message: GetCharacterResponse): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.result !== undefined && (obj.result = message.result ? Result.toJSON(message.result) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCharacterResponse>, I>>(base?: I): GetCharacterResponse {
    return GetCharacterResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetCharacterResponse>, I>>(object: I): GetCharacterResponse {
    const message = createBaseGetCharacterResponse();
    message.header = (object.header !== undefined && object.header !== null)
      ? Header.fromPartial(object.header)
      : undefined;
    message.result = (object.result !== undefined && object.result !== null)
      ? Result.fromPartial(object.result)
      : undefined;
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
