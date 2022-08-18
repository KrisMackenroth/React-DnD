set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."classes" (
	"class" TEXT NOT NULL,
	"hitDie" TEXT NOT NULL,
	"equipment" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."races" (
	"race" TEXT NOT NULL,
	"abilityScore" TEXT NOT NULL,
	"speed" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."backgrounds" (
	"background" TEXT NOT NULL,
	"skillProficiencies" TEXT NOT NULL,
	"languages" TEXT NOT NULL,
  "equipment" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);
