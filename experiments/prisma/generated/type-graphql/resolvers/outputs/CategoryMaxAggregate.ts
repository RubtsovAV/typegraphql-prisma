import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
  simpleResolvers: undefined,
})
export class CategoryMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  number!: number;
}