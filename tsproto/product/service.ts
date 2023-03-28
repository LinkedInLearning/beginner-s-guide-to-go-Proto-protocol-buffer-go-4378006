/* eslint-disable */
import _m0 from "protobufjs/minimal";
import {
  AllProductsRequest,
  AllProductsResponse,
  GetProductRequest,
  GetProductResponse,
  SearchRequest,
  SearchResponse,
} from "./message";

export const protobufPackage = "bigstar.product";

export interface ProductService {
  GetProducts(request: AllProductsRequest): Promise<AllProductsResponse>;
  GetProductById(request: GetProductRequest): Promise<GetProductResponse>;
  ProductSearch(request: SearchRequest): Promise<SearchResponse>;
}

export class ProductServiceClientImpl implements ProductService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "bigstar.product.ProductService";
    this.rpc = rpc;
    this.GetProducts = this.GetProducts.bind(this);
    this.GetProductById = this.GetProductById.bind(this);
    this.ProductSearch = this.ProductSearch.bind(this);
  }
  GetProducts(request: AllProductsRequest): Promise<AllProductsResponse> {
    const data = AllProductsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetProducts", data);
    return promise.then((data) => AllProductsResponse.decode(_m0.Reader.create(data)));
  }

  GetProductById(request: GetProductRequest): Promise<GetProductResponse> {
    const data = GetProductRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetProductById", data);
    return promise.then((data) => GetProductResponse.decode(_m0.Reader.create(data)));
  }

  ProductSearch(request: SearchRequest): Promise<SearchResponse> {
    const data = SearchRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ProductSearch", data);
    return promise.then((data) => SearchResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
