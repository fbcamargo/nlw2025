import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { db } from "../../db/conection.ts";
import { schema } from "../../db/schema/index.ts";
import { count, eq } from "drizzle-orm";
import { questions } from "../../db/schema/questions.ts";

export const getRoomsRoute: FastifyPluginCallbackZod = (app) => {
  app.get("/rooms", async () => {
    const results = await db
      .select({
        id: schema.rooms.id,
        name: schema.rooms.name,
        questionsCount: count(questions.id),
        createdAt: schema.rooms.cratedAt,
      })
      .from(schema.rooms)
      .leftJoin(schema.questions, eq(schema.questions.roomId, schema.rooms.id))
      .groupBy(schema.rooms.id, schema.rooms.name)
      .orderBy(schema.rooms.cratedAt);
    return results;
  });
};
