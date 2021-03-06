import * as TypeGraphQL from "type-graphql";
import { FindManyDirectorArgs } from "./args/FindManyDirectorArgs";
import { Director } from "../../../models/Director";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Director)
export class FindManyDirectorResolver {
  @TypeGraphQL.Query(_returns => [Director], {
    nullable: false
  })
  async directors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyDirectorArgs): Promise<Director[]> {
    return getPrismaFromContext(ctx).director.findMany(args);
  }
}
