import { GraphQLClient } from "graphql-request";

export const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_END_POINT as string);