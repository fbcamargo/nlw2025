CREATE TABLE "rooms" (
	"id" uuid,
	"name" text NOT NULL,
	"description" text,
	"crated_at" timestamp DEFAULT now() NOT NULL
);
