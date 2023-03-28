/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { LoginRequest, LoginResponse, SigninRequest, SigninResponse } from "./message";

export const protobufPackage = "bigstar.customer";

export interface CustomerService {
  Sigin(request: SigninRequest): Promise<SigninResponse>;
  Login(request: LoginRequest): Promise<LoginResponse>;
}

export class CustomerServiceClientImpl implements CustomerService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "bigstar.customer.CustomerService";
    this.rpc = rpc;
    this.Sigin = this.Sigin.bind(this);
    this.Login = this.Login.bind(this);
  }
  Sigin(request: SigninRequest): Promise<SigninResponse> {
    const data = SigninRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Sigin", data);
    return promise.then((data) => SigninResponse.decode(_m0.Reader.create(data)));
  }

  Login(request: LoginRequest): Promise<LoginResponse> {
    const data = LoginRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Login", data);
    return promise.then((data) => LoginResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
