import * as TypeGraphQL from "type-graphql";
import { DeleteCreatorArgs } from "./args/DeleteCreatorArgs";
import { Creator } from "../../../models/Creator";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Creator)
export class DeleteCreatorResolver {
  @TypeGraphQL.Mutation(_returns => Creator, {
    nullable: true
  })
  async deleteCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCreatorArgs): Promise<Creator | null> {
    return getPrismaFromContext(ctx).creator.delete(args);
  }
}
