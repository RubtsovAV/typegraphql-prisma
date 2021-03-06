import * as TypeGraphQL from "type-graphql";
import { CreateNativeTypeModelArgs } from "./args/CreateNativeTypeModelArgs";
import { NativeTypeModel } from "../../../models/NativeTypeModel";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NativeTypeModel)
export class CreateNativeTypeModelResolver {
  @TypeGraphQL.Mutation(_returns => NativeTypeModel, {
    nullable: false
  })
  async createNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateNativeTypeModelArgs): Promise<NativeTypeModel> {
    return getPrismaFromContext(ctx).nativeTypeModel.create(args);
  }
}
