import * as TypeGraphQL from "type-graphql";
import { UpsertProblemArgs } from "./args/UpsertProblemArgs";
import { Problem } from "../../../models/Problem";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Problem)
export class UpsertProblemResolver {
  @TypeGraphQL.Mutation(_returns => Problem, {
    nullable: false
  })
  async upsertProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertProblemArgs): Promise<Problem> {
    return getPrismaFromContext(ctx).problem.upsert(args);
  }
}
