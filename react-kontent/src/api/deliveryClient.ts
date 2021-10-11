import { DeliveryClient, TypeResolver } from "@kentico/kontent-delivery";
import Movie from "../models/Movie";

const deliveryClient = new DeliveryClient({
  projectId: "faaa98ea-8982-00a3-8612-060dfbd0611f",
  typeResolvers: [new TypeResolver("movie", () => new Movie())],
});

export default deliveryClient;
