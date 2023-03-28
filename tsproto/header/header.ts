/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "bigstar";

export interface UUID {
  Value: string;
}

export interface Header {
  span: UUID | undefined;
  rootSpan: UUID | undefined;
}

function createBaseUUID(): UUID {
  return { Value: "" };
}

export const UUID = {
  encode(message: UUID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Value !== "") {
      writer.uint32(10).string(message.Value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UUID {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUUID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.Value = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UUID {
    return { Value: isSet(object.Value) ? String(object.Value) : "" };
  },

  toJSON(message: UUID): unknown {
    const obj: any = {};
    message.Value !== undefined && (obj.Value = message.Value);
    return obj;
  },

  create<I extends Exact<DeepPartial<UUID>, I>>(base?: I): UUID {
    return UUID.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UUID>, I>>(object: I): UUID {
    const message = createBaseUUID();
    message.Value = object.Value ?? "";
    return message;
  },
};

function createBaseHeader(): Header {
  return { span: undefined, rootSpan: undefined };
}

export const Header = {
  encode(message: Header, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.span !== undefined) {
      UUID.encode(message.span, writer.uint32(10).fork()).ldelim();
    }
    if (message.rootSpan !== undefined) {
      UUID.encode(message.rootSpan, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Header {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.span = UUID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.rootSpan = UUID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Header {
    return {
      span: isSet(object.span) ? UUID.fromJSON(object.span) : undefined,
      rootSpan: isSet(object.rootSpan) ? UUID.fromJSON(object.rootSpan) : undefined,
    };
  },

  toJSON(message: Header): unknown {
    const obj: any = {};
    message.span !== undefined && (obj.span = message.span ? UUID.toJSON(message.span) : undefined);
    message.rootSpan !== undefined && (obj.rootSpan = message.rootSpan ? UUID.toJSON(message.rootSpan) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Header>, I>>(base?: I): Header {
    return Header.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Header>, I>>(object: I): Header {
    const message = createBaseHeader();
    message.span = (object.span !== undefined && object.span !== null) ? UUID.fromPartial(object.span) : undefined;
    message.rootSpan = (object.rootSpan !== undefined && object.rootSpan !== null)
      ? UUID.fromPartial(object.rootSpan)
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
