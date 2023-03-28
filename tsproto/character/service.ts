/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { AllCharactersRequest, AllCharactersResponse, GetCharacterRequest, GetCharacterResponse } from "./message";

export const protobufPackage = "bigstar.character";

export interface CharacterService {
  GetCharacters(request: AllCharactersRequest): Promise<AllCharactersResponse>;
  GetCharacterById(request: GetCharacterRequest): Promise<GetCharacterResponse>;
}

export class CharacterServiceClientImpl implements CharacterService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "bigstar.character.CharacterService";
    this.rpc = rpc;
    this.GetCharacters = this.GetCharacters.bind(this);
    this.GetCharacterById = this.GetCharacterById.bind(this);
  }
  GetCharacters(request: AllCharactersRequest): Promise<AllCharactersResponse> {
    const data = AllCharactersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetCharacters", data);
    return promise.then((data) => AllCharactersResponse.decode(_m0.Reader.create(data)));
  }

  GetCharacterById(request: GetCharacterRequest): Promise<GetCharacterResponse> {
    const data = GetCharacterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetCharacterById", data);
    return promise.then((data) => GetCharacterResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
