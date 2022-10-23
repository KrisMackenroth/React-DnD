set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."classes" (
	"class" TEXT NOT NULL,
	"hitDie" TEXT NOT NULL,
	"equipment" TEXT NOT NULL,
  "startHealth" TEXT NOT NULL,
  "prof" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."races" (
	"race" TEXT NOT NULL,
	"str" TEXT not NULL,
  "dex" TEXT not NULL,
  "con" TEXT not NULL,
  "wis" TEXT not NULL,
  "int" TEXT not NULL,
  "cha" TEXT not NULL,
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

CREATE TABLE "public"."spells" (
	"spell" TEXT NOT NULL,
	"lvl" TEXT NOT NULL,
	"type" TEXT NOT NULL,
  "description" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."proficencies" (
	"name" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."characters" (
  "characterId" serial,
	"name" TEXT NOT NULL,
	"class" TEXT NOT NULL,
	"race" TEXT NOT NULL,
  "background" TEXT NOT NULL,
  "str" TEXT not NULL,
  "dex" TEXT not NULL,
  "con" TEXT not NULL,
  "wis" TEXT not NULL,
  "int" TEXT not NULL,
  "cha" TEXT not NULL,
  "level" TEXT NOT NULL,
  "prof" TEXT NOT NULL,
   primary key ("characterId")
) WITH (
  OIDS=FALSE
);
