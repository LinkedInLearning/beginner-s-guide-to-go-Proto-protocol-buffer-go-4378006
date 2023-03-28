/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Header } from "../header/header";

export const protobufPackage = "bigstar.customer";

export interface Customer {
  id: number;
  username: string;
  password: string;
  email: string;
}

export interface SigninRequest {
  header: Header | undefined;
  customer: Customer | undefined;
}

export interface SigninResponse {
  header: Header | undefined;
  customer: Customer | undefined;
}

export interface LoginRequest {
  header: Header | undefined;
  customer: Customer | undefined;
}

export interface LoginResponse {
  header: Header | undefined;
  customer: Customer | undefined;
}

function createBaseCustomer(): Customer {
  return { id: 0, username: "", password: "", email: "" };
}

export const Customer = {
  encode(message: Customer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(26).string(message.password);
    }
    if (message.email !== "") {
      writer.uint32(34).string(message.email);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Customer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomer();
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

          message.username = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.password = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.email = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Customer {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      username: isSet(object.username) ? String(object.username) : "",
      password: isSet(object.password) ? String(object.password) : "",
      email: isSet(object.email) ? String(object.email) : "",
    };
  },

  toJSON(message: Customer): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.username !== undefined && (obj.username = message.username);
    message.password !== undefined && (obj.password = message.password);
    message.email !== undefined && (obj.email = message.email);
    return obj;
  },

  create<I extends Exact<DeepPartial<Customer>, I>>(base?: I): Customer {
    return Customer.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Customer>, I>>(object: I): Customer {
    const message = createBaseCustomer();
    message.id = object.id ?? 0;
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    message.email = object.email ?? "";
    return message;
  },
};

function createBaseSigninRequest(): SigninRequest {
  return { header: undefined, customer: undefined };
}

export const SigninRequest = {
  encode(message: SigninRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.customer !== undefined) {
      Customer.encode(message.customer, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SigninRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigninRequest();
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

          message.customer = Customer.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SigninRequest {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      customer: isSet(object.customer) ? Customer.fromJSON(object.customer) : undefined,
    };
  },

  toJSON(message: SigninRequest): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.customer !== undefined && (obj.customer = message.customer ? Customer.toJSON(message.customer) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<SigninRequest>, I>>(base?: I): SigninRequest {
    return SigninRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SigninRequest>, I>>(object: I): SigninRequest {
    const message = createBaseSigninRequest();
    message.header = (object.header !== undefined && object.header !== null)
      ? Header.fromPartial(object.header)
      : undefined;
    message.customer = (object.customer !== undefined && object.customer !== null)
      ? Customer.fromPartial(object.customer)
      : undefined;
    return message;
  },
};

function createBaseSigninResponse(): SigninResponse {
  return { header: undefined, customer: undefined };
}

export const SigninResponse = {
  encode(message: SigninResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.customer !== undefined) {
      Customer.encode(message.customer, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SigninResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigninResponse();
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

          message.customer = Customer.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SigninResponse {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      customer: isSet(object.customer) ? Customer.fromJSON(object.customer) : undefined,
    };
  },

  toJSON(message: SigninResponse): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.customer !== undefined && (obj.customer = message.customer ? Customer.toJSON(message.customer) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<SigninResponse>, I>>(base?: I): SigninResponse {
    return SigninResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SigninResponse>, I>>(object: I): SigninResponse {
    const message = createBaseSigninResponse();
    message.header = (object.header !== undefined && object.header !== null)
      ? Header.fromPartial(object.header)
      : undefined;
    message.customer = (object.customer !== undefined && object.customer !== null)
      ? Customer.fromPartial(object.customer)
      : undefined;
    return message;
  },
};

function createBaseLoginRequest(): LoginRequest {
  return { header: undefined, customer: undefined };
}

export const LoginRequest = {
  encode(message: LoginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.customer !== undefined) {
      Customer.encode(message.customer, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginRequest();
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

          message.customer = Customer.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginRequest {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      customer: isSet(object.customer) ? Customer.fromJSON(object.customer) : undefined,
    };
  },

  toJSON(message: LoginRequest): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.customer !== undefined && (obj.customer = message.customer ? Customer.toJSON(message.customer) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginRequest>, I>>(base?: I): LoginRequest {
    return LoginRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LoginRequest>, I>>(object: I): LoginRequest {
    const message = createBaseLoginRequest();
    message.header = (object.header !== undefined && object.header !== null)
      ? Header.fromPartial(object.header)
      : undefined;
    message.customer = (object.customer !== undefined && object.customer !== null)
      ? Customer.fromPartial(object.customer)
      : undefined;
    return message;
  },
};

function createBaseLoginResponse(): LoginResponse {
  return { header: undefined, customer: undefined };
}

export const LoginResponse = {
  encode(message: LoginResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.customer !== undefined) {
      Customer.encode(message.customer, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginResponse();
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

          message.customer = Customer.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginResponse {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      customer: isSet(object.customer) ? Customer.fromJSON(object.customer) : undefined,
    };
  },

  toJSON(message: LoginResponse): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.customer !== undefined && (obj.customer = message.customer ? Customer.toJSON(message.customer) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginResponse>, I>>(base?: I): LoginResponse {
    return LoginResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LoginResponse>, I>>(object: I): LoginResponse {
    const message = createBaseLoginResponse();
    message.header = (object.header !== undefined && object.header !== null)
      ? Header.fromPartial(object.header)
      : undefined;
    message.customer = (object.customer !== undefined && object.customer !== null)
      ? Customer.fromPartial(object.customer)
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
